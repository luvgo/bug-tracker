import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { MdNotificationsNone, MdDarkMode } from "react-icons/md";

export const SideBar = () => {
  return (
    <nav className="flex h-screen w-fit flex-col pl-14 text-left text-lg text-white">
      <Link href="/user" className="py-1">
        Dashboard
      </Link>
      <Link href="/user/bugtracker" className="py-1">
        All Issues
      </Link>
      <Link href="" className="py-1">
        My Issues
      </Link>
      <Link href="" className="py-1">
        Submit Issue
      </Link>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="pt-5" />
      <header className="flex items-center justify-between text-white">
        <h1 className="bold pl-14 text-2xl">Bug Tracker</h1>
        <nav className="flex justify-end">
          <MdDarkMode className="mx-5" size="30" />
          <input
            type="search"
            placeholder="search"
            className=" rounded bg-slate-200 text-black"
          ></input>
          <MdNotificationsNone className="mx-5" size="30" />
          <Link href="/">
            <VscAccount className="mr-5" size="30" />
          </Link>
        </nav>
      </header>
      <div className="py-2" />
    </>
  );
};

export default Navbar;
