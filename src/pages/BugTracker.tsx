import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function BugReport() {
  return (
    <>
      <Head>
        <title>bug-tracker</title>
        <meta name="description" content="bug-tracker" />
      </Head>
      <main className="min-h-screen bg-slate-700 font-sans">
        <Navbar />
        <div className="text-gray-900">
          <div className="flex justify-center px-3 py-4">
            <table className="text-md mb-4 w-full rounded bg-white shadow-md">
              <tbody>
                <tr className="border-b">
                  <th className="p-3 px-5 text-left">Name</th>
                  <th className="p-3 px-5 text-left">Email</th>
                  <th className="p-3 px-5 text-left">Role</th>
                  <th></th>
                </tr>
                <tr className="border-b bg-gray-100 hover:bg-orange-100">
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.name"
                      className="bg-transparent"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.email"
                      className="bg-transparent"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <select value="user.role" className="bg-transparent">
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td className="flex justify-end p-3 px-5">
                    <button
                      type="button"
                      className="focus:shadow-outline mr-3 rounded bg-blue-500 py-1 px-2 text-sm text-white hover:bg-blue-700 focus:outline-none"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="focus:shadow-outline mr-3 rounded bg-green-500 py-1 px-2 text-sm text-white hover:bg-green-700 focus:outline-none"
                    >
                      Modify
                    </button>
                    <button
                      type="button"
                      className="focus:shadow-outline rounded bg-red-500 py-1 px-2 text-sm text-white hover:bg-red-700 focus:outline-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
