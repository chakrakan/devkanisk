import { allPosts, Post } from "contentlayer/generated";
import { pick } from "@contentlayer/utils";

export type PickedPost = {
  description: string;
  publishedAt: string;
  readingTime: Record<string, any>;
  slug: string;
  title: string;
};

export const sortedBlogPosts: PickedPost[] = allPosts
  .map((post: Post) =>
    pick(post, ["slug", "title", "description", "publishedAt", "readingTime"])
  )
  .sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
