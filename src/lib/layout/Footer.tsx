import { Flex, Link, Text } from "@chakra-ui/react";

import HelperImage from "lib/components/samples/HelperImage";
import SomeImage from "lib/components/samples/SomeImage";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="space-between">
      <Flex gap={2}>
        <Text fontSize="sm" color="gray.500">
          &copy;
          {`${new Date().getFullYear()} - Feito por `}
        </Text>
        <Link
          href="https://github.com/Samsantosb"
          isExternal
          rel="noopener noreferrer"
        >
          <HelperImage
            src="https://github.com/Samsantosb.png"
            label="Samsantosb"
            borderRadius="50%"
          />
        </Link>
        <Text fontSize="sm" color="gray.500">
          &
        </Text>
        <Link
          href="https://github.com/Lombeira"
          isExternal
          rel="noopener noreferrer"
        >
          <HelperImage
            src="https://github.com/Lombeira.png"
            label="Lombeira"
            borderRadius="50%"
          />
        </Link>
      </Flex>
      <SomeImage />
    </Flex>
  );
};

export default Footer;
