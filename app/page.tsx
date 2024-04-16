import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center text-white ">
        <div className="flex gap-1 justify-normal items-start flex-col" >
          <h1 className="text-6xl ">Best jurnal</h1>
          <p className="text-2xl text-white/20">track your mood</p>
          <Link href="/jurnal"><button className="bg-blue-300 px-4 py-2 rounded-lg text-xl">get started</button>
          </Link>
        </div>
      </div>
    </>
  );
}
