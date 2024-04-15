import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import {RecoilRoot} from "recoil"

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import  Layout  from "./layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
 
   
    <SessionProvider session={session}>
         <Layout>
         <RecoilRoot>
         <main className={`font-sans ${inter.variable}`}>
        <Component {...pageProps} />
         </main>
         </RecoilRoot>
         </Layout>
      
    </SessionProvider>

  );
};

export default api.withTRPC(MyApp);
