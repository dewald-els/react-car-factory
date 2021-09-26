import { fetchAsync } from "./api"


export const findAllCarTypes = () => fetchAsync('/types')