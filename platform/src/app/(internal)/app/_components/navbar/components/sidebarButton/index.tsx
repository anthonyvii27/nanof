"use client";

import { useSidebar } from "@/app/_context/SidebarContext";
import { ReactElement } from "react";
import { IoMenu } from "react-icons/io5";

import { Root } from "./styles";

const SidebarButton = (): ReactElement => {
    const { toggleSidebar } = useSidebar();

    return (
        <Root onClick={toggleSidebar}>
            <IoMenu size={18} />
        </Root>
    );
};

export { SidebarButton };
