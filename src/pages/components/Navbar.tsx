import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { MdNotificationsNone, MdDarkMode } from "react-icons/md";
import SubmitForm from "../user/form"

const Navbar = () => {
  return (
    <>
      <header className="flex w-screen items-center justify-between bg-slate-500 p-5 text-white">
        <h1 className="bold pl-9 text-2xl">Bug Tracker</h1>
        <nav className="flex justify-end">
          <button onClick={() => <SubmitForm />}>Submit Bug</button>
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
    </>
  );
};

export default Navbar;
