import { isAxiosError } from "axios";
import http from "../../config/http";
import dayjs from "dayjs";

export default class UserService {
  async cadastrarUsuario(
    email: string,
    nome: string,
    sobrenome: string,
    dataNascimento: string,
    telefone: string,
    correlationId: string
  ) {
    const payload = {
      name: nome,
      lastname: sobrenome,
      birthdate: dayjs(dataNascimento).format("DD-MM-YYYY"),
      phone: telefone,
      email: email,
      correlation_id: correlationId,
    };

    try {
      const res = await http.post(
        process.env.MS_USER_URL + "/clientes",
        payload
      );
      return true;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.errors;
      }
      return false;
    }
  }
  async editarUsuario(
    nome: string,
    sobrenome: string,
    dataNascimento: string,
    telefone: string,
    userId: string
  ) {
    const payload = {
      name: nome,
      lastname: sobrenome,
      birthdate: dayjs(dataNascimento).format("DD-MM-YYYY"),
      phone: telefone,
      
    };

    try {
      const res = await http.put(
        process.env.MS_USER_URL + "/clientes/" + userId,
        payload
      );
      return true;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.errors;
      }
      return false;
    }
  }
  async cadastrarVeiculo(
    marca: string,
    modelo: string,
    ano: string,
    autonomia: string,
    correlationId: string
  ) {
    const payload = {
      brand_name: marca,
      model_name: modelo,
      model_year: ano,
      autonomy: Number(autonomia),
      correlation_id: correlationId,
    };

    try {
      await http.post(process.env.MS_VEHICLE_URL + "/veiculos", payload);
      return true;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.errors;
      }
      return false;
    }
  }

  async buscarInfosUsuario(userId: string) {
    try {
      const res = await http.get(process.env.MS_USER_URL + "/clientes/" + userId)
      return res.data
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async login(email: string, senha: string) {
    const payload = {
      email: email,
    };
    try {
      const res = await http.post(
        process.env.MS_USER_URL + "/clientes/buscar/email",
        payload
      );
      return res.data.user_id;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        console.log(error.response?.data.detail);
      }
      return false;
    }
  }
}
