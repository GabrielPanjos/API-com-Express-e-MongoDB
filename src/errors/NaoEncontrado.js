import ErroBase from "./ErroBase.js";

export default class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}
