import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Icons/TV.png";
import Search from "../../public/Icons/Search.svg";
import Menu from "../../public/Icons/Menu.svg";

export default function Navbar() {
  return (
    <header className="min-h-[5rem] bg-gray-500 py-[0.94rem]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 min-[1440px]:px-[6.035rem]">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="flex items-center gap-6" href="/">
              <Image src={Logo} alt="Home" />
              <span className="text-2xl font-bold leading-6 text-white">MovieBox</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="inline-flex h-9 w-[525px] items-center justify-between gap-2.5 rounded-md border border-gray-300 px-2.5 py-1.5">
              <div className="text-base font-normal leading-normal text-white">What do you want to watch?</div>
              {/* <div className="relative h-4 w-4"></div> */}
              <Image src={Search} alt="Search" />
            </div>
          </div>

          <div className="flex items-center gap-[1.59rem]">
            <span className="text-base font-bold leading-6 text-white">Sign In</span>
            <Image src={Menu} alt="Menu" />
          </div>
        </div>
      </div>
    </header>
  );
}
