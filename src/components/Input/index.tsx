import { FC, InputHTMLAttributes } from "react";
import Loading from "../Loading";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

const Input: FC<InputProps> = ({ isLoading, ...rest }) => (
  <div className="relative">
    <input
      {...rest}
      type="text"
      id="first_name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0	transition-all focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
      placeholder="Search"
      required
    />
    {isLoading && <div className="w-5 h-full flex items-center justify-center absolute right-2 top-0"><Loading /></div>}
  </div>
);

export default Input;
