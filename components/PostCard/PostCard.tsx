import type { PickedPost } from "lib/helpers";
import CustomLink from "components/CustomLink/CustomLink";

import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Views } from "lib/types";

type PostCardProps = {
  post: PickedPost;
};

export default function PostCard({ post }: PostCardProps) {
  const { data } = useSWR<Views>(`/api/views/${post.slug}`, fetcher);
  const views = data?.total;
  return (
    <CustomLink
      key={`blog/${post.slug}`}
      href={`/blog/${post.slug}`}
      className="w-full block p-4 overflow-hidden border border-gray-600 rounded-lg mt-6"
      aria-label={post.title}
    >
      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-sky-400">{post.title}</h5>
        </div>
      </div>

      <div className="mt-0 sm:pr-2">
        <p className="text-sm text-gray-500 dark:text-zinc-300">
          {post.description}
        </p>
      </div>

      <dl className="flex">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Published
          </dt>
          <dd className="text-xs text-zinc-400">{post.publishedAt}</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Reading Time
          </dt>
          <dd className="text-xs text-zinc-400">
            {post.readingTime
              ? `${post.readingTime.text.substring(
                  0,
                  post.readingTime.text.length - 5
                )}`
              : ""}
          </dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6 align-baseline capsize">
          <dt className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Views
          </dt>
          <dd className="text-xs text-zinc-400">
            {views ? views.toLocaleString() : "---"}
          </dd>
        </div>
      </dl>
    </CustomLink>
  );
}
