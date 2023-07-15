import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }
    :root {
        font-size: 62.5%;
    }
`;