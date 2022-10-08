import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      w="full"
    >
      <NextSeo title="Home" />
      <Grid textAlign="center">
        <Heading as="h1" size="lg" mb={4}>
          Tower of Fantasy Calculator
        </Heading>
        <Text fontSize="xs" color="gray.500">
          Aqui tem um texto que eu estou com preguiça de inventar.
        </Text>
      </Grid>
    </Flex>
  );
};

export default Home;
