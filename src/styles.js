import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 35rem;
    background: #FFF;
    padding: 6rem .4rem .4rem .4rem;
    border-radius: .5rem;
    background: #232323;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
        "visor visor visor visor"
        "keypad keypad keypad keypad";
    grid-gap: .5rem;
`;

export const KeyPadsContainer = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: .2rem;

    button:nth-child(-n+4) {
        background: #f78866;
        color: #232323;
    }
`;