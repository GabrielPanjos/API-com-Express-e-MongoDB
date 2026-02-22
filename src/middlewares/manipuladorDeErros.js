import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";

export default function manipuladorDeErros(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    return new RequisicaoIncorreta().enviarResposta(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    return new ErroValidacao(err).enviarResposta(res);
  } else if (err instanceof ErroBase) {
    err.enviarResposta(res);
  } else {
    return new ErroBase().enviarResposta(res);
  }
}
