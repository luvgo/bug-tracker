import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bug-tracker</title>
        <meta name="description" content="bug-tracker" />
      </Head>
      <main className="min-h-screen bg-slate-700 font-sans">
        <div className="max-w-md m-auto">
          <button className="bg-blue-500 text-white p-2 rounded-lg">Submit Bug</button>
          <Link href="/login">
            <button className="bg-green-500 text-white p-2 rounded-lg">Login</button> 
          </Link>
          <div className="pt-2" />
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">First Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Second Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Third Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Another Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Item for the Nth time</li>
          </ul>
        </div>
      </main>


    </>
  );
};

export default Home;
