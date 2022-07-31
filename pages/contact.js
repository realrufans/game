import { send } from "emailjs-com";
import emailkey from "../utils/emailkey";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { useRouter } from "next/router";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    user_email: "",
    to_name: "Solomon Emtonjo",
    message: "",
  });
  const router = useRouter();
  const [sent, setSent] = useState(false);

  console.log(emailkey);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    send(
      emailkey.Service_ID,
      emailkey.TEMPLATE_ID,
      toSend,
      emailkey.Public_ID
    ).then(
      (result) => {
        setSent(true);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      },
      (error) => {
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
          <div className="space-y-2">
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
              <input
                disabled={disable}
                className={`cursor-pointer bg-[#546800] text-[#FBFBFB] text-lg p-2 w-60  font-bold rounded-xl ${
                  disable && "bg-gray-600"
                }`}
                type="submit"
                value="Send"
              />
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
