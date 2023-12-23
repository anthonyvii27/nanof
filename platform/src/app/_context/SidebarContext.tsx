"use client";

import { IReactChildren } from "@/app/_interfaces/core";
import React, { createContext, useContext, useState } from "react";

interface ISidebarContextProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<ISidebarContextProps | undefined>(undefined);

export const useSidebar = (): ISidebarContextProps => {
    const context = useContext(SidebarContext);

    if (!context) throw new Error("useSidebar must be used within a SidebarProvider");

    return context;
};

interface ISidebarProviderProps extends IReactChildren {}

export const SidebarProvider: React.FC<ISidebarProviderProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const value: ISidebarContextProps = {
        isSidebarOpen,
        toggleSidebar,
    };

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
