import { Accounts } from "../types/acc";
import { db } from "../lib/db";
import { OkPacket, RowDataPacket } from "mysql2";

export const login = (
  username: string,
  password: string,
  callback: Function
) => {
  const queryAcc =
    "SELECT * from tblaccounts WHERE username = ? AND password = ?";

  db.query(queryAcc, [username, password], (err, result: RowDataPacket[]) => {
    if (err) {
      callback(err);
    } else if (Array.isArray(result) && result.length > 0) {
      const user: Accounts = {
        id: result[0].id,
        username: result[0].username,
        password: result[0].password,
        permission: result[0].permission,
      };
      callback(null, user);
    } else {
      callback(new Error("Invalid username or password"));
    }
  });
};
