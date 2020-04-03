import {
  findUserByLogin
} from "../data-access/user.data-acces";
import { ServiceResponse } from "../types";
import { generateToken } from "./jwt.service";

export const authenticate = async (login: string, password: string): Promise<ServiceResponse> => {

  const usersWithLogin = await findUserByLogin(login);
  if (!usersWithLogin) {
    return {
      status: 401,
      message: `User with the login ${login} does not exist!`
    };
  }

  if (usersWithLogin.password !== password) {
    return {
      status: 403,
      message: `User Name/Password does not match!`
    };
  }

  return {
    status: 200,
    message: generateToken(login)
  };
};
