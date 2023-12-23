import Image from "next/image";
import { ReactElement } from "react";

import { Root } from "./styles";

const Logo = (): ReactElement => (
    <Root>
        <Image src="/assets/images/nanof_white.png" alt="logo" width={80} height={16.5} />
    </Root>
);

export { Logo };
