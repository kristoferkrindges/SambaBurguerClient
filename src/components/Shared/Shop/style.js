import styled from "styled-components";
import { MdClose } from "react-icons/md";
import {
	IoPencilOutline,
  IoTrashBinOutline,
  IoColorWandSharp
} from "react-icons/io5";

export const IoTrash= styled(IoTrashBinOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: black;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoColorWand= styled(IoColorWandSharp)`
	width: 20px;
	height: 20px;
    margin-bottom: 5px;
	cursor: pointer;
	stroke: white;

	&:hover {
		opacity: 0.5;
	}
`;
export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: black;
		opacity: 1;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 0.6;
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		right: 5px;
	}
`;

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
    width: 44vw;
	height: 34vh;
`;

export const ModalWrapper = styled.div`
	width: 40vw;
	height: 30vh;
    position: relative;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    /* border: 1px solid black; */
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* position: absolute; */
	z-index: 5;
	border-radius: 10px;
	/* top: -50px; */
`;

export const ModalImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px 0 0 10px;
	background: #000;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: ${({ theme }) => theme.text};
    

	h1 {
		font-size: 1.5rem;
        font-weight: bold;
	}
	p {
		margin-bottom: 1rem;
        
	}
	button {
		padding: 15px 24px;
		background: ${({ theme }) => theme.buttons};
		color: black;
        font-weight: bold;
		border: none;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			background: #333;
		}
	}
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
`;
