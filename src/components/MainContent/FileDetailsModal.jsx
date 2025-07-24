import { FaTimes, FaFolder, FaFileExcel, FaUserFriends } from "react-icons/fa";

const FileDetailsModal = ({ file, onClose }) => {
  const renderIcon = () => {
    switch (file.type) {
      case "folder":
        return <FaFolder className="text-yellow-500" />;
      case "excel":
        return <FaFileExcel className="text-green-600" />;
      case "excel-shared":
        return (
          <div className="flex gap-2 items-center">
            <FaFileExcel className="text-green-600" />
            <FaUserFriends className="text-gray-500" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center lg:hidden">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md mx-4 rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4 text-gray-800 dark:text-white">
          <h3 className="text-lg font-semibold">File Details</h3>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-4 text-xl text-gray-800 dark:text-white">
          {renderIcon()}
          <span className="font-medium">{file.name}</span>
        </div>

        <div className="text-sm space-y-2 text-gray-700 dark:text-gray-200">
          <p><strong>Type:</strong> {file.type}</p>
          <p><strong>Owner:</strong> {file.owner}</p>
          <p><strong>Modified:</strong> {file.modified}</p>
          <p><strong>Size:</strong> {file.size || "—"}</p>
        </div>
      </div>
    </div>
  );
};

export default FileDetailsModal;
