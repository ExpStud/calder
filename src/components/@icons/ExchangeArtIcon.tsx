import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  url?: string;
}

const ExchangeArtIcon: FC<Props> = (props: Props) => {
  const { url = "", className } = props;
  return (
    <a href={url} rel="noreferrer" target="_blank" className={`${className}`}>
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8802 -2.35851e-05H1.4443C0.647658 -2.35851e-05 0 0.644538 0 1.43676V10.8001C0 10.8001 4.21606e-07 12.2365 1.28249 12.2365H2.58532C3.88727 12.2365 3.87312 10.8218 3.87312 10.8218L3.89566 3.91819L10.8585 3.8952C10.8585 3.8952 12.3028 3.8952 12.3028 2.60519V1.29485C12.3028 -0.0146135 10.8806 -2.35851e-05 10.8806 -2.35851e-05H10.8802Z"
          fill="#EB6976"
        />
        <path
          d="M7.13662 18H16.5725C17.3692 18 18.0168 17.3554 18.0168 16.5632V7.1998C18.0168 7.1998 18.0168 5.76346 16.7343 5.76346H15.4315C14.1295 5.76346 14.1437 7.17813 14.1437 7.17813L14.1211 14.0818L7.15829 14.1047C7.15829 14.1047 5.71399 14.1047 5.71399 15.3948V16.7051C5.71399 18.0146 7.13618 18 7.13618 18H7.13662Z"
          fill="#EB6976"
        />
      </svg>
    </a>
  );
};

export default ExchangeArtIcon;
