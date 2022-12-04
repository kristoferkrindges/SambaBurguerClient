import styled from "styled-components";

export const Layout = styled.div`
	/* background: var(--grey); */
	/* overflow-x: hidden; */
`;

export const Content = styled.section`
	position: relative;
	width: calc(100% - 100px);
	/* left: 299px; */
	left: 100px;
	transition: all 0.3s ease;
	button.rec-dot {
		background-color: ${({ theme }) => theme.buttons};
		/* box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5); */
	}
	button.rec-dot:hover {
		border-color: ${({ theme }) => theme.text};
	}

	button.rec-dot:hover,
	button.rec-dot:active,
	button.rec-dot:focus {
		box-shadow: 0 0 1px 3px ${({ theme }) => theme.text};
	}
	.rec.rec-arrow {
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.buttons};
	}
	.rec.rec-arrow:hover {
		opacity: 0.5;
	}

	@media only screen and (max-width: 768px) {
		width: calc(100% - 100px);
		left: 100px;
	}
`;

export const Option = styled.main`
	width: 100%;
	padding: 24px 20px 20px 20px;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 600;
	margin-top: 60px;
	margin-bottom: 10px;
	text-align: center;
	color: ${({ theme }) => theme.title};
`;

export const Cont = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const BtnContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	/* margin-bottom: 10px;
	margin-left: 20px; */
`;

export const Button = styled.a`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
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
