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
