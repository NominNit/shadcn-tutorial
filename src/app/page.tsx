import { ModeToggle } from "@/components/ModeToggle";
import { DialogDemo } from "@/components/DialogDemo";
import { DrawerDemo } from "@/components/DrawerDemo";
import { DataTableDemo } from "@/components/DataTableDemo";

export default function Home() {
  return (
    <div className="w-2/3 h-screen mx-auto px-8">
      <ModeToggle />
      <div className="flex items-center justify-center pt-8">
        <div className="text-center">
          <DialogDemo />
          <DrawerDemo />
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { ModeToggle } from "@/components/ModeToggle";
// import { DialogDemo } from "@/components/DialogDemo";
// import { DrawerDemo } from "@/components/DrawerDemo";
// import { DataTableDemo } from "@/components/DataTableDemo";

// export default function Home() {
//   const [activeScreen, setActiveScreen] = useState("dialog");

//   const renderContent = () => {
//     switch (activeScreen) {
//       case "dialog":
//         return <DialogDemo />;
//       case "drawer":
//         return <DrawerDemo />;
//       case "dataTable":
//         return <DataTableDemo />;
//       default:
//         return <div>Select an option from the sidebar</div>;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white p-4">
//         <button
//           className="w-full text-left p-2 hover:bg-gray-700"
//           onClick={() => setActiveScreen("dialog")}
//         >
//           Dialog Demo
//         </button>
//         <button
//           className="w-full text-left p-2 hover:bg-gray-700"
//           onClick={() => setActiveScreen("drawer")}
//         >
//           Drawer Demo
//         </button>
//         <button
//           className="w-full text-left p-2 hover:bg-gray-700"
//           onClick={() => setActiveScreen("dataTable")}
//         >
//           Data Table Demo
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <ModeToggle />
//         <div className="pt-8">{renderContent()}</div>
//       </div>
//     </div>
//   );
// }
