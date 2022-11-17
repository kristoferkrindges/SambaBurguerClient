import styled from "styled-components";

export const Layout = styled.main`
	width: 100%;
	padding: 24px 20px 20px 20px;
`;

export const Title = styled.h1`
	font-size: 28px;
	font-weight: 600;
	margin-bottom: 10px;

	& span {
		color: ${({ theme }) => theme.buttons};
	}
`;

export const BreadCrumbs = styled.ul`
	display: flex;
	grid-gap: 6px;

	li {
		font-size: 14px;
	}

	li a {
		font-size: 14px;
		color: blue;
	}
	li a .active {
		color: gray;
		pointer-events: none;
	}

	li .divider {
		color: gray;
		pointer-events: none;
	}
`;

export const InfoData = styled.div`
	margin-top: 36px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 20px;

	a {
		color: white;
	}
	a:hover {
		opacity: 0.5;
	}
`;

export const Data = styled.div`
	display: flex;
	grid-gap: 20px;
	margin-top: 20px;
	flex-wrap: wrap;
`;

export const ContentData = styled.div`
	flex-grow: 1;
	flex-basis: 400px;
	padding: 20px;
	background-color: ${({ theme }) => theme.feedInter};
	border-radius: 10px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
