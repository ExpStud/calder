import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  gold?: boolean;
}

const CornerBottomLeftIcon: FC<Props> = (props: Props) => {
  const { gold = false } = props;
  return (
    <>
      {gold ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          className="absolute bottom-[-19px] left-[-19px]"
        >
          <g filter="url(#filter0_dddddd_565_6896)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 19L19 25L19 27L21 27L27 27L27 25L21 25L21 19L19 19Z"
              fill="#FEFDBA"
            />
          </g>
          <defs>
            <filter
              id="filter0_dddddd_565_6896"
              x="0.696924"
              y="0.696924"
              width="44.6062"
              height="44.6062"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.217894" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.996078 0 0 0 0 0.992157 0 0 0 0 0.729412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_565_6896"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.435787" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.996078 0 0 0 0 0.992157 0 0 0 0 0.729412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_565_6896"
                result="effect2_dropShadow_565_6896"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.52526" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.996078 0 0 0 0 0.992157 0 0 0 0 0.729412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_565_6896"
                result="effect3_dropShadow_565_6896"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.05051" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.996078 0 0 0 0 0.992157 0 0 0 0 0.729412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_dropShadow_565_6896"
                result="effect4_dropShadow_565_6896"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="5.22945" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.996078 0 0 0 0 0.992157 0 0 0 0 0.729412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect4_dropShadow_565_6896"
                result="effect5_dropShadow_565_6896"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9.15154" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.996078 0 0 0 0 0.992157 0 0 0 0 0.729412 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect5_dropShadow_565_6896"
                result="effect6_dropShadow_565_6896"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect6_dropShadow_565_6896"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-3.49691e-07 0L-8.74228e-08 6L0 8L2 8L8 8L8 6L2 6L2 -8.74228e-08L-3.49691e-07 0Z"
            fill="#C25661"
          />
        </svg>
      )}
    </>
  );
};

export default CornerBottomLeftIcon;
