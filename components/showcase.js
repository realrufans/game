import React from "react";
import { projects } from "../utils/projectsData";
import Image from "next/image";

function ShowCaseCard({ image, name, details, tags, link }) {
  return (
    <div className="w-full md:basis-[46%] lg:basis-[30%] group m-2 md:m-3 shadow-lg p-4 transition duration-300 transform hover:scale-105 overflow-hidden rounded-lg bg-white dark:bg-gray-800">
      <div className="relative aspect-w-2 aspect-h-1 mb-4">
        <Image
          className="rounded-lg object-cover w-full h-full transition duration-300 transform group-hover:scale-110"
          src={image}
          alt={name}
          width={1000}
          height={500}
        />
      </div>
      <div>
        <h1 className="text-xl  font-semibold mb-2">{name}</h1>
        <p className="text-gray-600 dark:text-gray-400  line-clamp-3 font-serif ">
          {details}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-2 flex-wrap ">
          {tags.split(" ").map((tag, index) => (
            <span
              key={index}
              className="inline-block my-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-semibold whitespace-nowrap text-white bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-2 rounded-full hover:from-orange-500 hover:to-orange-600 transition duration-300 ${
            !link &&
            `bg-gray-700 cursor-not-allowed text-white bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-500 hover:to-gray-500`
          }`}
        >
          Live View
        </a>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div id="projects" className="mt-16 lg:mt-36 max-w-6xl mx-auto w-full">
      <h1 className="font-bold text-4xl my-5 text-center md:text-5xl font-mono text-gray-700 dark:text-gray-200">
        Showcase
      </h1>
      <div className="flex flex-wrap w-full mx-auto">
        {projects.map((project, index) => (
          <ShowCaseCard
            key={index}
            image={project.image}
            name={project.name}
            details={project.description}
            tags={project.tags}
            link={project.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Showcase;
