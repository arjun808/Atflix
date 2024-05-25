import React from "react";

function GptSearchBar() {
  return (
    <div className="  w-screen  rounded-lg flex items-center  h-screen justify-center ">
      <div className="absolute sm:h-screen w-full -z-50 ">
        <img
          className="sm:h-full w-full -z-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="p-6 ml-10 w-[90%] flex justify-center items-center z-50">
        <input 
          type="text"
          className="p-4 rounded-lg w-96  "
          placeholder="what do you like to watch today"
        ></input>
        <button  className="py-3 px-8 ml-5 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
