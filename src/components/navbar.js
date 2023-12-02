import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-14 fixed bg-red-800 flex justify-between items-center">
        <Link href={"/#home"}>
          <div id="left" className="ml-10 flex items-center space-x-6">
            <Image
              alt="apexlogo"
              src="/navbar-logo.png"
              width={30}
              height={30}
            />
            <p className="font-semibold text-2xl">APEX WEEKLY NEWS</p>
          </div>
        </Link>
        <div id="right" className="flex mr-10 space-x-6 font-mono">
          <Link href={"/#limited"}>
            <div className="hover:text-slate-400 duration-300">
              LIMITED MODE
            </div>
          </Link>
          <Link href={"/#cosmetics"}>
            <div className="hover:text-slate-400 duration-300">COSMETICS</div>
          </Link>
        </div>
      </div>
    </>
  );
}
