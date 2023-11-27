import Image from "next/image";

function About() {
  return (
    <>
      <div
        className=" flex mt-16 lg:mt-36 justify-between mx-auto max-w-lg  p-2  lg:max-w-4xl   w-full text-center lg:text-start  flex-col lg:flex-row "
        id="about"
      >
        <div className=" hidden lg:inline-flex lg:self-center ">
          <Image
            width={150}
            layout="fixed"
            alt="solomon emetonjo"
            height={150}
            objectFit="cover"
            quality={100}
            loading={"eager"}
            src={"/images/rufans.png"}
            className="rounded-full "
          />
        </div>

        <div className="max-w-3xl space-y-5 lg:space-x-10 leading-6 text-base  md:text-xl  ">
          <h1
            className={`font-bold text-4xl text-gray-700 dark:text-gray-200  lg:text-center md:text-5xl  font-mono  `}
          >
            About Me
          </h1>
          <p className=" font-serif text-lg">
            I specialize in front-end web development using Reactjs and am
            experienced in creating dynamic, user-friendly websites. I am
            proficient in using Tailwindcss to enhance the visual appeal of my
            projects. My goal is to build engaging and intuitive interfaces that
            provide a positive experience for users.
          </p>
          <p className="font-serif  text-lg">
            I&#39;m now embarking on a Blockchain development journey while
            working with Nextjs to communicate with smart contracts.
          </p>

          <div className="flex items-center gap-x-5 mx-auto lg:mx-0 max-w-xs text-start">
            <div className=" lg:hidden ">
              <Image
                width={48}
                height={48}
                alt="solomon emetonjo"
                loading={"eager"}
                src={"/images/rufans.png"}
                className="rounded-full "
              />
            </div>
            <div>
              <h2 className="font-bold text-xl font-mono ">Solomon Emetonjo</h2>
              <p className=" font-serif text-lg">Frontend Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
