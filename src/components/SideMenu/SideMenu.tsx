import React from "react";
import { NavList } from "./NavList/NavList";

export function SideMenu() {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <div>
        <h1 className="px-4 text-2xl font-bold">Next Todo App</h1>
        <NavList />
      </div>
    </div>
  );
}
