import run from "@/config/gemini";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextword) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setResult(true);
    setRecentPrompt(input);
    setRecentPrompt((prev) => [...prev, input]);
    
    const response = await run(input);

    /** 
    let responseArr = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArr.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArr[i];
      } else {
        newResponse += "<b>" + responseArr[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let responseArr2 = newResponse2.split(" ");
    for (let i = 0; i < responseArr2.length; i++) {
      const nextword = responseArr2[i];
      delayPara(i, nextword + " ");
    }
    */
   
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    result,
    setResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
