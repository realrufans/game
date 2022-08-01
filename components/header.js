import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-between z-50   items-center p-2 text-[#FBFBFB]   bg-[#101B2E]  sticky top-0">
      <Link href={"/"}>
        <div className=" flex space-x-3 items-center cursor-pointer">
          {/* <MenuAlt1Icon className="h-9 sm:hidden" /> */}

          <Image
            width={44}
            alt='solomon emetonjo'
            height={44}
            loading={"eager"}
            src={"/images/rufans.png"}
            className="rounded-full"
          />


          <h1 className="hidden sm:inline-block font-bold font-inter text-base max-w-[100px] ">
            Solomon Emetonjo
          </h1>
        </div>
      </Link>

      <ul className=" border-t-[1px] border-[#4b597d] sm:border-none flex justify-between fixed bottom-0 w-full left-0 right-0 min-w-full  bg-[#101B2E] sm:static p-5 sm:min-w-0 sm:max-w-xs">
        <Link href={"https://realrufans.github.io/cv/"}>
          <a className="hover:scale-[1.1] hover:ease-in-out">Resume</a>
        </Link>

        <Link href={"/#projects"}>
          <a className="hover:scale-[1.1] hover:ease-in-out">Projects</a>
        </Link>
        <Link href={"/#about"}>
          <a className="hover:scale-[1.1] hover:ease-in-out">About</a>
        </Link>
      </ul>

      <Link href={"/contact"}>
        <p className=" cursor-pointer bg-green-900 text-[#f4f4f4] text-lg p-2 w-fit font-semibold rounded-xl">
          Hire Me
        </p>
      </Link>
    </header>
  );
}

export default Header;
