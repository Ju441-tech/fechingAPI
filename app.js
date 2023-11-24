import { fetchAPI } from "./API/api.js";

const resp=await fetchAPI()
//await veut dire : une fois que la promesse est résolue, resp sera = à l'objet json reçu
console.log(resp)