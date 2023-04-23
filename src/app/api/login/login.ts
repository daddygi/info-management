import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import * as accountModel from "../../models/acc";
import { Accounts } from "../../types/acc";
import jwt from "jsonwebtoken";

const loginHandler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { username, password } = req.body;

  accountModel.login(username, password, (err: Error, user: Accounts) => {
    if (err) {
      res.statusCode = 401;
      res.send({ message: err.message });
    } else {
      // Generate a JWT token
      const token = jwt.sign({ username: user.username }, "secret");

      // Set the token in a cookie
      res.setHeader("Set-Cookie", `token=${token}; HttpOnly`);

      res.statusCode = 200;
      res.send({ user });
    }
  });
};

export default loginHandler;
