import CustomLink from "../CustomLink/CustomLink";
import Image from "next/image";
import ProsCard from "components/ProsCard/ProsCard";
import ConsCard from "components/ConsCard/ConsCard";

const MDXComponents = {
  a: CustomLink,
  Image,
  ProsCard,
  ConsCard,
};

export default MDXComponents;
