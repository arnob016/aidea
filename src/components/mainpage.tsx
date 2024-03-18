import React, { useState } from "react";
import Link from "next/link";

const MainPage: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = () => {
    console.log("Generated:", inputText);
    setGeneratedText(inputText); 
  };

  return (
    <>
      <div className="flex h-screen flex-col space-y-4 p-4">
        <div className="flex h-1/3 justify-center">
          <input
            className="input input-lg input-bordered h-full w-3/5 max-w-xs bg-white"
            type="text"
            placeholder="Enter prompt"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGenerateClick}
            className="btn w-1/5 rounded-lg bg-cyan-600 p-2"
          >
            Generate
          </button>
        </div>

        {generatedText && (  
          <div className="mt-4 flex h-1/3 w-1/5 flex-col items-center justify-center rounded-2xl border-4 ">
            <>
              <div className="flex flex-grow flex-col items-center justify-center p-2">
                <p className="text-center text-lg">{generatedText}</p>
              </div>
              <div className="flex justify-center p-2">
                <button className="btn">Post</button>
              </div>
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
