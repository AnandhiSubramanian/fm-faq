import { useState } from "react";
import BackgroundDesktop from "./components/BackgroundDesktop";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import BackgroundMobile from "./components/BackgroundMobile";
import FAQDialog from "./components/FAQDialog";

function App() {
  const isDesktop = useMediaQuery({ query: "(max-width: 420px)" });
  return (
    <>
      {/* <div className="flex flex-col w-screen h-screen">
        <BackgroundDesktop className="basis-4/12 w-screen min-w-full max-w-full" />
        <div className="basis-8/12">test</div>
      </div> */}
      {/* <div className="w-screen h-screen grid grid-cols-1 grid-rows-3">
        <BackgroundDesktop className=" row-span-1 min-h-full max-h-full w-screen" />
        <div className="w-screen row-span-1">test</div>
        <div className="w-screen row-span-1">test4</div>
      </div> */}

      <div class="grid grid-rows-3 w-screen h-screen ">
        {!isDesktop && (
          <BackgroundDesktop className="w-screen row-span-1 h-full" />
        )}
        {isDesktop && (
          <BackgroundMobile className="w-screen row-span-1 h-full" />
        )}
        <FAQDialog />
      </div>
    </>
  );
}

export default App;
