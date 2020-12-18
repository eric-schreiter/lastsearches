import styled from "styled-components";

const StyledLastSearches = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	overflow-x: scroll;
	margin: 0;
	padding: 0;
	grid-gap: 20px;
	padding: 10px 0;
	> li {
		width: 100%;
		border-radius: 5px;
		box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.15);
		background-color: #fff;
		.image {
			position: relative;
			display: flex;

			&:after {
				content: "";
				border-top-left-radius: 3px;
				border-top-right-radius: 3px;
				z-index: 2;
				left: 0;
				right: 0;
				bottom: 0;
				top: 0;
				position: absolute;
				background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
			}
			img {
				width: 225px;
				border-top-left-radius: 3px;
				border-top-right-radius: 3px;
				height: 150px;
			}
			> p {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
				z-index: 3;
				color: white;
				display: flex;
				flex-direction: column;
				text-align: right;
				.city {
					position: absolute;
					right: 10px;
					top: 10px;
					font-size: 18px;
				}
				.price {
					position: absolute;
					right: 10px;
					bottom: 10px;
					margin-top: 5px;
					font-size: 12px;
					text-align: right;
					display: block;
				}
			}
		}
		.content {
			position: relative;
			display: flex;
			padding: 10px;
			flex-direction: column;
			text-align: left;
			.iata {
				color: #0271c2;
				font-size: 20px;
				font-weight: bold;
				margin: 10px 0 10px 0;
				display: flex;
				align-items: center;
				.class {
					margin-left: 10px;
					font-size: 12px;
					color: #776;
					font-weight: normal;
				}
			}
			.date {
				font-size: 16px;
				color: #333333;
				margin-bottom: 5px;
				border-bottom: 1px solid #f4f4f4;
				padding-bottom: 10px;
			}
			.type {
				font-size: 14px;
				color: #776;
				margin-top: 10px;
				margin-bottom: 5px;
			}
			.passenger {
				font-size: 14px;
				color: #776;
			}
		}
	}
`;

export default StyledLastSearches;
