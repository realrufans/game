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
        tabIndex={0}
        onClick={() => setTheme("light")}
        className="theme-btn"
      />
    ) : (
      <MoonIcon
        tabIndex={0}
        onClick={() => setTheme("dark")}
        className="theme-btn"
      />
    );
  };
  return (
    <header className="flex justify-between z-50  shadow-gray-200/90  dark:shadow-gray-900/90 shadow-md   mx-auto items-center p-2 themeColors sticky -top-1">
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

          <h1 className="hidden sm:inline-flex font-bold  hover:text-green-600 dark:text-gray-200   text-gray-800  font-mono text-lg max-w-[100px] ">
            Solomon.E
          </h1>
        </div>
      </Link>

      <ul className=" border-t-[1px] border-[#4b597d] sm:border-none flex justify-between fixed bottom-0 w-full left-0 right-0 min-w-full  themeColors md:static p-5 md:min-w-0 sm:max-w-md">
        <Link className="text-blue-500" href={" /solomon_Emeonjo__Resume.pdf"}>
          <div className="relative group flex ">
            {" "}
            <span className="nav-btn"> Resume</span>
            <span className="navHover "></span>
          </div>
        </Link>

        <Link className="text-blue-500" href={"/#projects"}>
          <div className="relative group flex ">
            {" "}
            <span className="nav-btn">Showcase</span>
            <span className="navHover "></span>
          </div>
        </Link>

        <Link href={"/blog"}>
          <div className="relative group flex ">
            {" "}
            <span className="nav-btn">Blog</span>
            <span className="navHover "></span>
          </div>
        </Link>

        <Link className="nav-btn" href={"/#about"}>
          <div className="relative group flex ">
            {" "}
            <span className="nav-btn">About</span>
            <span className="navHover "></span>
          </div>
        </Link>
      </ul>

      <div className="flex space-x-5 items-center">
        {" "}
        <Link href={"/contact"}>
          <p tabIndex={0} className="hireMeBtn ">
            Hire Me
          </p>
        </Link>
        {renderThemeToggle()}
      </div>
    </header>
  );
}

export default Header;
