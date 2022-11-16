import styled from "styled-components";
import {
	IoFastFoodOutline,
} from "react-icons/io5";

export const Icon = styled(IoFastFoodOutline)`
	width: 500px;
    height: auto;
    color: black;
`;

export const Container= styled.div`
    margin-top: 70px;
	width: 100%;
    min-height: 70vh;
    background: ${({ theme }) => theme.buttons};

`;

export const Context= styled.div`
	width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 22px;
    color: ${({ theme }) => theme.text};
    letter-spacing: 1.5px;
    padding: 50px 0px;
`;

export const Title= styled.h1`
    color: black;
	&::after{
        content: "";
        height: 6px;
        width: 180px;
        background-color: black;
        border-radius: 6px;
        position: relative;
        display: block;
        margin: auto;
    }
`;

export const Content= styled.div`
	width: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin: 30px auto;

    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Article= styled.div`
    padding: 25px 25px;

    @media only screen and (max-width: 900px) {
        text-align: center;
    }
`;

export const SubTitle= styled.h2`
	color: #ffff;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 1px;
`;

export const Write= styled.p`
	margin-top: 30px;
    font-size: 19px;
    line-height: 1.5;
    color: #222;
    margin-bottom: 35px;
`;

export const Button = styled.a`
	border-radius: 50px;
	background: black;
	white-space: nowrap;
	padding: 10px 22px;
	color: ${({ theme }) => theme.title};
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
    margin-top: 50px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
    margin-top: 35px;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
		font-size: 20px;
	}
`;

export const ImageSection= styled.div`
	width: 100%;
    margin: auto; // talvez
    text-align: center;

`;