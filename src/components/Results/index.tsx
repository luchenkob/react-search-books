import { FC, HTMLAttributes, useState } from "react";

interface ResultsProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  onSort?: (e: boolean) => void;
}

const Results: FC<ResultsProps> = ({ isActive, children, onSort, ...rest }) => {
  const [isSort, setIsSort] = useState<boolean>(false);

  return (
    <div {...rest} className="relative w-full">
      <div
        className={`absolute ${isActive ? "opacity-1" : "opacity-0"} ${
          isActive ? "pointer-events-auto" : "pointer-events-none"
        } top-1 bg-grey-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0	transition-all block w-full p-2.5`}
      >
        <div className="p-1.5 flex justify-between">
          <span className="text-md font-semibold">Results:</span>
          <button
            className="text-lg"
            onClick={() => {
              setIsSort((c) => !c);
              if (onSort) onSort(!isSort);
            }}
          >
            {isSort ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
              </svg>
            )}
          </button>
        </div>
        <div className="max-h-60 overflow-y-auto"> {children}</div>
      </div>
    </div>
  );
};

export default Results;
