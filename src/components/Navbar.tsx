"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  // TEMPORARY
  const [isLoggedIn, seIsLoggedIn] = useState(true);

  return (
    <div className="md:px-32 px-8 h-20 text-offwhite flex items-center justify-between">
      <div>
        <Link href="/">
          <h2 className="md:text-3xl text-xl font-medium">BLOG</h2>
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-6 ">
        {isLoggedIn && (
          <Link href="/post-blog">
            <h2 className="md:text-lg text-sm cursor-pointer ">Post blog</h2>
          </Link>
        )}
        <Link href="/all-blogs">
          <h2 className="md:text-lg text-sm cursor-pointer ">All blogs</h2>
        </Link>
        {!isLoggedIn ? (
          <Link href="/login">
            <Button text="Login" />
          </Link>
        ) : (
          <Link href="/">
            <Button text="Logout" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
