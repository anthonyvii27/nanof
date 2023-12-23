import { Logo } from "@/app/(internal)/app/_components/navbar/components/logo";
import { SidebarButton } from "@/app/(internal)/app/_components/navbar/components/sidebarButton";
import { Timer } from "@/app/(internal)/app/_components/navbar/components/timer";
import { UserSession } from "@/app/(internal)/app/_components/navbar/components/userSession";
import { ReactElement } from "react";

import { Root } from "./styles";

const Navbar = (): ReactElement => (
    <Root>
        <div
            style={{
                width: "max-content",
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
            }}
        >
            <SidebarButton />
            <Logo />
        </div>
        <Timer />
        <UserSession />
    </Root>
);

export { Navbar };
