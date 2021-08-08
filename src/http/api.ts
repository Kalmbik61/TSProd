import { Http } from "./index";
import { PostData, SubscribeInterface } from "./interface.api";
class Api {
  async subscribe(data: SubscribeInterface, recaptcha: string) {
    const formData = this.buildFormData({
      Email: data.email,
      Also: data.also,
      "g-recaptcha-response": recaptcha,
    });
    const response = await Http.request({
      method: "POST",
      url: "/subscribe",
      data: formData,
    });
    return response.data;
  }

  async sendSupport(data: PostData) {
    const formData = this.buildFormData({
      Name: data.name,
      Email: data.email,
      Message: data.message,
      file: data.files && data.files[0],
      "g-recaptcha-response": data.recaptcha,
    });
    const response = await Http.request({
      method: "POST",
      url: "/support",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  buildFormData = (params: any = {}) => {
    const formData = new FormData();
    Object.keys(params).forEach((key) => formData.append(key, params[key]));
    return formData;
  };
}
export default new Api();
