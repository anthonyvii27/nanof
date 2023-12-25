"use client";

import styled, { css } from "styled-components";

export const Root = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        border-right: 1px solid ${theme.colors.gray60};
    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.lighterCyan};
        font-size: ${theme.fontSize.md};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.md};
        font-weight: ${theme.fontWeight.bold};
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 15px 20px;
        border-bottom: 1px solid ${theme.colors.gray60};
    `}
`;

export const Search = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 42px;
        border-radius: 4px;
        border: 1px solid ${theme.colors.gray60};
        background: ${theme.colors.lighterGray};
        padding: 0 10px;
        display: flex;
        align-items: center;
        gap: 10px;

        &:focus-within {
            border: 1px solid ${theme.colors.lighterCyan};
        }

        > input {
            all: unset;
            width: calc(100% - 30px);
            height: 100%;
            border: none;
            color: ${theme.colors.darkestGray};
            font-size: ${theme.fontSize.default};
            font-family: ${theme.fontFamily.inter};
            letter-spacing: ${theme.letterSpacing.md};
            font-weight: ${theme.fontWeight.regular};

            &::placeholder {
                color: ${theme.colors.gray70};
            }
        }
    `}
`;

export const ListContainer = styled.ul`
    width: 100%;
    height: calc(100vh - 179px);
    padding-left: 2px;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 2px !important;
    }

    &::-webkit-scrollbar-track {
        background: transparent !important;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.lighterCyan} !important;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.darkestCyan} !important;
        cursor: pointer;
    }
`;
