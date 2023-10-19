import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  gold?: boolean;
}

const CornerTopRightIcon: FC<Props> = (props: Props) => {
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
          className="absolute top-[-19px] right-[-19px]"
        >
          <g filter="url(#filter0_dddddd_565_6899)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 27L27 21L27 19L25 19L19 19L19 21L25 21L25 27L27 27Z"
              fill="#FEFDBA"
            />
          </g>
          <defs>
            <filter
              id="filter0_dddddd_565_6899"
              x="0.696924"
              y="0.696924"
              width="44.6062"
              height="44.6062"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                result="effect1_dropShadow_565_6899"
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
                in2="effect1_dropShadow_565_6899"
                result="effect2_dropShadow_565_6899"
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
                in2="effect2_dropShadow_565_6899"
                result="effect3_dropShadow_565_6899"
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
                in2="effect3_dropShadow_565_6899"
                result="effect4_dropShadow_565_6899"
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
                in2="effect4_dropShadow_565_6899"
                result="effect5_dropShadow_565_6899"
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
                in2="effect5_dropShadow_565_6899"
                result="effect6_dropShadow_565_6899"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect6_dropShadow_565_6899"
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
          className="absolute top-0 right-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8L8 2L8 0L6 -8.74228e-08L0 -3.49691e-07L-8.74228e-08 2L6 2L6 8L8 8Z"
            fill="#C25661"
          />
        </svg>
      )}
    </>
  );
};

export default CornerTopRightIcon;
