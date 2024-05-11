import React from "react";
import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";

interface NavItemTypes {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

export function NavList() {
  const navList: NavItemTypes[] = [
    { id: 1, label: "Todo", link: "/", icon: <FaTasks className="size-5" /> },
    {
      id: 2,
      label: "Completed Todo",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5" />,
    },
    {
      id: 3,
      label: "Expired Todo",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];

  return <div className="mt-24"></div>;
}
