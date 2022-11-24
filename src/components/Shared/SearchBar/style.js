import styled from "styled-components";
import {
	IoSearch,
	IoCloseOutline
} from "react-icons/io5";

export const IoClose= styled(IoCloseOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: white;

	&:hover {
		opacity: 0.5;
	}
`;

export const Search= styled(IoSearch)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: white;

	&:hover {
		opacity: 0.5;
	}
`;

export const NavSearchBar = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	width: 800px;
	margin-top: 40px;
	margin-bottom: 70px;

	@media (max-width: 1024px) {
		margin-top: 3%;
	}

	@media (max-width: 820px) {
		margin-top: 4%;
	}

	@media (max-width: 620px) {
		margin-top: 5%;
	}

	@media (max-width: 500px) {
		margin-top: 6%;
	}

	.searchInputs {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		background: ${({ theme }) => theme.bgAlpha};
		border: 1px solid ${({ theme }) => theme.bg3};
		margin-top: 2%;
		margin-left: 5%;
	}
	input {
		width: 100%;
		height: 40px;
		border: none;
		font-size: 1.5em;
		font-weight: 600;
		padding-left: 2%;
		background: transparent;
		color: ${({ theme }) => theme.title};

		@media screen and (max-width: 1200px) {
			width: 90%;
		}

		@media (max-width: 800px) {
			font-size: 1.3em;
		}

		@media (max-width: 650px) {
			font-size: 1.2em;
		}

		@media (max-width: 610px) {
			font-size: 1.1em;
		}

		@media (max-width: 580px) {
			font-size: 1em;
		}

		@media (max-width: 540px) {
			font-size: 0.9em;
		}

		@media (max-width: 510px) {
			font-size: 0.8em;
		}

		:focus {
			outline: none;
		}
	}
	.searchIcon {
		background: ${({ theme }) => theme.bgAlpha};
		color: ${({ theme }) => theme.title};
		cursor: pointer;
		display: grid;
		place-items: center;
		padding-right: 1%;

		/* @media screen and (max-width: 600px) {
			display: none;
		} */
	}
	.searchIcon svg {
		font-size: 30px;
	}
	.searchIcon :hover {
		color: rgba(111, 162, 242, 1);
	}
	.dataResult {
		width: 90%;
		height: 200px;
		margin-left: 5%;
		background: ${({ theme }) => theme.bgAlpha};
		color: ${({ theme }) => theme.title};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		overflow: hidden;
		overflow-y: auto;
	}
	.dataResult::-webkit-scrollbar {
		display: none;
	}
	.dataResult .dataItem {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		color: inherit;
	}
	.dataItem p {
		margin-left: 10px;
	}
	a {
		text-decoration: none;
		cursor: pointer;
	}
	a:hover {
		background-color: rgba(111, 162, 242, 1);
	}
	#clearBtn {
		cursor: pointer;
	}
`;

export const SearchInputs = styled.div`
	position: relative;
	height: 40px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.bgAlpha};
	border: 1px solid ${({ theme }) => theme.bg3};
	margin-top: 2.3%;

	@media (max-width: 1200px) {
		width: 80%;
	}

	& a {
		text-decoration: none;
		cursor: pointer;
	}
	& a:hover {
		background-color: rgba(111, 162, 242, 1);
	}
	& #clearBtn {
		cursor: pointer;
	}
	& svg {
		font-size: 28px;
	}
	& svg:hover {
		color: black;
	}
`;

export const InputName = styled.input`
	position: absolute;
	height: 50px;
	width: 70vh;
	border-radius: 25px;
	background: #fff;
	outline: none;
	border: none;
	padding-left: 20px;
	font-size: 18px;
	color: black;
	transition: background-color 0.5s ease-in;
	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: -1px;
	width: 50px;
	background-color: ${({ theme }) => theme.buttons};
	height: 40px;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const DataResult = styled.div`
	width: 90%;
	height: 200px;
	margin-left: 5%;
	background: ${({ theme }) => theme.bgAlpha};
	color: ${({ theme }) => theme.title};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	overflow: hidden;
	overflow-y: auto;
	border-radius: 25px;

	@media screen and (max-width: 1200px) {
		width: 80%;
		margin-left: 10%;
	}

	&::-webkit-scrollbar {
		display: none;
	}
	& .dataItem {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		color: inherit;
	}
`;

export const Result = styled.p`
	margin-left: 10px;
`;
