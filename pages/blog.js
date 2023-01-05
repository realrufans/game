
import dynamic from 'next/dynamic';
import Head from "next/head";
import Image from "next/image";
const markdown = require("markdown-it")();
import { stripHtml } from "string-strip-html";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import Header from "../components/header";
import { Client } from "dhive-sl";


export async function getServerSideProps() {

    const client = new Client()
    // Fetch data from external API
    const posts = await client.database.getDiscussions('blog', { tag: 'rufans', limit: 10 })
    // Pass data to the client-side
    return {
        props: {
            posts,
        },
    }
}




function blog({ posts }) {



    return (
        <>

            <Header />


            <div className=" items-center mt-16 md:mt-20 max-w-5xl mx-auto w-full ">


                <Head>
                    <title>Blog</title>
                    <meta name="description" content="Hive post" />

                </Head>
                <h1
                    className={`font-bold text-4xl md:text-7xl  title  text-center  mb-10`}
                >
                    Hive Blog
                </h1>



                <div className="  w-full     ">
                    {posts.length < 1 && <div className=" flex mt-40 md:mt-56 justify-center text-green-800"><svg width="40" height="40" viewBox="0 0 50 50" >
                        <path fill="#006400" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                            <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite" />
                        </path>
                    </svg>
                    </div>}
                    {posts?.map((post, i) => {
                        const json = JSON.parse(post.json_metadata);
                        const postMarkDown = post.body;
                        const htmlbody = markdown.render(postMarkDown);
                        const postBody = stripHtml(htmlbody.substring(0, 200)).result;
                        const postDate = new Date(post.created).toDateString();



                        return (


                            <div key={i} className=" md:border-none border-b-[0.1px] p-5  gap-5 items-center  w-full space-y-2 md:flex justify-start ">
                                <div className="hidden md:inline-block" >
                                    <Image
                                        className="rounded-2xl  "
                                        objectFit="contain"
                                        layout="fixed"
                                        src={json.image[0]} height={150} width={150} alt={post.title} />
                                </div>

                                <div>
                                    <a href={`https://hive.blog/${post.url.substring(5, [
                                        post.url.length,
                                    ])}`}>                            <h1 className=" mb-0  rounded-lg    font-bold leading-relaxed text-lg hover:bg-blue-900/40 p-2 hover:bg-bottom hover:cursor-pointer ">{post.title}</h1>
                                    </a>
                                    <h3 className="m-1  text-xs">{postDate}</h3>
                                    <p className="text-base">{postBody}...</p></div>
                            </div>

                        )

                    })}
                </div>

            </div></>
    );
}

export default dynamic(() => Promise.resolve(blog), { ssr: false });
