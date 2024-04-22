import { VStack } from "@chakra-ui/react";

const ColoredComponent = ({
  width,
  height = "auto",
  padding = "10px",
  onClick =() => {},
  children,
}) => {
  return (
    <VStack
      background={
        "linear-gradient(88deg, #e19e13 0%, #ea743d 16.67%, #db5356 33.33%, #b94a70 50%, #b44d88 62.1%, #395cf9 76.1%, #00c2ff 94.1%)"
      }
      borderRadius={"14px"}
      boxShadow={"0 0 4px 0 rgba(0, 255, 255, 0.25)"}
      padding={padding}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </VStack>
  );
};
export default ColoredComponent;
