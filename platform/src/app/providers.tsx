"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { CoreTheme } from "@/theme/core";
import { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { SidebarProvider } from "./_context/SidebarContext";

const Providers = ({ children }: PropsWithChildren): ReactElement => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={CoreTheme}>
                <SidebarProvider>{children}</SidebarProvider>
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers;
