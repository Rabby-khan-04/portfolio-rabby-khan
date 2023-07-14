"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copyIcon from "@/assets/icons/copy_icon.svg";
import copiedIcon from "@/assets/icons/copied_icon.svg";
import Image from "next/image";
import { useState } from "react";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `import { FC } from "react";

type WelcomeProps = {
  uses:
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses}</em>.
      </p>
    </>
  );
};

export default Welcome;

  `;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <figure className="relative w-full flex-col overflow-hidden rounded-md border-2 border-gray-200/40 bg-[#0f172a] p-2.5 shadow-2xl drop-shadow-lg d:border-gray-600/40 overflow-y-scroll h-[460px] code__container">
      <header
        className="mb-2 grid items-center border-b border-b-gray-800 pb-2"
        style={{ gridTemplateColumns: "50px 1fr 50px" }}
      >
        <i className="flex gap-1.5">
          <button
            tabIndex={-1}
            aria-hidden
            className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#EC6A5F]"
          />
          <button
            tabIndex={-1}
            aria-hidden
            className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#F4BF50]"
          />
          <button
            tabIndex={-1}
            aria-hidden
            className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#61C454]"
          />
        </i>
        <div className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500">
          /index.tsx
        </div>
        <div className="flex justify-end">
          {copy ? (
            <Image src={copiedIcon} alt="copy icon" width={20} height={20} />
          ) : (
            <button type="button" onClick={handleCopyCode}>
              <Image src={copyIcon} alt="copy icon" width={20} height={20} />
            </button>
          )}
        </div>
      </header>
      <main className=" relative h-[calc(100%-37px)] overflow-hidden before:absolute max-w-full w-full">
        <div className="sm:scrollbar-none relative h-full overflow-auto code__container">
          <SyntaxHighlighter
            language="javascript"
            style={shadesOfPurple}
            className="max-w-xs sm:max-w-full"
            wrapLines={true}
            customStyle={{
              background: "#0f172a",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </main>
    </figure>
  );
};

export default CodeEditor;
