import React from "react";
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
	Rating,
	Buttons,
	HireMe,
	StarIcon1,
	StarIcon2,
	IoTrash,
	IoColorWand,
	Icons,
	IoBasket,
	Email,
} from "./style";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete";


export default function Employee({
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
	const number = 5 - stars;
	const star = Array.from({ length: stars }, (v, k) => k + 1);
	const star2 = Array.from({ length: number }, (v, k) => k + 1);
	// const eventClick = (event) => {
	// 	event.stopPropagation();
	// 	if (onClick) onClick(id);
	// };
	const handle = () =>{
        getId(id)
        modal(true)
    }
	return (
			<Container>
				<CardContent>
					<Image>
						<Logo src={imageUrl} />
					</Image>
					<Icons>
                        <Link to={`/employees/update/${id}`}>
                            <IoColorWand />
                        </Link>
                        <IoTrash onClick={handle}/>
						<IoBasket/>
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
					{/* <Rating>
						{star.map((id, index) => (
							<StarIcon1 key={index}></StarIcon1>
						))}
						{star2.map((id, index) => (
							<StarIcon2 key={index}></StarIcon2>
						))}
					</Rating> */}
					{/* eventClick */}
					<Buttons onClick={"eventClick"}>
						<HireMe>{func}</HireMe>
					</Buttons>
				</CardContent>
			</Container>
	);
}