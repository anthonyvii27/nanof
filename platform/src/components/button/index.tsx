import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

import { StyledButton, PolymorphicComponent } from "./styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    full?: boolean;
    size?: "sm" | "md" | "lg";
}

const Button = ({ children, asChild = false, ...props }: IButtonProps): ReactElement => {
    const Comp = asChild ? PolymorphicComponent : StyledButton;

    // @ts-ignore
    return <Comp {...props}>{children}</Comp>;
};

export { Button };
