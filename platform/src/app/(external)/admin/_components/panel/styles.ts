"use client";

import styled from "styled-components";

export const Root = styled.section`
    width: 800px;
    height: 450px;
    background: ${({ theme }) => theme.colors.gray10};
    border-bottom: 10px solid ${({ theme }) => theme.colors.lighterCyan};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.gray40};
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background: #d9d9e0;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
`;
