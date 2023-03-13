import { urlEndpoint } from "@/constants";
import axios from "axios";
import { serviceInstanceNoAuth } from "..";

async function imageUpload(image: any) {
	const formData = new FormData();
	formData.append("images", image);
	const { data } = await serviceInstanceNoAuth.post(
		"/api/v1/upload/images",
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data",
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { imageUpload };
