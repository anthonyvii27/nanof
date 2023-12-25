"use client";

import styled, { css } from "styled-components";

export const Root = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        background: ${theme.colors.gray10};
    `}
`;
