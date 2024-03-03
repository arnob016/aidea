import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Logo from "~/components/logo";
import Sidebar from "~/components/sidebar";


import { api } from "~/utils/api";
import MainPage from "~/components/mainpage";


export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>AIdea</title>
        <meta
          name="description"
          content="Transform your ideas into shareable content with one click!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex  min-h-screen bg-gradient-to-t from-[#ffffff] to-[#ead7ff]">
        <div className="flex- col container flex w-80 border-2 border-black">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          
          <div>
            <MainPage />
          </div>
         
      
          
        </div>
      </main>
    </>
  );
}
