import React, { useContext } from "react";
import { assets } from "@/assets/assets";
import { Images, Mic, SendHorizontal } from "lucide-react";
import { Context } from "@/context/Context";
import { Skeleton } from "@/components/ui/skeleton";

const Main = () => {
  const {
    onSent,
    input,
    setInput,
    result,
    setResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    recentPrompt,
    setRecentPrompt,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-20 relative">
      <div className="flex items-center justify-between text-xl px-4 py-4 text-gray-600 md:px-8">
        <p className="text-xl md:text-2xl font-bold text-indigo-600 tracking-widest uppercase">
          ORION
        </p>
      </div>

      <div className="flex-1 overflow-y-auto max-w-6xl mx-auto px-4 md:px-5 scrollbar-hide">
        {!result ? (
          <>
            <div className=" text-center px-4 md:px-5">
              <p className="text-3xl  md:text-5xl font-medium text-gray-300 mb-2 ">
                <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                  Hello, Dev
                </span>
              </p>
              <p className="text-gray-400  text-xl md:text-3xl ">
                How Can I Help You Today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 px-4 md:px-5">
              <div className="bg-gray-100 p-4 md:p-6 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-all duration-300">
                <p className="text-gray-600 text-md md:text-lg mb-4">
                  Suggest Beautiful Places to see on an upcoming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="absolute bottom-3 right-3 w-7 md:w-9 p-1 bg-white rounded-full"
                />
              </div>

              <div className="bg-gray-100 p-4 md:p-6 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-all duration-300">
                <p className="text-gray-600 text-md md:text-lg mb-4">
                  Briefly summarise this concept: urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="absolute bottom-3 right-3 w-7 md:w-9 p-1 bg-white rounded-full"
                />
              </div>

              <div className="bg-gray-100 p-4 md:p-6 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-all duration-300">
                <p className="text-gray-600 text-md md:text-lg mb-4">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  className="absolute bottom-3 right-3 w-7 md:w-9 p-1 bg-white rounded-full"
                />
              </div>

              <div className="bg-gray-100 p-4 md:p-6 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-all duration-300">
                <p className="text-gray-600 text-md md:text-lg mb-4">
                  Improve the readability of the following code
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="absolute bottom-3 right-3 w-7 md:w-9 p-1 bg-white rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result rounded-lg max-h-[69vh] overflow-y-auto scrollbar-hide">
            <div className="result-title flex flex-col space-y-4 mb-2 pt-4 pl-6 rounded-full bg-gray-100">
              <div className="flex items-center space-x-4 ">
                <img
                  src={assets.user_icon}
                  className="w-10 h-10 rounded-full"
                  alt="User Icon"
                />
                <p className="text-lg text-gray-700">{recentPrompt}</p>
              </div>
              <div className="border-gray-200 my-4"></div>
            </div>

            <div className="rounded-2xl pt-8 pr-10 result-data flex items-start space-x-4 pl-6">
              <img
                src={assets.gemini_icon}
                alt="Gemini Icon"
                className="w-10 h-10 rounded-full"
              />
              {loading ? (
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[950px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[950px]" />
                    <Skeleton className="h-4 w-[400px]" />
                  </div>
                </div>
              ) : (
                <div className="overflow-y-auto max-h-[69vh] scrollbar-hide">
                  <pre
                    className="text-gray-600  w-[950px] text-base"
                    style={{
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: resultData || "No result available.",
                    }}
                  ></pre>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-2 w-full max-w-6xl pr-10 md:px-1 pb-5 mx-auto">
          <div
            className="flex items-center  bg-gray-100 px-4 md:px-5 py-3 
            rounded-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto"
          >
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent border-none outline-none text-gray-600 text-sm sm:text-base md:text-lg placeholder-gray-400"
            />
            <div className="flex gap-4 text-gray-800">
              <SendHorizontal
                onClick={() => onSent()}
                className="cursor-pointer hover:text-gray-700 transition-colors duration-300"
                size={20}
              />
            </div>
          </div>

          <p className="mt-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 text-center sm:text-left px-4 sm:px-0 whitespace-normal flex items-center justify-center">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
