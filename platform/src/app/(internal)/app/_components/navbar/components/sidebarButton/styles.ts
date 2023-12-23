"use client";

import styled, { css } from "styled-components";

export const Root = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: 30px;
        height: 30px;
        background: ${theme.colors.darkestCyan};
        color: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid ${theme.colors.gray50};
        transition: 0.2s ease-out;

        &:hover {
            background: ${theme.colors.lighterRed};
            transition: 0.1s ease-in;
        }
    `};
`;
