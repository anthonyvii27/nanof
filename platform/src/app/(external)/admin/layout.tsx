import { IReactChildren } from "@/app/_interfaces/core";
import { Metadata } from "next";
import Link from "next/link";
import { ReactElement } from "react";

import { Creators, Root } from "../styles";

export const metadata: Metadata = {
    title: "ADMIN Page",
    description: "Description Login Page",
};

const Layout = ({ children }: IReactChildren): ReactElement => {
    return (
        <Root>
            {children}
            <Creators>
                Maintened by{" "}
                <Link href="https://github.com/anthonyvii27" style={{ textDecoration: "none" }}>
                    @anthonyvii27
                </Link>{" "}
                and{" "}
                <Link href="https://github.com/mateusrlopez" style={{ textDecoration: "none" }}>
                    @mateusrlopez
                </Link>
            </Creators>
        </Root>
    );
};

export default Layout;
