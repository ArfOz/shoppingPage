import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 20rem;
    height: 30rem;
    border: 0.1rem solid rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 0.2rem 0.2,5rem 1rem rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
    }
`;

export const StyledText = styled.p`
    color: red;
    font-size: 0,3rem;
    margin: 0;
    text-align: center;
`;

export const StyledProdImage = styled.img`
    width: auto;
    height: 70%;
`

export const StyledPrice = styled.p`
    color: red;
    font-size: 0,3rem;
    margin: 0;
    text-align: center;
    
`;

export const StyledQuantity = styled.text`
    color: red;
    font-size: 0,3rem;
    margin: 0;
    text-align: center;
`
export const StyledSpecPrice = styled.text`
    color: red;
    font-size: 0,3rem;
    margin: 0;
    text-align: center;
`

export const IncDecButton = styled.div`
    color: red;
    font-size: 0,3rem;
    margin: 0;
    text-align: center;
`

export const ShoppingCard = styled.div `
    width: 100%;
    height: 5rem;
    border: 0.1rem solid rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 0.2rem 0.2,5rem 1rem rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: row;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
    }
`
export const StyledCardImage = styled.img`
    width: auto;
    margin:0 5%;
    height: 100%;
    

`