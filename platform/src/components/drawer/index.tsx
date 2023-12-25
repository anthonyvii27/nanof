"use client";

import { useWindowsSize } from "@/hooks/useWindowsSize";
import type { DrawerProps } from "antd";
import { Drawer as AntdDrawer } from "antd";
import React, { ReactElement, ReactNode } from "react";
import { MdOutlineClose } from "react-icons/md";

import { StyledWrapper } from "./styles";

export interface IDrawerProps extends DrawerProps {
    children: ReactNode | ReactNode[];
}

const Drawer = ({ children, ...props }: IDrawerProps): ReactElement => {
    const windowsSize = useWindowsSize();

    return (
        <StyledWrapper>
            <AntdDrawer
                width={windowsSize.width > 1000 ? "640px" : "100%"}
                height={windowsSize.height > 1000 ? "100%" : "90vh"}
                placement={windowsSize.width > 1000 ? "right" : "bottom"}
                style={{
                    background: "#FCFCFD",
                }}
                bodyStyle={{
                    padding: "20px",
                }}
                headerStyle={{
                    display: "none",
                }}
                footerStyle={{
                    display: "none",
                }}
                maskStyle={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(2px)",
                }}
                closeIcon={<MdOutlineClose size={22} color="#0797B9" />}
                {...props}
            >
                {children}
            </AntdDrawer>
        </StyledWrapper>
    );
};

export { Drawer };
