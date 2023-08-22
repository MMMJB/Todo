import React from "react";

import { IonIcon } from "@ionic/react";

export default function SidebarItem({ icon, name, collapsed }) {
  return (
    <li className="text-sidebar-text flex cursor-pointer items-center gap-6 py-4">
      <IonIcon
        icon={icon}
        className={`${collapsed ? "mx-auto" : ""} text-sidebar-icon text-2xl`}
      />
      {!collapsed && <span className="font-roboto text-sm">{name}</span>}
    </li>
  );
}
