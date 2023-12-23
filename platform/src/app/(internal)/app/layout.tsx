import { IReactChildren } from "@/app/_interfaces/core";
import { Content } from "@/app/(internal)/app/_components/content";
import { Navbar } from "@/app/(internal)/app/_components/navbar";
import { Sidebar } from "@/app/(internal)/app/_components/sidebar";
import { Metadata } from "next";
import { ReactElement } from "react";

import { Root } from "./styles";

export const metadata: Metadata = {
    title: "APP Page",
    description: "Description APP Page",
};

const Layout = ({ children }: IReactChildren): ReactElement => {
    return (
        <Root>
            <Navbar />
            <Sidebar />
            <Content>{children}</Content>
        </Root>
    );
};

export default Layout;
