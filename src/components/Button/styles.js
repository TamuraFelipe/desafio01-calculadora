import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 2rem;
    border: 1px solid #232323;
    border-radius: .5rem;
    background: #FFF;
    color: #232323;
    font-size: 2.4rem;
    flex: 1;
    cursor: pointer;
    

    &:hover {
        opacity: .6;
    }

    &.equal {
        grid-column: 4/5;
        grid-row: 2/6;
        background: #f78866;
        font-weight: 700;
    }
`;