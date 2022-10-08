/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "ToF Calculator",
  titleTemplate: "%s | ToF Calculator",
  defaultTitle: "nextarter-chakra",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://github.com/lombeira",
  openGraph: {
    url: "https://github.com/lombeira",
    title: "ToF Calculator",
    description: "A primeira e única calculadora de DPS de Tower of Fantasy",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "ToF Calculator og-image",
      },
    ],
    site_name: "ToF Calculator",
  },
  twitter: {
    handle: "@lombeira",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
