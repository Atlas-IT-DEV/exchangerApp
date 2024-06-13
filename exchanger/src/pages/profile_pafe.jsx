import { VStack, HStack, Text, Image, SimpleGrid } from "@chakra-ui/react";
import no_photo from "./../assets/images/no_photo_user.png";
import tg from "../tg_vars";

const ProfilePage = () => {
  return (
    <VStack width={"100%"} spacing={"10px"}>
      <Image
        src={no_photo}
        width={"95px"}
        height={"95px"}
        borderRadius={"100%"}
        alignSelf={"center"}
      />
      <Text color={"white"} fontSize={23}>
        {tg.initDataUnsafe.user ? tg.initDataUnsafe.user.user_name : "Maria"}
      </Text>
      <HStack
        width={"100%"}
        borderRadius={"28px"}
        background={
          "linear-gradient(356deg, #131315 0%, #070707 33.43%, #000 59.14%, #131315 100%)"
        }
        justify={"space-between"}
        padding={"10px 15px"}
      >
        <HStack>
          <Text color={"white"} fontSize={10}>
            STATUS:
          </Text>
          <Text color={"#a1b6d2"} fontSize={10}>
            {" "}
            IRON{" "}
          </Text>
        </HStack>

        <HStack>
          <Text color={"white"} fontSize={10}>
            SCORE:{" "}
          </Text>
          <Text
            background={
              "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
            }
            fontSize={10}
            color={"black"}
            padding={"2px 10px"}
            borderRadius={"7px"}
          >
            0
          </Text>
        </HStack>
      </HStack>
      <HStack width={"100%"} justify={"space-between"}>
        <VStack
          borderRadius={"14px"}
          background={
            "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
          }
          width={"200px"}
          align={"center"}
          padding={3}
        >
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              MILESTONES
            </Text>
            <Text color={"white"} fontSize={9}>
              POINTS
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              MAKE 1ST DEPOSIT IN STANDARD ACCOUNT
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              MAKE 1ST DEPOSIT IN MASTER ACCOUNT
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              ACTIVATE SOMEONES REFERRAL CODE
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              SOMEONE ACTIVATED YOUR REFERRAL CODE
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
        </VStack>
        <VStack
          borderRadius={"14px"}
          background={
            "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
          }
          width={"200px"}
          align={"center"}
          padding={3}
        >
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              STATUS
            </Text>
            <Text fontSize={9} color={"white"}>
              SCORE
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              IRON
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              SILVER
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              GOLD
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text color={"white"} fontSize={9}>
              DIAMOND
            </Text>
            <Text
              background={
                "linear-gradient(135deg, #790016 0%, #5f046f 46.5%, #5103e8 100%)"
              }
              fontSize={9}
              color={"black"}
              padding={"2px 10px"}
              borderRadius={"7px"}
            >
              +20
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ProfilePage;