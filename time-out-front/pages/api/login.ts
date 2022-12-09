import type { NextApiRequest, NextApiResponse } from "next";

type login = {
  email: string;
  username: string;
  password: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<login>
) {
  try {
    const { email, username, password } = req.body;
    res.status(200).json({ email, username, password });
    console.log(email, username, password);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}
