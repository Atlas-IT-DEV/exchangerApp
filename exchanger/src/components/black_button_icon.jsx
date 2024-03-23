import { VStack, Image, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const BlackButtonIcon = ({
  icon,
  text,
  width = "113px",
  height = "87px",
  iconWidth,
  iconHeight,
  spacing = "10px",
  route = "/",
  additionalTextIcon = "",
}) => {
  const navigate = useNavigate();
  return (
    <VStack
      width={width}
      height={height}
      spacing={spacing}
      background={
        "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      }
      borderRadius={"14px"}
      padding={"10px"}
      onClick={() => navigate(route)}
    >
      <HStack width={"100%"} justify={"flex-start"}>
        <Text fontSize={"9px"} color={"white"}>
          {text}
        </Text>
        {additionalTextIcon}
      </HStack>
      <HStack width={"100%"} justify={"flex-end"}>
        <Image src={icon} width={iconWidth} height={iconHeight} />
      </HStack>
    </VStack>
  );
};

export default BlackButtonIcon;
