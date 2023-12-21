import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ReactElement } from "react";

import { Root, Title, ForgotPassword } from "./styles";

const Login = (): ReactElement => {
    return (
        <Root>
            <Title>Log into your account</Title>

            <Input>
                <Input.Label fieldId="email">E-mail</Input.Label>
                <Input.Field id="email" type="text" max={64} />
            </Input>
            <Input>
                <Input.Label fieldId="password">Password</Input.Label>
                <Input.Field id="password" type="password" max={64} />
            </Input>

            <div style={{ marginTop: "5px" }} />
            <Button full>Sign In</Button>

            <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </Root>
    );
};

export { Login };
