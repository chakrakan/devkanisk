import CustomLink from "components/CustomLink/CustomLink";

export default function Nav() {
  return (
    <nav className="flex space-x-5 mt-5 mb-10">
      <CustomLink href="/" aria-label="Home">
        Home
      </CustomLink>
      <CustomLink href="/posts" aria-label="Posts">
        Posts
      </CustomLink>
    </nav>
  );
}
