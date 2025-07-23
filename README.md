# Google Drive React Clone

A simple Google Drive-like file browser built with React and Tailwind CSS. This project demonstrates a modular, component-based approach to building a modern file management UI, including support for dark/light mode.

## Features
- File and folder listing with icons
- List and grid view toggle
- File type filtering (dropdown)
- Static filters (People, Modified, Source)
- Responsive design
- Dark/light mode support (via Tailwind CSS)
- Modular React components for easy maintenance

## Project Structure

google-drive/
├── components/
│   ├── MainContent.jsx        # Main container, manages state and layout
│   ├── TopBar.jsx            # Title and view switcher (list/grid)
│   ├── Filters.jsx           # File type dropdown and static filters
│   ├── FileList.jsx          # List/table view of files
│   ├── FileGrid.jsx          # Grid/card view of files
│   ├── Sidebar.jsx           # (Optional) Sidebar navigation
│   ├── FileDetailsSidebar.jsx# (Optional) File details panel
├── assets/                   # Static assets (e.g., logo)
├── App.js                    # App entry point
├── index.js                  # React DOM entry
├── tailwind.config.js        # Tailwind CSS config
├── index.css                 # Global styles
└── README.md                 # This file


## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   bash
   git clone <repo-url>
   cd google-drive
   
2. Install dependencies:
   bash
   npm install
   # or
   yarn install
   
3. Start the development server:
   bash
   npm start
   # or
   yarn start
   
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Use the top bar to switch between list and grid views.
- Use the "Type" dropdown to filter files by type (folder, excel, etc.).
- Click on a file or folder to trigger the onFileClick handler (customize as needed).
- The UI automatically adapts to dark/light mode based on your system or Tailwind config.

## Customization
- To add more file types, update the files array and icon logic in FileList.jsx and FileGrid.jsx.
- To add more filters, edit the Filters.jsx component.
- For real data, replace the static files array with data from your backend or API.

## Dark/Light Mode
- Tailwind's dark: classes are used throughout the components.
- Make sure your Tailwind config enables dark mode (e.g., darkMode: 'class' or darkMode: 'media').
- The UI will automatically switch based on your system or a toggler if implemented.

## License
MIT
