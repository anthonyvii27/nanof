"use client";

import styled, { css } from "styled-components";

import { IFieldProps } from "./index";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`;

export const LabelContainer = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.regular};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.sm};
        line-height: ${theme.lineHeight.sm};
        color: ${theme.colors.gray80};
    `};
`;

export const InputContainer = styled("input").attrs<IFieldProps>(({ tag }) => ({
    as: `${tag}`,
}))<IFieldProps>`
    ${({ theme, tag }) => css`
        width: 100%;
        background-color: ${theme.colors.gray10};
        border: 1px solid ${theme.colors.gray40};
        color: ${theme.colors.gray90};
        font-size: ${theme.fontSize.default};
        font-weight: ${theme.fontWeight.regular};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.default};
        line-height: ${theme.lineHeight.default};
        min-height: ${tag === "textarea" ? "100%" : "42px"};
        max-height: ${tag === "textarea" ? "100%" : "42px"};
        padding: 10px 12px;
        resize: none;
        flex-grow: 1;
        border-radius: 4px;

        &:focus {
            outline: none;
            border: 1px solid ${theme.colors.lighterCyan};
        }

        &::placeholder {
            font-weight: ${theme.fontWeight.regular};
            font-size: ${theme.fontSize.default};
            color: ${theme.colors.gray70};
        }

        &:disabled {
            background: ${theme.colors.gray80};
            cursor: auto;
        }

        &::-webkit-scrollbar {
            width: 3px !important;
        }

        &::-webkit-scrollbar-track {
            background: transparent !important;
        }

        &::-webkit-scrollbar-thumb {
            background: #616161 !important;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #555 !important;
            cursor: pointer;
        }
    `}
`;
