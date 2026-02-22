import express from "express";
import LivroControler from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroControler.listarLivros);
routes.get("/livros/busca", LivroControler.listarLivroPorFiltro);
routes.get("/livros/:id", LivroControler.listarLivroPorId);
routes.post("/livros", LivroControler.cadastrarLivro);
routes.put("/livros/:id", LivroControler.atualizarLivro);
routes.delete("/livros/:id", LivroControler.excluirLivro);

export default routes;
