import { IReactChildren } from "@/app/_interfaces/core";
import React, { ReactElement, ReactNode, ComponentPropsWithoutRef } from "react";

import { InputContainer, LabelContainer, Container } from "./styles";

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = ({ children }: IReactChildren): ReactElement => <Container>{children}</Container>;

export interface ILabel {
    children: ReactNode;
    fieldId: string;
}

const Label = ({ children, fieldId }: ILabel): ReactElement => (
    <LabelContainer htmlFor={fieldId}>{children}</LabelContainer>
);
Label.displayName = "Label";
Input.Label = Label;

export interface IFieldProps extends InputProps {
    tag?: "input" | "textarea";
}

const Field = React.forwardRef<HTMLInputElement, IFieldProps>(
    ({ tag = "input", ...props }, ref): ReactElement => {
        return (
            <div style={{ position: "relative", height: "100%" }}>
                <InputContainer ref={ref} tag={tag} {...props} />
            </div>
        );
    }
);
Field.displayName = "Field";
Input.Field = Field;

export { Input };
