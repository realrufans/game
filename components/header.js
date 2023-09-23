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
    <header className="flex justify-between z-50    max-w-7xl mx-auto items-center p-2 themeColors sticky top-0">
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
        <a href={" /solomon_Emeonjo__Resume.pdf"} className="nav-btn">
          Resume
        </a>

        <Link  href={"/#projects"}>
        <span className="nav-btn">Showcase</span>
        </Link>
        <Link  href={"/blog"}>
          <span className="nav-btn">Blog</span>
        </Link>
        <Link className="nav-btn" href={"/#about"}>
        <span className="nav-btn">About</span>
        </Link>
      </ul>

      <div className="flex space-x-5 items-center">
        {" "}
        <Link href={"/contact"}>
          <p
            tabIndex={0}
            className=" cursor-pointer hover:bg-green-700 bg-green-900 text-[#f4f4f4] text-lg p-2 w-fit font-semibold rounded-xl"
          >
            Hire Me
          </p>
        </Link>
        {renderThemeToggle()}
      </div>
    </header>
  );
}

export default Header;
