import styled from "styled-components/native";
import { Button,TextInput } from "react-native-paper";
import { colors } from "../../../infrastructrue/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

//ใช้ปรับระดับสี เข้ม บาง ได้
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const AccountContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.7);
  borderRadius: 30;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  borderBottomStartRadius: 30;
  borderBottomEndRadius: 30;
  borderTopStartRadius: 30;
  borderTopEndRadius: 30;
`;
export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.error};
  
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

