import { useState } from "react";

export default function Accordion({ title, description }, key) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <>
      <div>
        <h3>
          <button
            type="button"
            onClick={handleClick}
            className="w-full py-4"
            aria-expanded={isActive}
            aria-controls={key}
            id={`accordion${key}`}
          >
            <div className="inline-block w-11/12 text-project-palette-darkPurple hover:text-project-palette-myPurple font-semibold text-left">
              {title}
            </div>
            <div className="inline-block w-1/12 text-center align-top text-project-palette-darkPurple">
              {!isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  fill="none"
                  viewBox="0 0 30 31"
                >
                  <path
                    fill="#AD28EB"
                    d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                  />
                </svg>
              )}
              {isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  fill="none"
                  viewBox="0 0 30 31"
                >
                  <path
                    fill="#301534"
                    d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                  />
                </svg>
              )}
            </div>
          </button>
        </h3>
        {isActive && (
          <div
            className="accordion-content text-project-palette-darkPurple font-normal px-4"
            id={key}
            role="region"
            aria-labelledby={`accordion${key}`}
          >
            {description}
          </div>
        )}
      </div>
    </>
  );
}
