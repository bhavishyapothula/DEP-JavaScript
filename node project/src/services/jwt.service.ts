import { sign, verify } from 'jsonwebtoken';

export const generateToken = (login: string): string => {
  return sign(login, process.env.TOKEN_SECRET);
};

export const validateToken = (req, res, next) => {

  // this is temporary line to disable authentication and must be removed
  next();

  // const authHeader = req.headers['authorization'];
  // // auth header format is like "Bearer token"
  // const userToken = authHeader && authHeader.split(' ')[1];

  // if (!userToken) return res.sendStatus(401);

  // verify(userToken, process.env.TOKEN_SECRET, (error, login) => {
  //   if (error) return res.sendStatus(403);
  //   req.login = login;
  //   next();
  // });  
}
