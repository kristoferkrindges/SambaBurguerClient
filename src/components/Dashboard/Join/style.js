import styled from "styled-components";

export const JoinChannel = styled.div`
	background-color: ${({ theme }) => theme.feedInter};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	height: 100%;
	margin-top: 1.5rem;
	width: 100%;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	transition: 0.4s ease-in-out;
	padding: 24px 20px 20px 20px;
	/* border: 3px solid ${({ theme }) => theme.buttons}; */
	&:hover {
		/* opacity: 0.5; */
	}
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		margin-top: 2rem;
		margin-bottom: 2rem;
		height: max-content;
		padding: 0px;
		width: 100%;
	}
`;

export const CardContent = styled.div`
	margin: 1rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const Slack = styled.div`
	display: flex;
`;

export const SlackLogo = styled.div`
	margin-right: 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		color: ${({ theme }) => theme.title};
		height: 3rem;
		width: 3rem;
	}
`;

export const SlackText = styled.div`
	color: ${({ theme }) => theme.title};
	font-size: 2rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const SlackHead = styled.h2`
	color: ${({ theme }) => theme.title};
	font-weight: bold;
	font-size: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
export const SlackFoot = styled.h5`
	color: ${({ theme }) => theme.title};
	font-weight: normal;
	font-size: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
export const SlackJoin = styled.button`
	background-color: ${({ theme }) => theme.buttons};
	border: none;
	outline: none;
	padding: 1rem 2rem;
	color: white;
	border-radius: 0.5rem;
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
