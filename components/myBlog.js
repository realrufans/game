import { useEffect, useState } from "react";
import {

  ChevronLeftIcon,
  ChevronRightIcon,

} from "@heroicons/react/solid";
import Image from "next/image";
const markdown = require("markdown-it")();
import { stripHtml } from "string-strip-html";
var hivejs = require('@hivechain/hivejs');
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const CustomNavigation = (slot = { next: false, prev: false }) => {
  const swiper = useSwiper();
  const [slideProgress, setSlideProgress] = useState(0);
  swiper.on("slideChange", (e) => {
    setSlideProgress(e.progress);
  });

  return (
    <div>
      {slot.prev && (
        <button
          onClick={() => swiper.slidePrev()}
          disabled={slideProgress === 0}
        >
          <ChevronLeftIcon className="h-7 text-[#e6e6e6] bg-green-900" />
        </button>
      )}
      {slot.next && (
        <button
          onClick={() => swiper.slideNext()}
          disabled={slideProgress === 1}
        >
          <ChevronRightIcon className="h-7 text-[#e6e6e6]  bg-green-900" />
        </button>
      )}
    </div>
  );
};


function Myblog() {

  const [posts, setPosts] = useState([]);

  // connecting to hive blogchain

  const getUserPost = async () => {
    const post = [];

    hivejs.api.getDiscussionsByBlog({ tag: 'rufans', limit: 3 }, (err, data) => {
      data.map((postDetails) => {

        post.push(postDetails);
        setPosts(post);
      });

    });




  };

  useEffect(() => {
    const a = async () => {
      await getUserPost();
    };
    a();
  }, []);

  console.log(posts);
  return (
    <div className="mt-14  items-center  ">
      <h1
        className={`font-bold text-4xl  title  text-center md:text-5xl mb-10`}
      >
        My Hive Blog
      </h1>
      <Swiper
        cssMode={true}
        keyboard={true}
        pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >


        <div className="  rounded overflow-hidden shadow-lg md:flex md:justify-between md:flex-wrap     ">
          {posts?.map((post, i) => {
            const json = JSON.parse(post.json_metadata);
            const postMarkDown = post.body;
            const htmlbody = markdown.render(postMarkDown);
            const postBody = stripHtml(htmlbody.substring(0, 150)).result;
            const postDate = new Date(post.created).toDateString();

            {
            }
            return (
              <SwiperSlide
                className="flex justify-between items-center gap-3 mb-10   "

              >  <CustomNavigation prev={true} />

                <div key={i}>


                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://hive.blog/${post.url.substring(5, [
                      post.url.length,
                    ])}`}
                  >
                    {" "}
                    <div className="hover:scale-110 hover:bg-black-900    border-b-2 border-blue/10 my-10    max-w-lg   cursor-pointer  shadow-black/20 shadow-xl mx-auto mt-0 bg-red-50/20">
                      <Image
                        objectFit="cover"
                        layout="responsive"
                        width={150}
                        height={100}
                        src={json.image[0]}
                        alt="rufans on hive"


                      />

                      <div className="px-6 py-4">
                        <h2 className="font-extrabold text-white-900 mb-2">{post.title.substring(0, 150)}</h2>
                        <p className=" text-sm">{postBody}</p>
                      </div>
                      <div className="px-6   ">
                        {json.tags.map((tag, i) => {
                          return (
                            <span
                              key={i}
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                      <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200  rounded-full px-3 py-1 text-xs font-semibold text-green-900 mr-2">
                          {postDate}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <CustomNavigation next={true} />
              </SwiperSlide>);

          })}
        </div>




      </Swiper>
    </div>
  );
}

export default Myblog;
