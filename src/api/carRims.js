import { fetchAsync } from "./api"


export const findAllCarRims = () => fetchAsync('/rims')