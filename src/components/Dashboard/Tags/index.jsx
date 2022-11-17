import React from "react";
import { Card, CardContent, Chart, EarningsText } from "./style";

function Tags(props) {
	return (
		<Card>
			<CardContent>
				<Chart>{props.icon}</Chart>
				<EarningsText>{props.value}</EarningsText>
			</CardContent>
		</Card>
	);
}

export default Tags;
