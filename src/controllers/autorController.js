import NaoEncontrado from "../errors/NaoEncontrado.js";
import { autores } from "../models/index.js";

export default class AutorControler {
  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (err) {
      next(err);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (!autorEncontrado) {
        return next(new NaoEncontrado("Id do autor não localizado."));
      }
      return res.status(200).json(autorEncontrado);
    } catch (err) {
      next(err);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (err) {
      next(err);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;

      const autorEcontrado = await autor.findByIdAndUpdate(id, req.body);

      if (!autorEcontrado) {
        return next(new NaoEncontrado("Id do autor não localizado."));
      }
      return res.status(200).json({ message: "autor atualizado" });
    } catch (err) {
      next(err);
    }
  }

  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;

      const autorEncontrado = await autor.findByIdAndDelete(id);

      if (!autorEncontrado) {
        return next(new NaoEncontrado("Id do autor não localizado."));
      }
      return res.status(200).json({ message: "autor excluido com sucesso" });
    } catch (err) {
      next(err);
    }
  }
}
