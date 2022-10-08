import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/samples/CTASection";
import SomeText from "lib/components/samples/SomeText";

const Deploy = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      w="full"
    >
      <NextSeo title="Deploy" />
      <SomeText />
      <CTASection />
    </Flex>
  );
};

export default Deploy;
