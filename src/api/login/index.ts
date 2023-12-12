import { http } from "@/utils/request";
import type { login_type } from "./type";

enum API {
  LOGIN_API = "/v3/text/login/password",
}

/**
 * 登录
 * @param account -手机号
 * @param password -密码
 * @returns
 */
export const Login_HTTP = ({ account, password }: login_type) => {
  return http<string>({
    url: API.LOGIN_API,
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
