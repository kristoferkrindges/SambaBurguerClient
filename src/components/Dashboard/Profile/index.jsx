import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Card,
	Image,
	NameProfession,
	Name,
	Old,
	WhatsappIcon,
	IoMail,
	Icons,
	IoPencil,
} from "./style";

function Profile(props) {
	return (
		<Container>
			<Card>
				<Image>
					<img className="logo" src={props.img} />
				</Image>
				<Icons>
					<WhatsappIcon></WhatsappIcon>
					<IoMail></IoMail>
				</Icons>
				<NameProfession>
					<Name>{props.name}</Name>
					<Old>{props.email}</Old>
					{/* <Old>Membro desde: {props.time}</Old> */}
					<Link to="/editprofile">
						<IoPencil></IoPencil>
					</Link>
				</NameProfession>
			</Card>
		</Container>
	);
}

export default Profile;
