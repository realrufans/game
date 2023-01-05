import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  // toggle responsible for changing the theme

  const renderThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    return currentTheme === "dark" ? (
      <SunIcon
        onClick={() => setTheme("light")}
        className="h-9 cursor-pointer"
      />
    ) : (
      <MoonIcon
        onClick={() => setTheme("dark")}
        className="h-9 cursor-pointer"
      />
    );
  };
  return (
    <header className="flex justify-between z-50   max-w-7xl mx-auto items-center p-2 themeColors sticky top-0">
      <Link href={"/"}>
        <div className=" flex space-x-3 items-center cursor-pointer">
          {/* <MenuAlt1Icon className="h-9 sm:hidden" /> */}

          <Image
            width={44}
            alt="solomon emetonjo"
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

      <ul className=" border-t-[1px] border-[#4b597d] sm:border-none flex justify-between fixed bottom-0 w-full left-0 right-0 min-w-full  themeColors md:static p-5 md:min-w-0 sm:max-w-md">

        <a href={"https://realrufans.github.io/cv/"} className="hover:scale-[1.1] hover:ease-in-out hover:shadow-green-900/50 hover:shadow-inner p-1">Resume</a>


        <Link href={"/#projects"}>
          <a className="hover:scale-[1.1] hover:ease-in-out hover:shadow-green-900/50 hover:shadow-inner p-1">Showcase</a>
        </Link>
        <Link href={"/blog"}>
          <a className="hover:scale-[1.1] hover:ease-in-out hover:shadow-green-900/50 hover:shadow-inner p-1">Blog</a>
        </Link>
        <Link href={"/#about"}>
          <a className="hover:scale-[1.1] hover:ease-in-out  hover:shadow-green-900/50 hover:shadow-inner p-1">About</a>
        </Link>
      </ul>

      <div className="flex space-x-5 items-center">
        {" "}
        <Link href={"/contact"}>
          <p className=" cursor-pointer bg-green-900 text-[#f4f4f4] text-lg p-2 w-fit font-semibold rounded-xl">
            Hire Me
          </p>
        </Link>
        {renderThemeToggle()}
      </div>
    </header>
  );
}

export default Header;
