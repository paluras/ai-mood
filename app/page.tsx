import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {

  const { userId } = auth()

  let href = userId ? 'journal' : '/new-user';
  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center text-white ">
        <div className="flex gap-1 justify-normal items-start flex-col" >
          <h1 className="text-6xl ">Best jurnal</h1>
          <p className="text-2xl text-white/20">track your mood with ai</p>
          <Link href={href}><button className="bg-blue-300 px-4 py-2 rounded-lg text-xl">get started</button>
          </Link>
        </div>
      </div>
    </>
  );
}
