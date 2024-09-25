"use client";

import Button from "./Button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { status } = useSession();

  const isLoggedIn = status === "authenticated";

  function handleLogout() {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-2 items-center justify-center">
          <p>Are you sure you want to logout?</p>
          <Button
            text="Logout"
            buttonStyle="bg-blue text-offwhite font-semibold"
            onClick={() => {
              closeToast();
              signOut({ callbackUrl: "/" });
            }}
          />
        </div>
      ),
      {
        autoClose: false,
        closeButton: true,
        position: "top-center",
      }
    );
  }

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
          <Button text="Logout" onClick={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
