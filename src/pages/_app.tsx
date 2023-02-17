import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";
import { api } from "../utils/api";

import "../styles/global.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const showNavbar = router.pathname === '/login' ? false : true;

  return (
    <SessionProvider session={session}>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
