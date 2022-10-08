import { Flex, Grid, Input } from "@chakra-ui/react";
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
        <form>
          <Input type="text" />
        </form>
      </Grid>
    </Flex>
  );
};

export default Home;
