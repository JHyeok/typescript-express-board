import { Request, Response } from 'express';
import { LineSchema } from '../models/lineModel';

export async function line(req: Request, res: Response) {
  const vo = new LineSchema({
    line: req.query.msg,
  });

  const result = await vo.save();
  res.json(result);
}
