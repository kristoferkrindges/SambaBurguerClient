import styled from "styled-components";
import { Link } from "react-router-dom";
import {
	IoCartOutline,
	IoIdCardOutline,
	IoExtensionPuzzleOutline,
	IoBookmarkOutline,
	IoLogoInstagram,
} from "react-icons/io5";

export const IoCart = styled(IoCartOutline)`
	width: 20px;
	height: 20px;
`;
export const IoIdCard = styled(IoIdCardOutline)`
	width: 20px;
	height: 20px;
`;
export const IoExtensionPuzzle = styled(IoExtensionPuzzleOutline)`
	width: 20px;
	height: 20px;
`;
export const IoBookmark = styled(IoBookmarkOutline)`
	width: 20px;
	height: 20px;
`;

export const InstagramIcon = styled(IoLogoInstagram)`
	width: 20px;
	height: 20px;
`;

export const Container = styled.footer`
	background: ${({ theme }) => theme.background};
	border-top: 1px solid black;
`;
export const FooterWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: ${({ theme }) => theme.title};

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h1`
	font-size: 1.4rem;
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: ${({ theme }) => theme.title};
	text-decoration: none;
	font-size: 1rem;
	margin-bottom: 0.5rem;

	&:hover {
		color: ${({ theme }) => theme.buttons};
		transition: 0.3s ease-out;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: ${({ theme }) => theme.title};
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const WebsiteRights = styled.small`
	color: ${({ theme }) => theme.title};
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: ${({ theme }) => theme.title};
	font-size: 24px;
`;
