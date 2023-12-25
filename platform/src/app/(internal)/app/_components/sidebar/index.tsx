"use client";

import { useSidebar } from "@/app/_context/SidebarContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";

import { Root, GroupTitle, Options, Option } from "./styles";

const Sidebar = (): ReactElement => {
    const router: AppRouterInstance = useRouter();
    const { isSidebarOpen, selectedOption } = useSidebar();

    return (
        <Root data-state={isSidebarOpen}>
            <GroupTitle>Management</GroupTitle>
            <Options>
                <Option
                    data-state={selectedOption === "/app/functions"}
                    onClick={() => router.push("/app/functions")}
                >
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
                    Functions
                </Option>
                <Option
                    data-state={selectedOption === "/app/connectors"}
                    onClick={() => router.push("/app/connectors")}
                >
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
                    Connectors
                </Option>
                <Option
                    data-state={selectedOption === "/app/users"}
                    onClick={() => router.push("/app/users")}
                >
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
                    Users
                </Option>
            </Options>
        </Root>
    );
};

export { Sidebar };
