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
							<FooterLink to="/">SambaBurguer</FooterLink>
							<FooterLink to="/">SenacRS</FooterLink>
							<FooterLink to="/">Frameworks</FooterLink>
							<FooterLink to="/">AspNetApi C#</FooterLink>
							<FooterLink to="/">React</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Funções</FooterLinkTitle>
							<FooterLink to="/">Produtos</FooterLink>
							<FooterLink to="/">Clientes</FooterLink>
							<FooterLink to="/">Franquias</FooterLink>
							<FooterLink to="/">Funcionários</FooterLink>
							<FooterLink to="/">Vendas</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">SambaBurguer</SocialLogo>
						<WebsiteRights>
							Precin {new Date().getFullYear()}© Todos os direitos Reservados.
						</WebsiteRights>
						<SocialIcons>
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
