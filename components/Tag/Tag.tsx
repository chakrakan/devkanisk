type TagProps = {
  title: string;
};

export default function Tag({ title }: TagProps) {
  return (
    <span className="mx-0.5 font-normal bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-400 rounded-md dark:hover:text-zinc-50 px-2 text-sm leading-loose cursor-pointer">
      {title}
    </span>
  );
}
