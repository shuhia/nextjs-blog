import Link from "next/link";

export const CustomLink = (props) => {
  return (
    <Link href={props.to}>
      <a className={props.className}>{props.children}</a>
    </Link>
  );
};
