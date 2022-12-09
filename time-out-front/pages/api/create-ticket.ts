import type { NextApiRequest, NextApiResponse } from "next";

export type TicketType = {
  workSection: string;
  title: string;
  description: string;
  timeSpend: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TicketType>
) {
  try {
    const { workSection, title, description, timeSpend } = req.body;
    res.status(200).json({ workSection, title, description, timeSpend });
    console.log(workSection, title, description, timeSpend);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}
