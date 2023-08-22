import React from "react";

import { IonIcon } from "@ionic/react";

export default function SidebarItem({ icon, name }) {
  return (
    <li className="text-sidebar-text flex cursor-pointer items-center gap-6 py-4">
      <IonIcon icon={icon} className="text-sidebar-icon text-2xl" />
      <span className="font-roboto text-sm">{name}</span>
    </li>
  );
}
