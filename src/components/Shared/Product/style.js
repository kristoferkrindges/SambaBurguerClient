import styled from "styled-components";
import {
	IoPencilOutline,
  IoTrashBinOutline,
  IoColorWandSharp
} from "react-icons/io5";

export const IoTrash= styled(IoTrashBinOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: white;
  opacity: 1;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoColorWand= styled(IoColorWandSharp)`
	width: 20px;
	height: 20px;
  margin-bottom: 20px;
	cursor: pointer;
	stroke: white;
  opacity: 1;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPencil = styled(IoPencilOutline)`
	width: 20px;
	height: 20px;
	cursor: pointer;
	stroke: white;
  opacity: 1;

	&:hover {
		opacity: 0.5;
	}
`;

export const Card= styled.div`
	border-radius: 25px;
    background-color: #FFF;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    /* border: 1px solid black; */
    min-height: 40vh;
    width: 25vw;
`;

export const ImageContent= styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
	position: relative;
    row-gap: 5px;
    padding: 25px 0;
`;

export const Icons = styled.div`
	position: absolute;
	top: 10px;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		color: white;
		opacity: 1;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		opacity: 0.6;
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		right: 5px;
	}
`;

export const Overlay = styled.span`
	position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fc4c35;
    border-radius: 25px 25px 0 25px;

    &::before,
    &::after{
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: #fc4c35;
    }

    &::after{
    border-radius: 0 25px 0 0;
    background-color: #FFF;
}
`;

export const CardImage = styled.div`
	position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: #FFF;
    padding: 3px;

    & img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #fc4c35;
    }
`;

export const CardContent = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
`;

export const Name = styled.h2`
	font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
	font-size: 14px;
  color: #707070;
  text-align: center;
  margin-bottom: 10px;
`;

export const Price = styled.h3`
	font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Button = styled.div`
	border: none;
  font-size: 16px;
  color: #FFF;
  padding: 8px 16px;
  background-color: #fc4c35;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
  opacity: 0.7;
}
`;