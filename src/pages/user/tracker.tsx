import Head from "next/head";

type rowProps = {
  title: string;
  priority: string;
  status: string;
  assignee: string;
  timeAdded: string;
  comments: string;
};

export const Row = (props: rowProps) => {
  return (
    <tr className="border-b bg-gray-100 hover:bg-orange-100">
      <td className="p-3 px-5">
        <input type="text" value={props.title} className="bg-transparent" />
      </td>
      <td className="p-3 px-5">
        <span className="bg-transparent">{props.priority}</span>
      </td>
      <td className="p-3 px-5">
        <span className="bg-transparent">{props.status}</span>
      </td>
      <td className="p-3 px-5">
        <span className="bg-transparent">{props.assignee}</span>
      </td>
      <td className="p-3 px-5">
        <span className="bg-transparent">{props.timeAdded}</span>
      </td>
      <td className="p-3 px-5">
        <span className="bg-transparent">{props.comments}</span>
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
  );
};

const Tracker = () => {
  return (
    <>
      <Head>
        <title>bug-tracker</title>
        <meta name="description" content="bug-tracker" />
      </Head>
      <main className="font-san h-screen w-screen bg-slate-700">
        <div className="flex justify-center text-gray-900">
          <div className="p-4">
            <table className="text-md rounded bg-white shadow-md">
              <tbody>
                <tr className="h-fit border-b">
                  <th className="p-3 px-5 text-left">Title</th>
                  <th className="p-3 px-5 text-left">Priority</th>
                  <th className="p-3 px-5 text-left">Status</th>
                  <th className="p-3 px-5 text-left">Assignee</th>
                  <th className="p-3 px-5 text-left">Time Added</th>
                  <th className="p-3 px-5 text-left">Comments</th>
                  <th></th>
                </tr>
                <Row
                  title="This is a bug"
                  priority="URGENT"
                  status="OPEN"
                  assignee="Juan"
                  timeAdded="2-8-2023"
                  comments="comments"
                />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tracker;
