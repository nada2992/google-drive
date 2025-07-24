import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import FileDetailsSidebar from "./components/MainContent/FileDetailsSidebar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({ parent: "My Drive", child: "" }); // ✅ Add this line

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        activeItem={activeItem}              // ✅ Pass down
        setActiveItem={setActiveItem}        // ✅ Pass down
      />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header
          onSearch={setSearchTerm}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
        <div className="flex-1 flex overflow-hidden pr-4">
          <div className="flex-1 pl-4 overflow-y-auto">
            <MainContent search={searchTerm} onFileClick={setSelectedFile} />
          </div>

          {selectedFile && (
            <div className="w-1/4 pl-4 h-full hidden lg:block">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6 min-h-[90vh] overflow-y-auto">
                <FileDetailsSidebar
                  file={selectedFile}
                  onClose={() => setSelectedFile(null)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
