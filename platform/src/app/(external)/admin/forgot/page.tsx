import { Panel } from "@/app/(external)/admin/_components/panel";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ReactElement } from "react";

import { Root, Title, Subtitle } from "./styles";

const ForgotPassword = (): ReactElement => {
    return (
        <main>
            <Panel>
                <Root>
                    <Title>Reset your password</Title>
                    <Subtitle>We will send you an email with password change instructions</Subtitle>

                    <Input>
                        <Input.Label fieldId="email">E-mail</Input.Label>
                        <Input.Field id="email" type="text" max={64} />
                    </Input>

                    <div style={{ marginTop: "5px" }} />
                    <Button full>Continue</Button>
                </Root>
            </Panel>
        </main>
    );
};

export default ForgotPassword;
