"use client";

import { useSidebar } from "@/app/_context/SidebarContext";
import { ReactElement } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";

import { Root, GroupTitle, Options, Option } from "./styles";

const Sidebar = (): ReactElement => {
    const { isSidebarOpen } = useSidebar();

    return (
        <Root data-state={isSidebarOpen}>
            <GroupTitle>Gerenciamento</GroupTitle>
            <Options>
                <Option data-state="true">
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "20px",
                            height: "20px",
                        }}
                    >
                        <RiFunctionLine size={20} />
                    </span>
                    Funções
                </Option>
                <Option>
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "20px",
                            height: "20px",
                        }}
                    >
                        <MdOutlineSettingsInputComponent size={18} />
                    </span>
                    Conectores
                </Option>
                <Option>
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "20px",
                            height: "20px",
                        }}
                    >
                        <FaRegUserCircle size={18} />
                    </span>
                    Usuários
                </Option>
            </Options>
        </Root>
    );
};

export { Sidebar };
