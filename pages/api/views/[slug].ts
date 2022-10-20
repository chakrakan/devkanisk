import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug?.toLocaleString();
    if (req.method === "POST" && slug) {
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

    if (req.method === "GET" && slug) {
      const views = await prisma.views.findUnique({
        where: {
          slug,
        },
      });
      return res.status(200).json({ total: views && views.count.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e });
  }
}
