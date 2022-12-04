import React, { useState, useEffect } from "react";
import {
	Container,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Subject,
	SubjectUl,
	Li,
	Buttons,
	HireMe,
	IoTrash,
	IoColorWand,
	Icons,
	IoBasket,
	Email,
} from "./style";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete";

export default function Customer({
	id,
	stars,
	shopId,
	imageUrl,
	name,
	gender,
	cpf,
	email,
	birthDate,
	address,
	func,
	onClick,
	modal,
	getId,
}) {
	const handle = () => {
		getId(id);
		modal(true);
	};

	return (
		<>
			<Container>
				<CardContent>
					<Image>
						<Logo src={imageUrl} />
					</Image>
					<Icons>
						<Link to={`/customers/update/${id}`}>
							<IoColorWand />
						</Link>
						<IoTrash onClick={handle} />
					</Icons>
					<NameSubject>
						<Name>{name}</Name>
						<Subject>
							<SubjectUl>
								<Li>{gender}</Li>
							</SubjectUl>
						</Subject>
						<Email>{email}</Email>
					</NameSubject>
					{/* eventClick */}
					{/* <Buttons onClick={"eventClick"}>
						<HireMe>{func}</HireMe>
					</Buttons> */}
				</CardContent>
			</Container>
		</>
	);
}
