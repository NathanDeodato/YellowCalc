import styled from 'styled-components';

export const YellowBox = styled.div`
    width: 35vw;
    height: 40vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border: solid 4px #FFD700;
    border-radius: 35px;
`;

export const NumBox = styled.div`
    width: 50%;

    text-align: center;
    border: solid 3px #FFD700; 
    border-radius: 20px;
`;

export const NumVisor = styled.p`
    font-weight: bold;
`;

export const BoxInputs = styled.div`
    width: 90%;  

    display: flex;
    justify-content: space-around;
`;

export const InputNumber = styled.input`
    height: 4vh;

    text-align: center;
    color: #fff;
    background-color: #1c1c1c;
    border: solid 2px #FFD700;
    border-radius: 10px;
    outline: none;
`;

export const BoxButtons = styled.div`
    width: 90%;  

    display: flex;
    justify-content: space-around;
`;

export const Button = styled.img`
    width: 2vw;
    height: 2vw;
`;

export const Win = styled.div`
    width: 6vw;
    height: 4vh;

    position: relative;
    left: -13vw;

    display: flex;
    justify-content: space-around;
`;

export const Circle = styled.div`
    width: 2vw;
    height: 2vh;

    background-color: #FFD700;
    border-radius: 50%;
    shape-outside: circle();
    clip-path: circle();

    &:hover {
        cursor: pointer;
    }
`;
