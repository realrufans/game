import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import workspace from "../loottie/workspace";

import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import { projects } from "../utils/projectsData";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Carousel } from "flowbite-react";
import Hero from "../components/hero";
import Showcase from "../components/showcase";
import About from "../components/about";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

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
      <div className="p-2">
        <Head>
          <title>Solomon Emetonjo | Frontend Developer</title>
          <meta
            name="description"
            content="Solomon Emetonjo is a frontend developer specializing in React, Next.js, Tailwind CSS, and building modern web applications."
          />
          <meta
            name="keywords"
            content="frontend developer, React, Next.js, Tailwind CSS, web developer, JavaScript, portfolio"
          />
          <meta name="author" content="Solomon Emetonjo" />

          {/* Open Graph Meta Tags for Social Sharing */}
          <meta
            property="og:title"
            content="Solomon Emetonjo | Frontend Developer"
          />
          <meta
            property="og:description"
            content="Explore Solomon Emetonjo's portfolio of web applications built with React, Next.js, Tailwind CSS, and more."
          />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          <meta property="og:url" content="https://your-portfolio-url.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Solomon Emetonjo | Frontend Developer"
          />
          <meta
            name="twitter:description"
            content="Frontend developer with expertise in React, Next.js, and building high-performance web applications."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Page Content */}
        <Hero />
        <Showcase />
        <About />
      </div>
    </>
  );
}
