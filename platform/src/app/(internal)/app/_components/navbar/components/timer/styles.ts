"use client";

import styled, { css } from "styled-components";

export const Root = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const Text = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.fontSize.sm};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.sm};
        display: flex;
        align-items: center;
        gap: 3px;
    `}
`;
