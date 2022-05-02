type TagProps = {
  title: string;
};

export default function Tag({ title }: TagProps) {
  return (
    <span className="mx-0.5 font-normal bg-zinc-700 hover:bg-zinc-400 rounded-md hover:text-zinc-50 px-2 text-sm leading-loose cursor-pointer">
      {title}
    </span>
  );
}
