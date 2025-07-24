import { FiSettings, FiHelpCircle, FiCheckCircle } from "react-icons/fi";
import { PiSparkleLight } from "react-icons/pi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import HeaderIcon from "./HeaderIcon";

const Header = ({ onSearch, isSidebarOpen, toggleSidebar }) => (
  <div className="flex items-center justify-between gap-2 p-3 bg-gray-50 dark:bg-gray-900">
    <button
      className="md:hidden text-gray-700 dark:text-gray-200"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {isSidebarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </button>

    <div className="flex-1">
      <SearchBar onSearch={onSearch} />
    </div>

    <div className="flex items-center gap-2 sm:gap-4 ml-2">
      <ThemeToggle />
      <div className="hidden md:flex items-center gap-3">
        <HeaderIcon Icon={FiCheckCircle} ariaLabel="Check" />
        <HeaderIcon Icon={FiHelpCircle} ariaLabel="Help" />
        <HeaderIcon Icon={FiSettings} ariaLabel="Settings" />
        <HeaderIcon Icon={PiSparkleLight} ariaLabel="Sparkle" />
        <HeaderIcon Icon={BsGrid3X3Gap} ariaLabel="Grid" />
      </div>
    </div>
  </div>
);

export default Header;
