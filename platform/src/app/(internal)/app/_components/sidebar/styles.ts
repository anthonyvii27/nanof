"use client";

import styled from "styled-components";

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
