import { useEffect } from "react";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Views } from "lib/types";

type ViewCounterProps = {
  slug: string;
};

export default function ViewCounter({ slug }: ViewCounterProps) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);

  return (
    <span>{` · ${views > 0 ? views.toLocaleString() : "–––"} Views`}</span>
  );
}
