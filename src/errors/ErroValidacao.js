import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

export default class ErroValidacao extends RequisicaoIncorreta {
  constructor(err) {
    const mensagensErros = Object.values(err.errors)
      .map((err) => err.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${mensagensErros}.`);
  }
}
