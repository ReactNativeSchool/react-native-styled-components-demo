import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const ButtonText = styled.Text`
  color: ${props => (props.theme === "secondary" ? "#060606" : "#fff")};
  font-size: 25;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => {
    switch (props.theme) {
      case "secondary":
        return "#a6a6a6";
      case "accent":
        return "#f09a36";
      default:
        return "#333333";
    }
  }};
  flex: 1;
  height: ${Math.floor(buttonWidth - 10)};
  align-items: center;
  justify-content: center;
  border-radius: ${Math.floor(buttonWidth)};
  margin: 5px;
`;

const ButtonDouble = styled(Button)`
  width: ${screen.width / 2 - 10};
  flex-shrink: 0;
  align-items: flex-start;
  padding-left: 40;
`;

export default ({ text, onPress, size, theme }) => {
  const ButtonComp = size === "double" ? ButtonDouble : Button;

  return (
    <ButtonComp onPress={onPress} size={size} theme={theme}>
      <ButtonText theme={theme}>{text}</ButtonText>
    </ButtonComp>
  );
};
