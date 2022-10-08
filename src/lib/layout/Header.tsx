import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justifyContent="space-between"
    >
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <Link href="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/calculator">
            <MenuItem>Calculadora</MenuItem>
          </Link>
          <MenuItem>Characters</MenuItem>
          <Link href="/deploy">
            <MenuItem>Deploy</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
