import { IReactChildren } from "@/app/_interfaces/core";
import { ReactElement } from "react";

import { Root, Image, Content } from "./styles";

const Panel = ({ children }: IReactChildren): ReactElement => (
    <Root>
        <Image />
        <Content>{children}</Content>
    </Root>
);

export { Panel };
