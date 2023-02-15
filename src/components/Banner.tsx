import { HexColor } from "@yext/studio";

export interface BannerProps {
  text: string;
  backgroundColor: HexColor;
  textColor: HexColor;
}

export const initialProps: BannerProps = {
  text: "20% off all orders",
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
};

const Banner = (props: BannerProps) => {
  const { text, backgroundColor, textColor } = props;

  return (
    <div className="py-2 px-4" style={{ backgroundColor: backgroundColor }}>
      <p
        className="flex-1 text-center text-sm font-medium lg:flex-none"
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
};

export default Banner;
