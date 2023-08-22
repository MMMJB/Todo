import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { close, arrowForward as open } from "ionicons/icons";

import SidebarItem from "./SidebarItem";

import sidebarItems from "../../Utils/sidebarItems";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav className="bg-sidebar-background flex h-full flex-col p-8 shadow-lg">
      <div className="flex items-center gap-6">
        <img
          src="https://picsum.photos/100/100"
          className={`${
            collapsed ? "h-12" : "h-16"
          } aspect-square rounded-lg bg-cover bg-center bg-no-repeat`}
        />
        {!collapsed && (
          <p className="flex flex-col font-serif">
            <span className="text-text-light">John Doe</span>
            <span className="text-text-light/75 text-xs">Gr. 10</span>
          </p>
        )}
      </div>
      <div className="relative mb-4 mt-8">
        <hr className="border-sidebar-icon" />
        <button
          onClick={(_) => setCollapsed((p) => !p)}
          className="bg-sidebar-background absolute -right-8 grid -translate-y-1/2 translate-x-1/2 place-items-center rounded-full p-2 shadow-xl"
        >
          <IonIcon icon={collapsed ? open : close} className="text-text-mid" />
        </button>
      </div>
      {sidebarItems.map((item, i) => {
        return (
          <SidebarItem
            name={item.title}
            icon={item.icon}
            collapsed={collapsed}
            key={i}
          />
        );
      })}
    </nav>
  );
}
