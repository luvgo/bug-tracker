import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "../../components/Navbar";

import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
