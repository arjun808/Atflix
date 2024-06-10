import React, { useState } from "react";
import Header from "./Header";

function Home() {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $15.99 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive",
    },
    {
      id: 6,
      question: "Is Netflix good for kids?",
      answer:
        "Netflix offers a wide range of family-friendly programming. Parents can also set up individual profiles for each child with age-appropriate content restrictions.",
    },
  ];
  return (
    <div className="bg-slate-600 ">
      <Header />
      <div className="relative   h-screen w-screen ">
        <img
          className="absolute top-0 left-0 h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <div className="absolute top-0 left-0 sm:h-full w-full inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
        <div className="absolute z-20 top-[70%] left-[25%] text-white transform -translate-y-1/2">
          <h1 className="text-2xl lg:5xl font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <div className="mt-4">
            <h1 className=" font-bold">Watch anywhere. Cancel anytime.</h1>
            <h1 className="text-1xl lg:text-2xl font-bold mt-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
          </div>
          <div className="flex mt-4">
            <input
              className="p-2 rounded-l-md border-2 border-gray-300"
              placeholder="Email Address"
            />
            <button className="p-2 bg-red-600 text-white rounded-r-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* New Section Below */}
      <div className="bg-black relative py-16 mt-2 flex justify-center items-center">
        <div>
          <h1 className="text-2xl lg:text-6xl text-white text-center">
            Enjoy on your TV
          </h1>
          <p className="text-white w-[70%] lg:text-xl text-center text-[10px] ml-[20%] mt-4">
            Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>
      {/* new div */}
      <div className="bg-black mt-2 flex items-center justify-center relative">
        <div className="mt-[4%] mb-[4%] relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            className="w-full h-auto"
          />

          <div className="absolute top-16 lg:top-36  left-0 w-full h-full flex items-center justify-center ">
            <div className="bg-black  rounded-lg w-[60%] flex h-[20%] border border-white items-center  gap-1 lg:gap-7 ">
              <img
                className="h-[90%] ml-1 lg:ml-5"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              />
              <div>
                <h1 className="text-white text-[10px] lg:text-1xl">
                  Stranger Things
                </h1>
                <p className="text-blue-700 text-xs lg:text-1xl">
                  Downloading...
                </p>
              </div>
              <img
                className="h-[90%]"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              ></img>
            </div>
          </div>
        </div>
        <div className="mt-[4%] mb-[4%]">
          <h1 className="text-2xl lg:text-5xl text-white text-center font-bold">
            Download your shows to watch offline
          </h1>
          <p className="text-white w-[70%] text-center text-[13px] lg:text-xl ml-[20%] mt-4">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      {/* div-3 */}

      <div className="bg-black mt-2 flex items-center justify-center">
        <div className="mt-[4%]">
          <h1 className="text-2xl lg:text-5xl text-white text-center font-bold">
            Watch everywhere
          </h1>
          <p className="text-white w-[70%]  text-center text-[13px] lg:text-xl ml-[20%] mt-4">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="mt-[4%] mb-[4%]">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
        </div>
      </div>

      {/* div-4 */}

      <div className="bg-black mt-2 flex items-center justify-center">
        <div className="mt-[4%]">
          <img src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
        </div>
        <div className="mt-[4%] mb-[4%]">
          <h1 className="text-2xl lg:text-5xl text-white text-center font-bold">
            Create profiles for kids
          </h1>
          <p className="text-white w-[70%] text-center text-[13px] lg:text-xl ml-[20%] mt-4">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="bg-black mt-2 py-8 flex flex-col items-center w-full">
        <h1 className="text-white text-2xl lg:text-xl mb-4">
          Frequently Asked Questions
        </h1>
        <div className="w-[70%] ">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border-b  bg-[#44403c] mb-3  border-gray-600 py-4"
            >
              <button
                className="text-left text-white    p-3  font-bold mb-2"
                onClick={() => toggleQuestion(faq.id)}
              >
                {faq.question}
              </button>
              {openQuestionId === faq.id && (
                <p className="text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-[4%]  flex flex-col items-center justify-center">
          <p className="text-white text-2xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="mt-[4%]">
            <input
              className="p-2 w-1/2 bg-transparent"
              placeholder="Email address "
            ></input>
            <button className="bg-red-800 p-2 rounded-lg">Get Started</button>
          </div>
        </div>
      </div>

      {/* last div */}

      <div className="bg-black mt-2 py-4 px-6 flex justify-between items-center  ">
        <div className="  grid grid-cols-2 mt-6 space-y-8 mb-7 lg:grid-cols-4">
          <a href="#" className="text-white mr-6">
            Questions? Call 000-800-919-1694
          </a>
          <a href="#" className="text-white mr-6">
            FAQ
          </a>
          <a href="#" className="text-white mr-6">
            Help Centre
          </a>
          <a href="#" className="text-white mr-6">
            Account
          </a>
          <a href="#" className="text-white mr-6">
            Media Centre
          </a>
          <a href="#" className="text-white mr-6">
            Investor Relations
          </a>
          <a href="#" className="text-white mr-6">
            Jobs
          </a>
          <a href="#" className="text-white mr-6">
            Ways to Watch
          </a>
          <a href="#" className="text-white mr-6">
            Terms of Use
          </a>
          <a href="#" className="text-white mr-6">
            Privacy
          </a>
          <a href="#" className="text-white mr-6">
            Cookie Preferences
          </a>
          <a href="#" className="text-white mr-6">
            Corporate Information
          </a>
          <a href="#" className="text-white mr-6">
            Contact Us
          </a>
          <a href="#" className="text-white mr-6">
            Speed Test
          </a>
          <a href="#" className="text-white mr-6">
            Legal Notices
          </a>
          <a href="#" className="text-white">
            Only on Netflix
          </a>
        </div>
        <div>
          <select className="bg-gray-800 text-white py-2 px-4 rounded">
            <option value="en">English</option>
          </select>
          <span className="text-white ml-4">Netflix India</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
