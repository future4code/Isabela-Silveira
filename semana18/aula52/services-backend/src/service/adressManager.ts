import axios from "axios";
import { adress } from "../types/types";

export async function getAddressMyCep(cep: string): Promise<adress> {

    try {

    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    const myAddress: adress = {
        street: result.data.logradouro,
        neighbourhood: result.data.bairro,
        city: result.data.localidade,
        state: result.data.uf
    }

    return myAddress

    } catch (error) {
        throw new Error(error.message)
    }

}