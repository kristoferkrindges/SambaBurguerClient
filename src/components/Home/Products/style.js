import styled from "styled-components";


export const Cards= styled.div`
	min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* gap: 60px; */
    background-color: ${({ theme }) => theme.background};
    font-size: 25px;
`;

export const Title = styled.h2`
    margin-bottom: 40px;
    font-size: 2.5rem;
`
export const Context = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 100%;
	button.rec-dot {
		background-color: ${({ theme }) => theme.buttons};
		/* box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5); */
	}
	button.rec-dot:hover {
		border-color: ${({ theme }) => theme.title};
	}

	button.rec-dot:hover,
	button.rec-dot:active,
	button.rec-dot:focus {
		box-shadow: 0 0 1px 3px ${({ theme }) => theme.title};
	}
	.rec.rec-arrow {
		color: ${({ theme }) => theme.title};
		background-color: ${({ theme }) => theme.buttons};
	}
	.rec.rec-arrow:hover {
		opacity: 0.5;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;