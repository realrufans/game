function Footer() {
  return (
    <footer className="mb-12 mt-10 w-full space-y-10    p-10 border-t-[1px] border-[#4b597d]">
      <div className="flex space-x-10 justify-center">
        {" "}
        <a
          href="https://www.github.com/realrufans"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg"
            width="32"
            alt="github"
            height="32"
            className=" bg-black rounded-full"
          />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/realrufans/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
            width="32"
            alt="linkedin"
            height="32"
          />
        </a>{" "}
        <a
          href="https://www.twitter.com/realrufans22"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
            width="32"
            alt="twitter"
            height="32"
          />
        </a>
      </div>

      <p className="text-base mt-2 text-center">
        {`Copyright © ${new Date(
          Date.now()
        ).getFullYear()} | All rights reserved`}
      </p>
    </footer>
  );
}

export default Footer;
