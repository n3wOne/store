import React from "react";
import styled from "styled-components";

const StyledDiv = styled("div")`
  ${({ ownStyle, container }) => {
    if (container) {
      return `
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          width: 100%`;
    }
    return ownStyle;
  }}
  ${({ item }) =>
    item &&
    `
     box-sizing: border-box;
     margin: 0;
     `}
`;

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  calcSize = (size) => {
    switch (size) {
      case "auto":
        return {
          flexBasis: "auto",
          flexGrow: 0,
          maxWidth: "none",
        };
      case true:
        return {
          flexBasis: 0,
          flexGrow: 1,
          maxWidth: "100%",
        };
      default:
        const width = "".concat(Math.round((size / 12) * 10e7) / 10e5, "%");
        return {
          flexBasis: width,
          flexGrow: 0,
          maxWidth: width,
        };
    }
  };

  render() {
    return (
      <StyledDiv {...this.props} ownStyle={this.calcSize(this.props.size)}>
        {this.props.children}
      </StyledDiv>
    );
  }
}
