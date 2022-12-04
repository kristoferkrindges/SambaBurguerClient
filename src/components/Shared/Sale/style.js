import styled from "styled-components";

export const Card = styled.div`
	background-color: none;
	border-radius: 1rem;
	display: flex;
	margin: 1.5rem;
	overflow: hidden;
	width: 30rem;
	height: 19rem;
	h2 {
		letter-spacing: 0.1rem;
		margin: 1rem 0;
		color: var(black-text);
	}
	h6 {
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.text};
		font-weight: bold;
	}
`;
export const Left = styled.div`
	/* color: var(--white-text); */
	padding: 2rem;
	max-width: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.buttons};
	position: relative;
	&:hover {
		opacity: 0.5;
	}
	h2 {
		color: var(--white-text);
	}
	img {
		width: 130px;
		height: 130px;
		object-fit: cover;
		border-radius: 35px;
	}
`;
export const Right = styled.div`
	padding: 30px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.bg};
	p {
		font-size: 0.9rem;
		color: var(--black-text);
	}
	h2 {
		font-size: 1.1rem;
	}
`;
export const Div = styled.div``;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
export const HireMe = styled.button`
	background: #94449e;
	outline: none;
	border: none;
	color: #fff;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s ease;
	&:hover {
		background: #333;
	}
`;
