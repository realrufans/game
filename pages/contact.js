import { send } from "emailjs-com";
import emailkey from "../utils/emailkey";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { useRouter } from "next/router";
import Link from "next/link";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    user_email: "",
    to_name: "Solomon Emtonjo",
    message: "",
  });
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  console.log(emailkey);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    setSending(true);
    e.preventDefault();
    send(
      emailkey.Service_ID,
      emailkey.TEMPLATE_ID,
      toSend,
      emailkey.Public_ID
    ).then(
      (result) => {
        setSent(true);
      },
      (error) => {
        setSending(false);
        console.log(error.text);
      }
    );
  };
  const disable =
    (toSend.message.trim("").length < 1) |
    (toSend.user_email.trim("").length < 1);

  return (
    <div className="p-5 max-w-7xl mx-auto ">
      <Header />
      <div div className="max-w-lg mx-auto">
        <div className="mt-16">
          <div className="space-y-5">
            <h1 className="text-[#FBFBFB] text-5xl font-bold">
              {!sent ? `Let's talk!` : "Thank you."}
            </h1>
            <p className="italic  text-lg">
              {!sent ? (
                <span>
                  Tell me all about your project right here, or send me an email
                  at{" "}
                  <span className="text-[#dba713]">
                    {" "}
                    <a href="mailto:solomonemetonjo@gmail.com">
                      solomonemetonjo@gmail.com
                    </a>
                  </span>
                </span>
              ) : (
                "I have received your message. You will be hearing from me soon!"
              )}
            </p>
            {sent && (
              <Link href={"/"}>
                <p className=" cursor-pointer bg-green-900 w-fit  text-[#f4f4f4] rounded-xl font-bold p-5">
                  Back to Home
                </p>
              </Link>
            )}
          </div>
          {!sent && (
            <form
              onSubmit={sendEmail}
              className=" flex flex-col space-y-10 mt-10"
            >
              <label className="flex flex-col">
                Name & Company
                <input
                  placeholder="Peter from Mars Inc."
                  className="input"
                  type="text"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col">
                Email
                <input
                  placeholder="Peter@mars.me"
                  type="email"
                  name="user_email"
                  value={toSend.user_email}
                  onChange={handleChange}
                  className="input"
                />
              </label>
              <label className="flex flex-col ">
                Message
                <textarea
                  className="h-40 input "
                  placeholder="We need to launch a new landing page for our product."
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                />
              </label>
              {!sending ? (
                <input
                  disabled={disable}
                  className={`cursor-pointer  bg-green-900   text-[#f4f4f4] text-lg p-3 w-full  font-bold rounded-xl ${
                    disable && "bg-gray-600"
                  }`}
                  type="submit"
                  value="Send"
                />
              ) : (
                <button
                  disabled
                  type="button"
                  class="  bg-green-900   text-[#f4f4f4]  text-lg p-3 w-full  font-bold rounded-xl"
                >
                  <svg
                    role="status"
                    class="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  sending...
                </button>
              )}
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
