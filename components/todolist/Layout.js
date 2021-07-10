import React from "react";
import Navbar from "./navbar";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div className="todolist">
      <Navbar></Navbar>
      {children}
      <Link href="/todolist">
        <button>Back to todolist</button>
      </Link>
    </div>
  );
};

export default Layout;
