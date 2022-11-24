import styled from "styled-components";
import {
	IoCameraOutline,
	IoFastFoodOutline
} from "react-icons/io5";

export const IconImage= styled(IoFastFoodOutline)`
	width: 31rem;
    height: 31rem;
	cursor: pointer;
	stroke: black;

	&:hover {
		opacity: 0.5;
	}
`;

export const Context = styled.div`
	width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: ${({ theme }) => theme.buttons};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
    padding: 1rem;

    @media screen and (max-width: 1330px) {
		width: 50%;
        flex-direction: column;
	}

    @media screen and (max-width: 1064px) {
		width: 90%;
        height: auto;
	}
`;

export const IoSearc= styled(IoCameraOutline)`
	width: 2rem;
    height: 2rem;
	cursor: pointer;
	stroke: black;

	&:hover {
		opacity: 0.5;
	}
`;

export const Image = styled.div`
	width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.buttons};;
    border-radius: 10%;
    padding: 1rem;

    @media screen and (max-width: 1330px) {
		display: none;
	}
`;

export const ContentForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 3rem;

    @media screen and (max-width: 1330px) {
		width: 100%;
	}
`;

export const Form = styled.form`
     
`;

export const FormHeader = styled.div`
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;  
`;

export const IconButton = styled.div`
    display: flex;
    align-items: center;  
`;

export const Title = styled.div`
      
`;

export const H1 = styled.h1`
    &::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.buttons};
    margin: 0 auto;
    position: absolute;
    border-radius: 10px;
}
`;

export const InputGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;

    @media screen and (max-width: 1064px) {
		/* flex-direction: column;
        z-index: 5;
        padding-right: 5rem;
        max-height: 10rem;
        overflow-y: scroll;
        flex-wrap: nowrap; */
	}
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem; 
`;

export const Input = styled.input`
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;
    
    &:hover {
    background-color: #eeeeee75;
    }

    &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.buttons};;
    }
    &::placeholder {
    color: #000000be;
    }
`;

export const Label = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0; 
`;

export const ContextButton = styled.div`
    
`;

export const Button = styled.button`
    width: 100%;
    margin-top: 2.5rem;
    border: none;
    background-color: ${({ theme }) => theme.buttons};
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.93rem;
    font-weight: bold;
    color: black;

    &:hover {
        opacity: 0.7
    }
`;

export const ModalImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32%;
    height: 8vw;
    position: absolute;
    background-color: ${({ theme }) => theme.buttons};
    z-index: 5;
    border-radius: 10px;
    
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);

    input{
        width: 100%;
    }
`
export const Exit = styled.a`
    width: 18%;
	border-radius: 50px;
	background: ${({ theme }) => theme.text};
	white-space: nowrap;
	padding: 10px 22px;
	color: ${({ theme }) => theme.buttons};
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
	}
`;