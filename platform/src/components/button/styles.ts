"use client";

import { Slot } from "@radix-ui/react-slot";
import styled, { css } from "styled-components";

export const CommonStyles = css`
    all: unset;
    width: max-content;
    padding: 7px 20px;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
`;

export const PolymorphicComponent = styled(Slot)`
    ${CommonStyles};
    border: 2px solid pink;
`;

export const StyledButton = styled.button`
    ${CommonStyles};
    border: 2px solid red;
`;
