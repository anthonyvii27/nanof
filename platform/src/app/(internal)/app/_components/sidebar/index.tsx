"use client";

import { useSidebar } from "@/app/_context/SidebarContext";
import { ReactElement } from "react";

import { Root } from "./styles";

const Sidebar = (): ReactElement => {
    const { isSidebarOpen } = useSidebar();

    return <Root data-state={isSidebarOpen}></Root>;
};

export { Sidebar };
