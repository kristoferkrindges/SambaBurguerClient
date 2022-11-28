import styled from "styled-components";
import {
	IoContrastOutline,
	IoContrastSharp
} from "react-icons/io5";

export const IoCart = styled(IoContrastOutline)`
	width: 20px;
	height: 20px;
`;

export const Container= styled.header`
	height: calc(100vh - 5rem);
    position: relative;
    top: 5rem;
    display: grid;
    place-items: center;
    overflow: hidden;
`;

export const Section= styled.div`
	display: grid;
    grid-template-columns: 40% 60%;
    height: 100%;
    margin: 0 auto;
    max-width: 1800px;

    @media only screen and (max-width: 768px) {

	}
`;
// Tudo com img width: 100% object-fit: cover;
export const MainText= styled.div`
	display: flex;
    align-items: center;
    height: 100%;
`;

export const Control= styled.div`
	
`;

export const Title= styled.h3`
	font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.buttons};
    margin-bottom: 0.6rem;
`;

export const About= styled.p`
	margin: 1.2rem 0 2rem;
`;

export const Tastes= styled.h1`
	font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 4rem;
`;

export const Button = styled.a`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
	white-space: nowrap;
	padding: 10px 22px;
	color: black;
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
    margin-top: 50px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
		font-size: 20px;
	}
`;

export const Social= styled.div`
	position: absolute;
    right: -250px;
    bottom: 8rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    font-size: 1.2rem;
`;
// Icon transition all 400ms ease;
export const MainImg= styled.div`
    position: relative;
    height: 100%;
`;

export const Image= styled.div`
	width: 100%;
    position: absolute;
    bottom: 5rem;
    right: -10rem;
    z-index: 1;

    & img{
        width: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 768px) {

	}
`;

export const RightBG= styled.div`
	width: 68rem;
    height: 68rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.buttons};
    position: absolute;
    right: -40rem;
    bottom: -28rem;

    @media only screen and (max-width: 768px) {
	}
`;



// export const Section= styled.section`
// 	display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 5rem 10rem;

//     @media only screen and (max-width: 768px) {
// 		flex-direction: column;
// 	}
// `;

// export const Circle= styled.div`
// 	position: absolute;
//     top: -120px;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #fc4c35;
//     clip-path: circle(750px at right 1000px);

//     @media only screen and (max-width: 768px) {
// 		display: none;
// 	}
// `;

// export const MainText= styled.div`
// 	& img{
//         width: 15rem;
//         margin-bottom: 3vh;
//     }
// `;

// export const Title= styled.h3`
// 	font-size: 1.5rem;
//     color: #fc4c35;
//     margin-bottom: 1rem;
// `;

// export const About= styled.p`
// 	margin-bottom: 4rem;
// `;

// export const Tastes= styled.h1`
// 	font-size: 4rem;
//     margin-bottom: 1rem;
//     line-height: 4rem;
// `;

// export const Button= styled.a`
// 	padding: 15px 45px;
//     background: #fc4c35;
//     color: var(--white);
//     border-radius: 10px;
//     font-weight: 700;
//     transition: all 0.5s;

//     &:hover{
//     background: #fc4c35;
// }
// `;

// export const MainImg= styled.div`
//     transition: all 1s ease;
//     z-index: 100;
// 	& img{
//         width: 750px;
//         transform: rotate(-deg);
//     }

//     @media only screen and (max-width: 768px) {
// 		margin-top: 40px;
        
//         & img{
//         width: 550px;
//     }
// 	}
// `;

