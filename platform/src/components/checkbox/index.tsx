import type { Root as FieldPropTypes } from "@radix-ui/react-checkbox";
import React, { ComponentProps, ReactElement } from "react";
import { MdCheck } from "react-icons/md";

import { CheckboxField, CheckboxIndicator, Label, Container } from "./styles";

interface ICheckboxProps {
    id: string;
    label?: string;
}

const Checkbox = ({
    id,
    label,
    ...props
}: ComponentProps<typeof FieldPropTypes> & ICheckboxProps): ReactElement => (
    <Container>
        <CheckboxField id={id} {...props}>
            <CheckboxIndicator>
                <MdCheck size={13} />
            </CheckboxIndicator>
        </CheckboxField>

        {Boolean(label) && <Label htmlFor={id}>{label}</Label>}
    </Container>
);

export { Checkbox };
