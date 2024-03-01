import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>AIdea</title>
        <meta name="description" content="Transform your ideas into shareable content with one click!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[#ffffff] to-[#ead7ff]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        </div>
      </main>
    </>
  );
}