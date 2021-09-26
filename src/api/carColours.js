import { fetchAsync } from "./api"


export const findAllCarColours = () => fetchAsync('/colours')