import NaoEncontrado from "../errors/NaoEncontrado.js";
import { autores, livros } from "../models/index.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";

export default class LivroControler {
  static async listarLivros(req, res, next) {
    try {
      let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;

      let [campoOrdenacao, ordem] = ordenacao.split(":");

      limite = parseInt(limite);
      pagina = parseInt(pagina);
      ordem = parseInt(ordem);

      if (limite > 0 && pagina > 0) {
        const listaLivros = await livros
          .find()
          .sort({
            [campoOrdenacao]:
              ordem /* titulo: 1 para ordenar em ordem alfabética*/,
          })
          .skip((pagina - 1) * limite)
          .limit(limite)
          .populate("autor")
          .exec();
        res.status(200).json(listaLivros);
      } else {
        next(new RequisicaoIncorreta());
      }
    } catch (err) {
      next(err);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livros.findById(id);

      if (!livroEncontrado) {
        return next(new NaoEncontrado("Id do livro não localizado."));
      }
      return res.status(200).json(livroEncontrado);
    } catch (err) {
      next(err);
    }
  }

  static async cadastrarLivro(req, res, next) {
    try {
      const novoLivro = await livros.create(req.body);
      res
        .status(201)
        .json({ message: "criado com sucesso", livros: novoLivro });
    } catch (err) {
      next(err);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;

      const livroEcontrado = await livros.findByIdAndUpdate(id, req.body);

      if (!livroEcontrado) {
        return next(new NaoEncontrado("Id do livro não localizado."));
      }
      return res.status(200).json({ message: "livro atualizado" });
    } catch (err) {
      next(err);
    }
  }

  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;

      const livroEncontrado = await livros.findByIdAndDelete(id);

      if (!livroEncontrado) {
        return next(new NaoEncontrado("Id do livro não localizado."));
      }
      return res.status(200).json({ message: "livro excluido com sucesso" });
    } catch (err) {
      next(err);
    }
  }

  static async listarLivroPorFiltro(req, res, next) {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = await livros.find(busca).populate("autor");

        res.status(200).json(livrosResultado);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      next(err);
    }
  }
}

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor, nomeEditora } =
    parametros;

  let busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.paginas = {};

  if (minPaginas) busca.paginas.$gte = minPaginas;
  if (maxPaginas) busca.paginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
}
