import { IReactChildren } from "@/app/_interfaces/core";
import { CoreTheme } from "@/theme/core";
import { ReactElement } from "react";
import { FaRegFile } from "react-icons/fa";

import { Root } from "./styles";

const Item = ({ children }: IReactChildren): ReactElement => (
    <Root>
        <FaRegFile color={CoreTheme.colors.darkestCyan} />
        <span>{children}</span>
    </Root>
);

export { Item };
