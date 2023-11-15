import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  gold?: boolean;
}

const CornerTopLeftIcon: FC<Props> = (props: Props) => {
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
          className="absolute top-[-19px] left-[-19px]"
        >
          <g filter="url(#filter0_dddddd_565_6893)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 19H21H19V21V27H21L21 21H27V19Z"
              fill="#FEFDBA"
            />
          </g>
          <defs>
            <filter
              id="filter0_dddddd_565_6893"
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
                result="effect1_dropShadow_565_6893"
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
                in2="effect1_dropShadow_565_6893"
                result="effect2_dropShadow_565_6893"
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
                in2="effect2_dropShadow_565_6893"
                result="effect3_dropShadow_565_6893"
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
                in2="effect3_dropShadow_565_6893"
                result="effect4_dropShadow_565_6893"
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
                in2="effect4_dropShadow_565_6893"
                result="effect5_dropShadow_565_6893"
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
                in2="effect5_dropShadow_565_6893"
                result="effect6_dropShadow_565_6893"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect6_dropShadow_565_6893"
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
          className="absolute top-0 left-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0H2H0V2V8H2L2 2H8V0Z"
            fill="#C25661"
          />
        </svg>
      )}
    </>
  );
};

export default CornerTopLeftIcon;
