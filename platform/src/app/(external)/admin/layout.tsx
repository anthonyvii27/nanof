import { IReactChildren } from "@/app/_interfaces/core";
import { Metadata } from "next";
import { ReactElement } from "react";

import { Root } from "./styles";

export const metadata: Metadata = {
    title: "ADMIN Page",
    description: "Description Login Page",
};

const Layout = ({ children }: IReactChildren): ReactElement => {
    return <Root>{children}</Root>;
};

export default Layout;
