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

	@media only screen and (max-width: 768px) {
		width: calc(100% - 100px);
		left: 100px;
	}
`;

export const Option = styled.main`
    height: 80vh;
    display: flex;
    /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212); */
	width: 90%;
	padding: 24px 20px 20px 20px;
    align-items: center;
    justify-content: center;
    margin: auto;
`;


export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 600;
	margin-top: 60px;
	margin-bottom: 10px;
	text-align: center;
	color: ${({ theme }) => theme.title};
`;