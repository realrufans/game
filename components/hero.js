import Link from "next/link";
import Lottie from "react-lottie";
import workspace from "../loottie/workspace";


function Hero() {
  const workspaceSettings = {
    loop: true,
    autoplay: true,

    animationData: workspace,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <main className=" p-2 my-16 md:mt-24 lg:mt-40 lg:h-[80vh] mx-auto max-w-6xl  2xl:h-fit   ">
        <div className="items-center flex flex-col w-full   lg:flex-row md:justify-between   ">
          <div className="max-w-lg ">
            <p
              className="
              mb-3 text-lg text-center lg:text-start text-gray-600 dark:text-gray-400 md:text-xl leading-6 font-serif"
            >
              {" "}
              Hi, I&#39;m Solomon, I enjoy helping startups or individuals
              achieve their project goals with my web development skills.
            </p>
            <p
              className={`lg:text-start  text-gray-800 dark:text-gray-200 text-3xl md:text-4xl text-center font-bold font-serif lg:text-5xl`}
            >
              Permit me to make the world a better place with
              <span className="text-orange-400  "> Codes</span>.
            </p>
            <Link href={"/contact"}>
              <p
                tabIndex={0}
                className="hireMeBtn w-1/2 mt-5 text-center  max-lg:mx-auto"
              >
                Hire Me
              </p>
            </Link>
          </div>
          <div className="cursor-text self-center z-10 w-full max-w-sm lg:max-w-md lg:mt-0   mt-10">
            <Lottie options={workspaceSettings} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
