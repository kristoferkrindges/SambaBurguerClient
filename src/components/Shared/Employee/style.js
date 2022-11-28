import styled from "styled-components";
import { 
	IoStar, 
	IoPencilOutline,
	IoTrashBinOutline,
	IoColorWandSharp,
	IoBasketOutline,
} 
	
from "react-icons/io5";

export const IoTrash= styled(IoTrashBinOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: white;
	margin-bottom: 10px;

	&:hover {
		opacity: 0.5;
}
`;

export const IoBasket= styled(IoBasketOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: white;

	&:hover {
		opacity: 0.5;
}
`;

export const IoColorWand= styled(IoColorWandSharp)`
	width: 20px;
	height: 20px;
  	margin-bottom: 10px;
	cursor: pointer;
	stroke: white;

	&:hover {
		opacity: 0.5;
	}
`;


export const Container = styled.div`
	background: #fff;
	border-radius: 20px;
	position: relative;
	margin: 20px 0;
	height: 42vh;
	width: 36vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	&::before {
		content: "";
		position: absolute;
		height: 43%;
		width: 100%;
		background: ${({ theme }) => theme.buttons};
		border-radius: 20px 20px 0 0;
	}
`;
export const Image = styled.div`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #fff;
	&:hover {
		opacity: 0.5;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 100;
`;
export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	svg {
		color: #fff;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.text};
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;
export const Subject = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
`;
export const SubjectUl = styled.ul``;
export const Li = styled.li``;

export const Rating = styled.div`
	display: flex;
	align-items: center;
	margin-top: 18px;
	svg {
		font-size: 18px;
		margin: 0 2px;
	}
`;
export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
export const HireMe = styled.button`
	background: ${({ theme }) => theme.buttons};
	outline: none;
	border: none;
	color: white;
	font-weight: bold;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.3s ease;
	&:hover {
		background: #333;
	}
`;

export const StarIcon1 = styled(IoStar)`
	stroke: "ffffff";
	width: 30px;
	height: 30px;
	color: ${({ theme }) => theme.buttons};
	&:hover {
		color: ${({ theme }) => theme.buttons};
		opacity: 0.2;
	}
`;

export const StarIcon2 = styled(IoStar)`
	stroke: ${({ theme }) => theme.buttons};
	width: 30px;
	height: 30px;
	color: gray;
	opacity: 0.7;
	&:hover {
		color: ${({ theme }) => theme.buttons};
		opacity: 0.9;
	}
`;