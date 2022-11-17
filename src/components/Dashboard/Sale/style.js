import styled from "styled-components";
import {
	IoFastFoodOutline,
	IoCartOutline
} from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

export const Container = styled.div`
	border-radius: 1rem;
	height: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.buttons};
	width: 100%;
	box-shadow: red;
	transition: 0.4s ease-in-out;
	&:hover {
		
	}
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content;
		width: 100%;
		margin: 2rem 0;

		&::before {
			height: 7%;
			width: 75%;
			border-radius: 20px 20px 20px 20px;
		}
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	/* z-index: 100; */
`;
export const NameProfession = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: white;

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.title};
	}
`;

export const Image = styled.div`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background-color: ${({ theme }) => theme.buttons};

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid #fff;
	}
	img:hover {
		opacity: 0.5;
	}
`;

export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: #fff;
		opacity: 0.9;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 1;
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		right: 5px;
	}
`;

export const Name = styled.div`
	margin-top: 40px;
	margin-bottom: 30px;
	font-size: 1.5rem;
	font-weight: 600;
	color: white;
	/* background-color: rgba(146, 166, 255, 0.3); */
	border-radius: 10px;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Old = styled.span`
	font-size: 1rem;
	font-weight: 600;
	color: white;
	/* background-color: rgba(146, 166, 255, 0.3); */
	/* border-radius: 10px; */
	margin-bottom: 2%;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Button = styled.a`
	border-radius: 50px;
	background: black;
	white-space: nowrap;
	padding: 10px 22px;
	color: black;
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
		font-size: 20px;
	}
`;

export const IoCart= styled(IoCartOutline)`
	height: 180px;
	width: 180px;
	color: white;
	stroke: white;
`;


// ====================================================
