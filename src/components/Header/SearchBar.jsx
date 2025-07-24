import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineTune } from "react-icons/md";

const SearchBar = ({ onSearch }) => (
  <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full w-full max-w-full xs:max-w-[95%] sm:max-w-sm md:max-w-md mx-auto">
    <AiOutlineSearch className="text-gray-500 dark:text-gray-300" size={14} />
    <input
      type="text"
      placeholder="Search in Drive"
      className="bg-transparent outline-none px-2 w-full text-[12px] text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
      onChange={(e) => onSearch?.(e.target.value)}
      aria-label="Search in Drive"
    />
    <MdOutlineTune className="text-gray-500 dark:text-gray-300" size={14} />
  </div>
);

export default SearchBar;
