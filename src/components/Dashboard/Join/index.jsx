import React from "react";
import { Link } from "react-router-dom";
import { IoBasketOutline } from "react-icons/io5";
import {
	JoinChannel,
	CardContent,
	Slack,
	SlackLogo,
	SlackText,
	SlackHead,
	SlackFoot,
	SlackJoin,
} from "./style";
export default function Join() {
	return (
		<JoinChannel>
			<CardContent>
				<Slack>
					<SlackLogo>
						<IoBasketOutline />
					</SlackLogo>
					<SlackText>
						<SlackHead>Nossas Franquias</SlackHead>
						<SlackFoot>SambaBurguer</SlackFoot>
					</SlackText>
				</Slack>
				<Link to="/shops">
					<SlackJoin>Franquias</SlackJoin>
				</Link>
			</CardContent>
		</JoinChannel>
	);
}
