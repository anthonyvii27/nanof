import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
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
            <>
                <Input>
                    <Input.Label fieldId="password">Password</Input.Label>
                    <Input.Field id="password" type="password" max={64} />
                </Input>
                <Checkbox id="remember-me" label="Remember me" />
            </>

            <div style={{ marginTop: "5px" }} />
            <Button full>Sign In</Button>

            <ForgotPassword href="/admin/forgot">Forgot password?</ForgotPassword>
        </Root>
    );
};

export { Login };
