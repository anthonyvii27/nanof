"use client";

import styled, { css } from "styled-components";

export const Root = styled.li`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px 20px 10px 15px;
        border-left: 5px solid transparent;

        &:hover {
            background: ${theme.colors.gray30};
            border-left: 5px solid ${theme.colors.gray60};
            cursor: pointer;
        }

        &[data-state="true"] {
            background: ${theme.colors.gray40};
            border-left: 5px solid ${theme.colors.lighterCyan};
        }

        span {
            display: flex;
            align-items: center;
            width: calc(100% - 20px);
            height: 20px;
            color: ${theme.colors.darkestGray};
            font-size: ${theme.fontSize.default};
            font-family: ${theme.fontFamily.inter};
            letter-spacing: ${theme.letterSpacing.md};
            font-weight: ${theme.fontWeight.regular};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    `}
`;
