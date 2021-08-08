export interface PostData {
  email: string;
  recaptcha: string;
  files?: string;
  message: string;
  name: string;
}

export interface SubscribeInterface {
  email: string;
  also?: string;
}
