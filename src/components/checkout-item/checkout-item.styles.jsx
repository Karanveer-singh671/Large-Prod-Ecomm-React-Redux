import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const TextContainer = styled.span`
	width: 23%;
`;
// have displayFlex for all Quantity Span, but also have div and span within quantity container
// need to have same structure as the scss file since arrow and value inside quantity container
// specify tags inside since won't have classNames anymore in file
export const QuantityContainer = styled(TextContainer)`
	display: flex;
	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
	}
`;

export const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
