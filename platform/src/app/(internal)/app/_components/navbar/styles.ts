"use client";

import styled from "styled-components";

export const Root = styled.nav`
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.lighterCyan};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
