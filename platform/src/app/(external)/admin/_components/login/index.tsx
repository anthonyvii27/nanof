import { Input } from "@/components/input";
import { ReactElement } from "react";

import { Root } from "./styles";

const Login = (): ReactElement => {
    return (
        <Root>
            <Input>
                <Input.Label fieldId="email">E-mail</Input.Label>
                <Input.Field id="email" type="text" max={64} />
            </Input>
            <Input>
                <Input.Label fieldId="password">Password</Input.Label>
                <Input.Field id="password" type="password" max={64} />
            </Input>
        </Root>
    );
};

export { Login };
