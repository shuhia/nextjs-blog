import React from "react";
import Link from "next/Link";

const firstPost = () => {
  const test = "";
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default firstPost;
