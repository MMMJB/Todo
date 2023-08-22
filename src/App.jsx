import React from "react";

import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";

export default function App() {
  return (
    <div className="bg-background flex h-screen max-h-screen w-full overflow-hidden">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
