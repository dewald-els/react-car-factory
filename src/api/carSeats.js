import { fetchAsync } from "./api"


export const findAllCarSeats = () => fetchAsync('/seats')