"use client";

import { hexToRgba } from "@/app/_utils/hexToRGBA";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Root = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const StatusPanel = styled.main`
    width: 800px;
    height: 120px;
    background: ${({ theme }) => theme.colors.gray10};
    border-bottom: 7px solid ${({ theme }) => theme.colors.lighterCyan};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.gray30};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Tag = styled.span`
    ${({ theme }) => css`
        width: max-content;
        display: block;
        padding: 5px 10px;
        border: 1px solid ${theme.colors.lighterCyan};
        background: ${hexToRgba(theme.colors.lighterCyan, 20)};
        color: ${theme.colors.darkestCyan};
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.semibold};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.sm};
        border-radius: 3px;
    `}
`;

export const Text = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.gray100};
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.regular};
        font-family: ${theme.fontFamily.inter};
        letter-spacing: ${theme.letterSpacing.sm};
    `}
`;

export const LinkToLogin = styled(Link)`
    ${({ theme }) => css`
        all: unset;
        width: 100%;
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.regular};
        font-family: ${theme.fontFamily.inter};
        color: ${theme.colors.lighterCyan};
        margin-top: 20px;
        text-align: center;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.darkestCyan};
        }
    `};
`;

export const Creators = styled.p`
    ${({ theme }) => css`
        position: absolute;
        bottom: 20px;
        width: 100%;
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.regular};
        font-family: ${theme.fontFamily.inter};
        color: ${theme.colors.darkestGray};
        margin-top: 20px;
        text-align: center;
        cursor: pointer;
    `};
`;
