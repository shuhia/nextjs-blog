import React, { useEffect, useState } from "react";
import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  const [hide, setHide] = useState(false);

  const createLinks = function (n = 0) {
    return [...Array(n).keys()].map((e, id) => (
      <li key={"li-" + id}>
        <Link key={"link-" + id} href={"/article/" + (e + 1)}>
          <a>{"Article " + (e + 1)}</a>
        </Link>
      </li>
    ));
  };
  const links = createLinks();

  function onScroll(e) {
    setHide(true);
  }
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

  return (
    <div className={navStyles.container}>
      <div className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/music">music</Link>
          </li>
          <li>
            <Link href="/videos">videos</Link>
          </li>
          <li>
            <Link href="/todolist">todolist</Link>
          </li>
          <li>
            <Link href="/slideshow">slideshow</Link>
          </li>
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
