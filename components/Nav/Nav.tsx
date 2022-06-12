import CustomLink from "components/CustomLink/CustomLink";

export default function Nav() {
  return (
    <nav className="flex space-x-5 mt-10 mb-10">
      <CustomLink href="/" aria-label="Home">
        Home
      </CustomLink>
      <CustomLink href="/blog" aria-label="Blog">
        Blog
      </CustomLink>
    </nav>
  );
}
