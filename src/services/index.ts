import { urlEndpoint } from "@/constants";
import axios from "axios"
const serviceInstanceNoAuth = axios.create({
  baseURL: urlEndpoint,
  timeout: 10000,
});

export { serviceInstanceNoAuth }
export { imageUpload } from "./upload/image.upload";
