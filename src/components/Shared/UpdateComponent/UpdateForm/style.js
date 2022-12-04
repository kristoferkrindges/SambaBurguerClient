import styled from "styled-components";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoCameraOutline,
	IoPencilOutline,
	IoCloseOutline,
	IoPersonOutline,
	IoLockClosedOutline,
	IoMailOutline,
	IoFastFoodOutline,
	IoBasketOutline,
	IoBuildOutline,
	IoCartOutline,
} from "react-icons/io5";

export const IoPerson = styled(IoPersonOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoBuild = styled(IoBuildOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoCart = styled(IoCartOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoCart2 = styled(IoCartOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoBuild2 = styled(IoBuildOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoLock = styled(IoLockClosedOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoMail = styled(IoMailOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPerson2 = styled(IoPersonOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const IoLock2 = styled(IoLockClosedOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};

	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoFastFood = styled(IoFastFoodOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};

	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoFastFood2 = styled(IoFastFoodOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoBasket = styled(IoBasketOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};

	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoBasket2 = styled(IoBasketOutline)`
	width: 20px;
	height: 20px;
	stroke: white;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;



export const IoMail2 = styled(IoMailOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoClose = styled(IoCloseOutline)`
	width: 20px;
	height: 20px;
	stroke: black;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoPencil = styled(IoPencilOutline)`
	width: 15px;
	height: 15px;
	stroke: black;
	cursor: pointer;
	margin-left: 40%;

	&:hover {
		opacity: 0.5;
	}
`;

export const IoCamera = styled(IoCameraOutline)`
	width: 40px;
	height: 40px;
	stroke: ${({ theme }) => theme.text};

	&:hover {
		opacity: 0.5;
	}
`;

export const Container = styled.div`
	height: 100vh;
`;

export const Context = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	/* background: red; */
	/* width: 100%; */
	/* height: 91.8vh; */
`;

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
	margin-top: 1%;
	border-radius: 25px;
`;

export const Top = styled.div`
	background: ${({ theme }) => theme.buttons};
	border-radius: 20px;
	width: 60%;
	cursor: pointer;
	transition: opacity 0.5s ease-out;

	@media (max-width: 720px) {
		width: 80%;
	}

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		/* opacity: 0.5; */
	}
`;

export const Image = styled.div`
	height: 220px;
	width: 220px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	@media (max-width: 700px) {
		height: 200px;
		width: 200px;
	}

	@media (max-width: 600px) {
		height: 180px;
		width: 180px;
	}
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #fff;

	&:hover {
		/* width: 38vh;
        height: 44vh; */
		opacity: 0.5;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	/* z-index: 100; */
`;

export const InputImage = styled.input`
	display: none;
`;

export const LabelImage = styled.label`
	color: ${({ theme }) => theme.text};
	cursor: pointer;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	&svg {
		margin-left: 5%;
	}
`;

export const Social = styled.div`
	position: absolute;
	top: 15px;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 600px) {
		right: 20px;
	}

	@media (max-width: 530px) {
		right: 5px;
	}

	svg {
		opacity: 0.8;
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 100%;
	color: white;
	margin-top: 4%;
	margin-bottom: 3%;
`;
export const Name = styled.span`
	font-size: 2em;
	font-weight: 600;
	color: ${({ theme }) => theme.text};
	white-space: nowrap;

	@media (max-width: 600px) {
		font-size: 1.5em;
	}
`;


export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const HireMe = styled.button`
	background: ${({ theme }) => theme.buttons};
	outline: none;
	border: 1px solid ${({ theme }) => theme.bg3};
	color: white;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
		opacity: 0.6;
	}
`;

export const HireMe2 = styled.button`
	background: black;
	outline: none;
	color: white;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: #333;
		opacity: 0.6;
	}
`;

// Second Container

export const Bottom = styled.div`
	width: 60%;
	background-color: ${({ theme }) => theme.navbar};
	padding: 25px 30px;
	border-radius: 25px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	/* height: 50vh; */
	/* bottom: -100%;
	transition: 850ms; */

	/* @media (max-width: 1300px) {
		height: 60%;
	} */

	@media (max-width: 720px) {
		width: 80%;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	font-size: 1.5em;
	font-weight: bold;
	position: relative;
	color: ${({ theme }) => theme.text};
	height: 5vh;

	@media (max-width: 700px) {
		font-size: 1.3em;
	}

	&::before {
		content: "";
		position: absolute;
		left: 50;
		bottom: 0;
		height: 3px;
		width: 150px;
		border-radius: 5px;
		background: linear-gradient(135deg, ${({ theme }) => theme.buttons}, rgba(37, 108, 225, 1));
	}
`;

export const Collection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const UserDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5%;
	width: 100%;
	/* flex-direction: column; */
	/* flex-wrap: wrap; */
	/* margin: 20px 0 12px 0; */
	/* margin-top: 5%; */

	@media (max-width: 1300px) {
		flex-direction: column;
	}
	/* span {
		display: block;
		font-weight: 500;
		margin-bottom: 5px;
	} */

	/* input {
		margin-bottom: 15px;
		width: calc(100% / 2 - 20px);
	} */
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 80%;

	@media (max-width: 1300px) {
		width: 100%;
	}
`;
export const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	justify-content: flex-end;
	width: 80%;

	@media (max-width: 1300px) {
		width: 100%;
	}
`;

export const Controller = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	font-size: 100%;
	/* margin-top: 5%; */
	/* background-color: yellow; */
	/* align-items: center; */
	/* justify-content: center; */

	@media (max-width: 1600px) {
		width: 80%;
	}

	@media (max-width: 1450px) {
		width: 90%;
	}

	@media (max-width: 1300px) {
		width: 100%;
	}

	span {
		display: flex;
		justify-content: start;
		margin-left: 5%;
		margin-bottom: 2%;
		font-size: 1.2em;
		color: ${({ theme }) => theme.text};

		@media (max-width: 700px) {
			font-size: 1em;
		}
	}
`;

export const ContainerInput = styled.div`
	position: relative;
	height: 45px;
	width: 100%;
	font-size: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 5%;
`;
export const InputName = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: #fff;
	outline: none;
	padding-left: 20px;
	font-size: 1em;
	color: black;
	transition: background-color 0.5s ease-in;
	padding-left: 15px;
	border: 1px solid #ccc;
	border-bottom-width: 2px;
	transition: all 0.3s ease;

	@media (max-width: 580px) {
		font-size: 0.9em;
	}

	@media (max-width: 545px) {
		font-size: 0.8em;
	}

	@media (max-width: 520px) {
		font-size: 0.7em;
	}

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background-color: ${({ theme }) => theme.buttons};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const InputBox = styled.div`
	/* & input {
		height: 45px;
		width: 400px;
		outline: none;
		font-size: 16px;
		border-radius: 5px;
		padding-left: 15px;
		border: 1px solid #ccc;
		border-bottom-width: 2px;
		transition: all 0.3s ease;
	} */

	h3 {
		height: 45px;
		width: 400px;
		outline: none;
		font-size: 1.5rem;
		border-radius: 5px;
		padding-left: 15px;
		transition: all 0.3s ease;
		/* color: #94449e; */
	}
	span {
		color: ${({ theme }) => theme.title};
	}

	input:focus {
		border-color: ${({ theme }) => theme.buttons};
	}

	input:valid {
		border-color: ${({ theme }) => theme.buttons};
	}
`;

export const FacebookIcon = styled(IoLogoFacebook)`
	width: 30px;
	height: 30px;
`;
export const TwitterIcon = styled(IoLogoTwitter)`
	width: 30px;
	height: 30px;
`;
export const WhatsappIcon = styled(IoLogoWhatsapp)`
	width: 30px;
	height: 30px;
`;
export const IoSearc= styled(IoCameraOutline)`
	width: 100%;
	height: 2rem;
	cursor: pointer;
	stroke: black;
	text-align: center;
	margin-bottom: 10px;

	&:hover {
		opacity: 0.5;
	}
`;

export const IconButton = styled.div`
    display: flex;
    align-items: center;
	text-align: center;
	width: 100%;  
`;

export const ModalImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32%;
    height: 8vw;
    position: absolute;
    background-color: ${({ theme }) => theme.buttons};
    z-index: 5;
    border-radius: 10px;
    
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);

    input{
        width: 100%;
    }
`
export const Input = styled.input`
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;
    
    &:hover {
    background-color: #eeeeee75;
    }

    &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.buttons};;
    }
    &::placeholder {
    color: #000000be;
    }
`;

export const Exit = styled.a`
    width: 30%;
	border-radius: 50px;
	background: ${({ theme }) => theme.text};
	white-space: nowrap;
	padding: 10px 22px;
	color: ${({ theme }) => theme.buttons};
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
	}
`;

export const Select = styled.select`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: #fff;
	outline: none;
	padding-left: 20px;
	font-size: 1em;
	color: black;
	transition: background-color 0.5s ease-in;
	padding-left: 15px;
	border: 1px solid #ccc;
	border-bottom-width: 2px;
	transition: all 0.3s ease;

	&:hover {
    background-color: #eeeeee75;
    }

    &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.buttons};
    }
    &::placeholder {
    color: #000000be;
    }

	@media (max-width: 580px) {
		font-size: 0.9em;
	}

	@media (max-width: 545px) {
		font-size: 0.8em;
	}

	@media (max-width: 520px) {
		font-size: 0.7em;
	}
`
export const Option = styled.option`
`
export const GenderController = styled.div`
	
`
export const GenderInputs = styled.div`
	margin-top: 1rem;
    @media screen and (max-width: 1064px) {
		margin-top: 2rem;
	}
`

export const GenderTitle = styled.div`
    @media screen and (max-width: 1064px) {
		margin: 0;
	}
`

export const H6 = styled.h6`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
`

export const GenderGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 .5rem;

    @media screen and (max-width: 1064px) {
		flex-direction: column;
	}
`

export const GenderInput = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1064px) {
        margin-top: 0.5rem;
	}
`
export const InputRadio = styled.input`
    margin-right: 0.35rem;
`
export const Label = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0; 
`;