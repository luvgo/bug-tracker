import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <button
        type="button"
        className="focus:shadow-outline rounded bg-blue-500 py-1 px-2 text-sm text-white hover:bg-blue-700 focus:outline-none"
      >
        Submit Bug
      </button>
      <Link href="Admin">
        <button
          type="button"
          className="focus:shadow-outline rounded bg-green-500 py-1 px-2 text-sm text-white hover:bg-green-700 focus:outline-none"
        >
          Admin Panel
        </button>
      </Link>
    </div>
  );
}
