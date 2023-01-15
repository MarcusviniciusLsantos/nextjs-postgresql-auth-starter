import { NextApiRequest, NextApiResponse } from "next";
import model from "../../../db/models";
import { hash } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  const user = await model.user.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    res.status(400).send("User already exists");
  } else {
    const user = await model.user.create({
      email,
      password: await hash(password, 10),
    });
    res.status(200).json(user);
  }
}
