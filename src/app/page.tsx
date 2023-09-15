import Image from "next/image";
import gdsc from "public/gdsc.png";
export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div>
        <Image src={gdsc} alt="GDSC Icon" height={300} placeholder="blur"/>
        <h1 className=" text-4xl text-center">
          Currently on planning phase...
        </h1>
      </div>
    </main>
  );
}
