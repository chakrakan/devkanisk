import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true,
      },
    });

    return res.status(200).json({
      total: totalViews._sum.count && totalViews._sum.count.toString(),
    });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      const { code, meta, message, clientVersion } = e;
      return res.status(500).json({ code, meta, message, clientVersion });
    } else if (e instanceof PrismaClientUnknownRequestError) {
      const { message, clientVersion } = e;
      return res.status(500).json({ message, clientVersion });
    } else if (e instanceof PrismaClientInitializationError) {
      const { errorCode, message, clientVersion } = e;
      return res.status(500).json({ errorCode, message, clientVersion });
    }
  }
}
