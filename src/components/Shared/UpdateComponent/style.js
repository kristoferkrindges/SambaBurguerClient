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
	width: 100%;
	padding: 24px 20px 20px 20px;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 600;
	margin-bottom: 10px;
	text-align: center;
	color: ${({ theme }) => theme.title};
`;

export const InfoData = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1%;
	flex-wrap: wrap;
	/* margin-top: 36px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 30px;

	a {
		color: white;
	}
	a:hover {
		opacity: 0.5;
	} */
`;
