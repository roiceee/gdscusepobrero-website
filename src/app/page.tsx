import Image from "next/image";
import gdsc from "public/images/gdsc.png";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">
          <span className=" text-red">Com</span>
          <span className=" text-blue">ing </span>
          <span className=" text-yellow">So</span>
          <span className=" text-green">on!</span>
        </h1>
      </div>
    </main>
  );
}
