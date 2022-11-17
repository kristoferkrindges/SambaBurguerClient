import styled from "styled-components";

export const Card = styled.div`
	padding: 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.buttons};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
`;

export const CardContent = styled.div`
	margin: 1rem;
`;

export const Chart = styled.div`
	display: flex;
	justify-content: center;

	svg {
		height: 4rem;
		width: 4rem;
	}
`;

export const EarningsText = styled.h3`
	text-align: center;
	font-weight: normal;
	padding: 0.4rem 0;
`;

export const Earning = styled.h2`
	text-align: center;
`;

export const EarningsIncrease = styled.h5`
	text-align: center;
	font-weight: normal;
	background-color: rgba(0, 0, 0, 0.2);
	padding: 0.5rem;
	border-radius: 2rem;
`;
