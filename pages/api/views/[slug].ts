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
    const slug = req.query.slug?.toLocaleString();
    if (slug && req.method === "POST") {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      });
      return res.status(200).json({
        total: newOrUpdatedViews.count.toString(),
      });
    }

    if (req.method === "GET") {
      const views = await prisma.views.findUnique({
        where: {
          slug,
        },
      });
      return res.status(200).json({ total: views && views.count.toString() });
    }
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
