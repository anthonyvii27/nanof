"use client";

import styled, { css } from "styled-components";

export const Root = styled.aside`
    width: 300px;
    height: calc(100vh - 50px);
    background: ${({ theme }) => theme.colors.gray40};
    border-right: 1px solid ${({ theme }) => theme.colors.gray60};
    position: absolute;
    top: 50px;
    left: 0;
    transform: translateX(-300px);
    transition: 0.3s ease-out;

    &[data-state="true"] {
        transform: translateX(0);
        transition: 0.3s ease-in;
    }
`;

export const GroupTitle = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.lighterCyan};
        font-size: ${theme.fontSize.default};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.default};
        font-weight: ${theme.fontWeight.bold};
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 20px;
    `}
`;

export const Options = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
`;

export const Option = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: 50px;
        padding: 0 15px;
        color: ${theme.colors.darkestGray};
        font-size: ${theme.fontSize.default};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.default};
        font-weight: ${theme.fontWeight.medium};
        border-left: 5px solid transparent;
        display: flex;
        align-items: center;
        gap: 10px;

        &:hover {
            border-left: 5px solid ${theme.colors.gray70};
            background: ${theme.colors.gray50};
            cursor: pointer;
        }

        &[data-state="true"] {
            background: ${theme.colors.gray50};
            border-left: 5px solid ${theme.colors.lighterCyan};
        }
    `}
`;
