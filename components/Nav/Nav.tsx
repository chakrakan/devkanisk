import CustomLink from "components/CustomLink/CustomLink";

export default function Nav() {
  return (
    <nav className="flex space-x-5 mt-5 mb-10">
      <CustomLink href="/">
        <a aria-label="Home">Home</a>
      </CustomLink>
      <CustomLink href="/posts">
        <a aria-label="Posts">Posts</a>
      </CustomLink>
    </nav>
  );
}
