import { Tooltip, Image } from "@chakra-ui/react";

type HelperImageProps = {
  label?: string;
  borderRadius?: string;
  src: string;
};

const size = 5;

const HelperImage = ({ label, src, borderRadius }: HelperImageProps) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
      <Image
        src={src}
        alt={label}
        title={label}
        height={size}
        width={size}
        borderRadius={borderRadius}
      />
    </Tooltip>
  );
};

HelperImage.defaultProps = {
  label: "",
};

export default HelperImage;
