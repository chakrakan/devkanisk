import { allPosts, Post } from ".contentlayer/generated";

export const sortedBlogPosts: Post[] = allPosts.sort(
  (a: Post, b: Post) =>
    Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);
