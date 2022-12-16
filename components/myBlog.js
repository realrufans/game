import { useEffect, useState } from "react";
import Image from "next/image";
const markdown = require("markdown-it")();
import { stripHtml } from "string-strip-html";
import Link from "next/link";

function Myblog() {
  const { Client } = require("@hiveio/dhive");
  const client = new Client("https://api.hive.blog");
  const [posts, setPosts] = useState([]);

  // connecting to hive blogchain
  const blogBaseUrl = "https://hive.blog";
  const getUserPost = async () => {
    const post = [];
    const data = await client.database.getDiscussions("blog", {
      tag: "rufans",
      limit: 3,
    });
    data.map((postDetails) => {
      //   setPosts(postDetails);
      post.push(postDetails);
      setPosts(post);
    });
  };

  useEffect(() => {
    const a = async () => {
      await getUserPost();
    };
    a();
  }, []);

  return (
    <div className="mt-14  items-center  ">
      <h1
        className={`font-bold text-4xl  title  text-center md:text-5xl mb-10`}
      >
        My Hive Blog
      </h1>
      <div class="  rounded overflow-hidden shadow-lg md:flex md:justify-between md:flex-wrap     ">
        {posts?.map((post, i) => {
          const json = JSON.parse(post.json_metadata);
          const postMarkDown = post.body;
          const htmlbody = markdown.render(postMarkDown);
          const postBody = stripHtml(htmlbody.substring(0, 200)).result;
          const postDate = new Date(post.created).toDateString();

          {
          }
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://hive.blog/${post.url.substring(5, [
                post.url.length,
              ])}`}
            >
              {" "}
              <div
                key={i}
                className="border-b-2 border-black/10 my-10  max-w-sm  cursor-pointer  shadow-black/20 shadow-xl mx-auto mt-0 bg-red-50/20"
              >
                <Image
                  objectFit="contain"
                  layout="responsive"
                  width={110}
                  height={80}
                  src={json.image[0]}
                  alt="Card image"
                />

                <div class="px-6 py-4">
                  <h2 class="font-bold text-xl mb-2">{post.title}</h2>
                  <p class=" text-sm">{postBody}</p>
                </div>
                <div class="px-6   ">
                  {json.tags.map((tag) => {
                    return (
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div class="px-6 py-4">
                  <span class="inline-block bg-gray-200  rounded-full px-3 py-1 text-xs font-semibold text-green-900 mr-2">
                    {postDate}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Myblog;
