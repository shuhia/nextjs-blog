import React, { useEffect, useState } from "react";
import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";

const LinkList = (props) => {
  return <ul>{props.children}</ul>;
};

const LinkItem = ({ children, setCurrentLink, ...rest }) => {
  return (
    <li>
      <Link {...rest}>{children}</Link>
    </li>
  );
};

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState(false);
  const createLinks = function (n = 0) {
    return [...Array(n).keys()].map((e, id) => (
      <li key={"li-" + id}>
        <Link key={"link-" + id} href={"/article/" + (e + 1)}>
          <a>{"Article " + (e + 1)}</a>
        </Link>
      </li>
    ));
  };

  return (
    <div className={navStyles.container}>
      <div className={navStyles.nav}>
        <LinkList>
          <LinkItem href="/">Home</LinkItem>

          <LinkItem href="/blog">Blog</LinkItem>

          <LinkItem href="/about">About</LinkItem>

          <LinkItem href="/videos">videos</LinkItem>

          <LinkItem href="/todolist">todolist</LinkItem>

          <LinkItem href="/slideshow">slideshow</LinkItem>
        </LinkList>
      </div>
    </div>
  );
};

export default Navbar;
