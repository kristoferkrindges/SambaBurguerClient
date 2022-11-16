import React from "react";
import {
	Container,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
	IoCart,
	IoIdCard,
	IoExtensionPuzzle,
	IoBookmark,
	InstagramIcon,
} from "./styles";

export default function Footer() {
	return (
		<Container>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Sobre</FooterLinkTitle>
							<FooterLink to="/">Termos de serviço</FooterLink>
							<FooterLink to="/">Investidores</FooterLink>
							<FooterLink to="/">Corporação</FooterLink>
							<FooterLink to="/">Atividades</FooterLink>
							<FooterLink to="/">Quem somos</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Dúvidas</FooterLinkTitle>
							<FooterLink to="/">Contato</FooterLink>
							<FooterLink to="/">Suporte</FooterLink>
							<FooterLink to="/">Empresa</FooterLink>
							<FooterLink to="/">Email</FooterLink>
							<FooterLink to="/">Redes</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Projeto</FooterLinkTitle>
							<FooterLink to="/">Precin</FooterLink>
							<FooterLink to="/">SenacRS</FooterLink>
							<FooterLink to="/">TCC</FooterLink>
							{/* <FooterLink to="/">Hello World</FooterLink>
							<FooterLink to="/">Hello World</FooterLink> */}
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Funções</FooterLinkTitle>
							<FooterLink to="/">Publicar</FooterLink>
							<FooterLink to="/">Sua Lista</FooterLink>
							<FooterLink to="/">Suas Publicações</FooterLink>
							<FooterLink to="/">Dashboard</FooterLink>
							<FooterLink to="/">Feed</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Precin</SocialLogo>
						<WebsiteRights>
							Precin {new Date().getFullYear()}© Todos os direitos Reservados.
						</WebsiteRights>
						<SocialIcons>
							{/* <SocialIconLink>
								<InstagramIcon />
							</SocialIconLink> */}
							<SocialIconLink>
								<IoCart />
							</SocialIconLink>
							<SocialIconLink>
								<IoExtensionPuzzle />
							</SocialIconLink>
							<SocialIconLink>
								<IoBookmark />
							</SocialIconLink>
							<SocialIconLink>
								<IoIdCard />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</Container>
	);
}
