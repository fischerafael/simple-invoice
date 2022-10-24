import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageAppNewInvoice = () => {
  return (
    <Chakra.SimpleGrid columns={2} w="full" bg="gray.50" minH="100vh" gap="0">
      <Chakra.VStack w="full"></Chakra.VStack>
      <Chakra.VStack p="8" w="full" h="full" justify="center">
        <Chakra.VStack
          shadow="lg"
          bg="white"
          h="700px"
          w="500px"
          p="8"
          fontFamily="serif"
        >
          <Chakra.HStack w="full" justify="space-between" align="flex-start">
            <Chakra.VStack
              align="flex-start"
              w="full"
              spacing="0"
              fontSize="10px"
            >
              <Chakra.Text>Invoice</Chakra.Text>
              <Chakra.Text>#2324532</Chakra.Text>
              <Chakra.Text>24 october 2022</Chakra.Text>
            </Chakra.VStack>

            <Chakra.VStack
              align="flex-start"
              w="full"
              spacing="0"
              fontSize="10px"
            >
              <Chakra.Text>Rafael Santos Fischer</Chakra.Text>
              <Chakra.Text>
                Cláudio Manoel Da Costa Street, 637, house 3
              </Chakra.Text>
              <Chakra.Text>rafaelsanfischer@gmail.com</Chakra.Text>
              <Chakra.Text>062.099.565-89</Chakra.Text>
            </Chakra.VStack>
          </Chakra.HStack>

          <Chakra.VStack
            align="flex-start"
            w="full"
            spacing="0"
            fontSize="10px"
          >
            <Chakra.Text>Bill To</Chakra.Text>
            <Chakra.Text>Guildhawk</Chakra.Text>
            <Chakra.Text>
              Head Office 18th and 19th Floors, 100 Bishopsgate,
            </Chakra.Text>
            <Chakra.Text>London, UK</Chakra.Text>
          </Chakra.VStack>

          <Chakra.VStack w="full"></Chakra.VStack>
        </Chakra.VStack>
      </Chakra.VStack>
    </Chakra.SimpleGrid>
  );
};
