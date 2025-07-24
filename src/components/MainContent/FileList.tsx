import { HiOutlineSelector } from "react-icons/hi";
import { FaFolder, FaFileExcel, FaUserFriends } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconBaseProps } from "react-icons";

interface File {
  name: string;
  type: "folder" | "excel" | "excel-shared";
  owner: string;
  modified: string;
  size: string;
}

interface FileListProps {
  files: File[];
  onFileClick: (file: File) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onFileClick }) => (
  <div className="w-full">
    <div className="hidden md:grid grid-cols-12 items-center py-2 border-b font-medium text-gray-600 dark:text-gray-300">
      <div className="col-span-5">Name</div>
      <div className="col-span-2">Owner</div>
      <div className="col-span-3">Date modified</div>
      <div className="col-span-1">File size</div>
      <div className="col-span-1 text-right">
        <HiOutlineSelector />
      </div>
    </div>

    {files.map((file, index) => (
      <div
        key={index}
        onClick={() => onFileClick(file)}
        className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-0 items-start md:items-center py-3 px-2 md:px-0 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b transition"
      >
        <div className="md:col-span-5 flex items-center gap-2 text-sm md:text-base">
          {file.type === "folder" && (
            <FaFolder
              {...({ className: "text-yellow-500" } as IconBaseProps)}
            />
          )}
          {file.type === "excel" && (
            <FaFileExcel
              {...({ className: "text-green-600" } as IconBaseProps)}
            />
          )}
          {file.type === "excel-shared" && (
            <>
              <FaFileExcel
                {...({ className: "text-green-600" } as IconBaseProps)}
              />
              <FaUserFriends
                {...({ className: "text-gray-500" } as IconBaseProps)}
              />
            </>
          )}
          <span className="break-words">{file.name}</span>
        </div>

        <div className="md:col-span-2 flex items-center gap-2 text-xs md:text-sm">
          <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            n
          </div>
          <span>{file.owner}</span>
        </div>

        <div className="md:col-span-3 text-xs md:text-sm">{file.modified}</div>

        <div className="md:col-span-1 text-xs md:text-sm">
          {file.size || "—"}
        </div>

        <div className="md:col-span-1 text-right hidden md:block">
          <BsThreeDotsVertical />
        </div>
      </div>
    ))}
  </div>
);

export default FileList;
