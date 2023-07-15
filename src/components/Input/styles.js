import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 7.5rem;
    background: #fff;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    grid-area: visor;

    input {
        width: 100%;
        height: 7.5rem;
        background: #fff;
        border: 0;
        border-radius: .5rem;
        text-align: right;
        font-size: 2.4rem;
        color: #232323;
        padding-inline: 1.6rem;
        
        /* direction: rtl;
        unicode-bidi: bidi-override; */
    }
`;