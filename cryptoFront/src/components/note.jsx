import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import lamp from "./../assets/images/lamp.svg";

const Note = ({ text }) => {
  return (
    <HStack
      width={"100%"}
      background={
        "linear-gradient(216deg, #002300 38.1%, #000 76.6%, #131315 100%)"
      }
      borderRadius={"14px"}
      justify={"space-between"}
      padding={"10px"}
    >
      <VStack align={'flex-start'}>
        <Text color={"#27ad48"} fontSize={10}>
          !NOTE
        </Text>
        <Text color={"white"} fontSize={8}>
          {text}
        </Text>
      </VStack>
      <Image src={lamp} />
    </HStack>
  );
};

export default Note;
