export default class ErroBase extends Error {
  constructor(messagem = "Erro interno do servidor.", status = 500) {
    super();
    this.messagem = messagem;
    this.status = status;
  }

  enviarResposta(res) {
    res
      .status(this.status)
      .send({ messagem: this.messagem, status: this.status });
  }
}
