"use client";

import styled, { css } from "styled-components";

export const Root = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`;

export const Avatar = styled.div`
    ${({ theme }) => css`
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background: ${theme.colors.darkestRed};
        border: 1px solid ${theme.colors.gray10};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.white};
        font-size: ${theme.fontSize.sm};
        font-family: ${theme.fontFamily.inter};
        font-weight: ${theme.fontWeight.bold};

        &:hover {
            background: ${theme.colors.lighterRed};
        }
    `};
`;
