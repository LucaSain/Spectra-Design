import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed z-50 shadow-2xl">
      <Link href="/" className="btn btn-ghost font-semibold">
        Spectra Design
      </Link>
      <Link href="/projects" className="btn btn-ghost ">
        Projects
      </Link>
      {/* <a href="#team" className="btn btn-ghost ">
        Team
      </a>
      <a href="partners" className="btn btn-ghost ">
        Partners
      </a> */}
    </div>
  );
}
