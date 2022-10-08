import { Box, Flex, Image, Link } from "@chakra-ui/react";

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Flex marginY={4} justifyContent="center" gap={4}>
        <Link
          aria-label="Deploy to Vercel"
          isExternal
          rel="noopener noreferrer"
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-chakra"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>
        <Link
          aria-label="Deploy to Netlify"
          isExternal
          rel="noopener noreferrer"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
