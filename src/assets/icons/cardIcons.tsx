import { FC, SVGProps } from "react";

interface CardIconsProps extends SVGProps<SVGSVGElement> {
  className?: string;
  textColor?: string;
}

export const IconShare: FC<CardIconsProps> = (props) => {
  const { className, textColor = "#39424B" } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.58984 13.5098L15.4198 17.4898"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4098 6.50977L8.58984 10.4898"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconTrash: FC<CardIconsProps> = (props) => {
  const { className, textColor = "#5C5F65" } = props;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 6H5H21"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <path
        d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardGarant: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 11.5225C25.0031 9.80723 24.5862 8.11731 23.7858 6.6004C22.9853 5.0835 21.8257 3.78576 20.4082 2.8206C18.9908 1.85544 17.3586 1.25223 15.6543 1.06366C13.95 0.875101 12.2255 1.10693 10.6314 1.7389C9.03736 2.37086 7.62227 3.38373 6.50981 4.68899C5.39735 5.99426 4.62137 7.55219 4.24967 9.22667C3.87797 10.9011 3.92187 12.6412 4.37753 14.2948C4.8332 15.9484 5.68675 17.4652 6.86362 18.7127V28.7101C6.86375 28.8677 6.90287 29.0229 6.9775 29.1617C7.05213 29.3005 7.15994 29.4186 7.29132 29.5056C7.4227 29.5926 7.57357 29.6457 7.73045 29.6602C7.88733 29.6747 8.04536 29.6501 8.19044 29.5886L14.5 26.8863L20.8095 29.5886C20.9272 29.6388 21.0538 29.6648 21.1818 29.665C21.3689 29.6635 21.5515 29.6071 21.7068 29.5027C21.8381 29.4162 21.946 29.2986 22.021 29.1603C22.0959 29.022 22.1355 28.8674 22.1363 28.7101V18.7127C23.971 16.7679 24.9952 14.1965 25 11.5225ZM14.5 2.92866C16.1991 2.92866 17.8601 3.43268 19.2728 4.37698C20.6856 5.32128 21.7867 6.66346 22.4369 8.23377C23.0872 9.80409 23.2573 11.532 22.9258 13.1991C22.5943 14.8661 21.7761 16.3974 20.5747 17.5992C19.3732 18.8011 17.8425 19.6196 16.176 19.9512C14.5095 20.2828 12.7822 20.1126 11.2124 19.4621C9.6426 18.8117 8.30088 17.7102 7.3569 16.297C6.41292 14.8837 5.90907 13.2222 5.90907 11.5225C5.90907 9.24326 6.81418 7.05739 8.42529 5.44573C10.0364 3.83408 12.2215 2.92866 14.5 2.92866ZM14.8723 24.967C14.7545 24.9171 14.6279 24.8914 14.5 24.8914C14.3721 24.8914 14.2455 24.9171 14.1277 24.967L8.77271 27.2587V20.3168C10.477 21.4263 12.4666 22.0169 14.5 22.0169C16.5334 22.0169 18.523 21.4263 20.2273 20.3168V27.2587L14.8723 24.967Z"
        fill="#39424B"
      />
      <path
        d="M14.6531 14.1247H14.6531C14.813 14.126 14.9733 14.1885 15.0692 14.2284C15.1875 14.2778 15.3209 14.3437 15.457 14.415C15.6443 14.513 15.8605 14.6339 16.0767 14.7548C16.172 14.808 16.2672 14.8613 16.36 14.9126C16.6345 15.0643 16.8908 15.2011 17.1026 15.2975C17.0797 15.067 17.0333 14.7817 16.9785 14.4745C16.9599 14.3704 16.9403 14.2633 16.9207 14.1562C16.8761 13.913 16.8316 13.6697 16.7993 13.4613C16.7758 13.3098 16.7565 13.1624 16.7481 13.0347C16.7413 12.9313 16.7339 12.7591 16.7848 12.6071L16.7848 12.607C16.8357 12.4551 16.9452 12.322 17.0129 12.2435C17.0966 12.1465 17.2007 12.0403 17.3107 11.9333C17.4621 11.786 17.6442 11.6182 17.8264 11.4505C17.9066 11.3766 17.9868 11.3028 18.0644 11.2306C18.2927 11.0184 18.5013 10.8185 18.6584 10.6482C18.4314 10.5987 18.145 10.5546 17.8352 10.5116C17.7301 10.497 17.6219 10.4825 17.5137 10.468C17.268 10.4351 17.0223 10.4023 16.8135 10.3684C16.6619 10.3439 16.5155 10.3167 16.3912 10.2853C16.2906 10.2598 16.1247 10.2137 15.9959 10.1188L15.9959 10.1188C15.8669 10.0238 15.7739 9.87898 15.7199 9.7904C15.6532 9.68106 15.5841 9.54942 15.516 9.41202C15.4223 9.22291 15.3185 8.99828 15.2148 8.77371C15.1692 8.67483 15.1235 8.57596 15.0787 8.48013C14.9461 8.19636 14.8193 7.93549 14.7049 7.73345C14.5872 7.93363 14.4562 8.19244 14.3189 8.47406C14.2726 8.56916 14.2253 8.66729 14.1781 8.76544C14.0707 8.9883 13.9634 9.21122 13.8666 9.39878C13.7963 9.53506 13.7251 9.66557 13.6566 9.77382C13.6012 9.86152 13.5058 10.0048 13.3754 10.0977L14.6531 14.1247ZM14.6531 14.1247C14.4932 14.1234 14.3319 14.1833 14.2354 14.2217M14.6531 14.1247L14.2354 14.2217M14.2354 14.2217C14.1163 14.2692 13.9818 14.333 13.8446 14.402M14.2354 14.2217L13.8446 14.402M13.8446 14.402C13.6558 14.497 13.4376 14.6144 13.2194 14.7318M13.8446 14.402L13.2194 14.7318M13.2194 14.7318C13.1234 14.7835 13.0273 14.8352 12.9337 14.885M13.2194 14.7318L12.9337 14.885M12.9337 14.885C12.6568 15.0323 12.3983 15.1649 12.185 15.2579M12.9337 14.885L12.185 15.2579M12.185 15.2579C12.2116 15.0278 12.2627 14.7434 12.3224 14.437C12.3427 14.3333 12.364 14.2265 12.3854 14.1197C12.4338 13.8773 12.4823 13.6348 12.518 13.4268C12.5439 13.2758 12.5656 13.1287 12.5761 13.0011C12.5846 12.8979 12.5947 12.7258 12.5463 12.573C12.4979 12.4202 12.3905 12.2854 12.3241 12.2058C12.242 12.1074 12.1396 11.9996 12.0313 11.8908C11.8824 11.7411 11.7029 11.5704 11.5235 11.3998C11.4445 11.3246 11.3655 11.2495 11.2892 11.1761C11.0643 10.9602 10.8589 10.7571 10.7046 10.5842C10.9324 10.5383 11.2195 10.4988 11.53 10.4609C11.6352 10.448 11.7437 10.4352 11.8521 10.4225C12.0983 10.3935 12.3445 10.3646 12.5538 10.3342C12.7059 10.312 12.8527 10.2872 12.9774 10.2578C13.0785 10.2339 13.2451 10.1905 13.3754 10.0977L12.185 15.2579Z"
        stroke="#39424B"
      />
    </svg>
  );
};

export const IconCardReturn: FC<CardIconsProps> = (props) => {
  const { className, textColor = "#5C5F65" } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.25 5V12.5H8.75"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.75 25V17.5H21.25"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6125 11.2509C24.9785 9.45943 23.9011 7.8577 22.4807 6.59522C21.0602 5.33274 19.3432 4.45066 17.4896 4.03127C15.6361 3.61189 13.7066 3.66888 11.881 4.19692C10.0555 4.72496 8.39343 5.70684 7.05 7.05095L1.25 12.5009M28.75 17.5009L22.95 22.9509C21.6066 24.2951 19.9445 25.2769 18.119 25.805C16.2934 26.333 14.3639 26.39 12.5104 25.9706C10.6568 25.5512 8.93975 24.6692 7.51933 23.4067C6.09892 22.1442 5.02146 20.5425 4.3875 18.7509"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardInsurance: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 27.5C15 27.5 25 22.5 25 15V6.25L15 2.5L5 6.25V15C5 22.5 15 27.5 15 27.5Z"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11.25L13.125 17.5L10 14.6591"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardGeoTag: FC<CardIconsProps> = (props) => {
  const { className, textColor = "#00ABC2" } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardDelivery: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 13.2848H28.5714V12.907L24.5221 8.64242H20V13.2848ZM20 14.8323V20.2481C20.6516 19.3086 21.6889 18.701 22.8571 18.701C24.3217 18.701 25.5803 19.6559 26.1314 21.0222H28.5714V14.8323H20ZM18.5714 21.0222V7.09495V5.54747H1.42857V21.0222H2.44003C2.99114 19.6559 4.24977 18.701 5.71429 18.701C7.1788 18.701 8.43743 19.6559 8.98854 21.0222H18.5714ZM20 7.09495H25.102L30 12.2532V21.0222C30 21.8768 29.3604 22.5697 28.5714 22.5697H26.4286C26.4286 24.7063 24.8296 26.4384 22.8571 26.4384C20.8847 26.4384 19.2857 24.7063 19.2857 22.5697H9.28571C9.28571 24.7063 7.68673 26.4384 5.71429 26.4384C3.74184 26.4384 2.14286 24.7063 2.14286 22.5697H1.42857C0.639593 22.5697 0 21.8768 0 21.0222V5.54747C0 4.69283 0.639593 4 1.42857 4H18.5714C19.3604 4 20 4.69283 20 5.54747V7.09495ZM5.71429 24.8909C6.89775 24.8909 7.85714 23.8516 7.85714 22.5697C7.85714 21.2877 6.89775 20.2485 5.71429 20.2485C4.53082 20.2485 3.57143 21.2877 3.57143 22.5697C3.57143 23.8516 4.53082 24.8909 5.71429 24.8909ZM22.8571 24.8909C24.0406 24.8909 25 23.8516 25 22.5697C25 21.2877 24.0406 20.2485 22.8571 20.2485C21.6737 20.2485 20.7143 21.2877 20.7143 22.5697C20.7143 23.8516 21.6737 24.8909 22.8571 24.8909Z"
        fill="#00ABC2"
      />
    </svg>
  );
};

export const IconSidebarPaymentMethods: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9.875V14.875C6 16.0312 6.6408 17.1525 7.86 18.0187C9.3096 19.0487 11.6412 19.75 14.28 19.75C16.9188 19.75 19.2504 19.0487 20.7 18.0187C21.9192 17.1525 22.56 16.0312 22.56 14.875V9.875C22.56 9.25375 22.0764 8.75 21.48 8.75C20.8836 8.75 20.4 9.25375 20.4 9.875V14.875C20.4 15.3762 20.0112 15.785 19.482 16.16C18.3108 16.9925 16.4124 17.5 14.28 17.5C12.1476 17.5 10.2492 16.9925 9.078 16.16C8.5488 15.785 8.16 15.3762 8.16 14.875V9.875C8.16 9.25375 7.6764 8.75 7.08 8.75C6.4836 8.75 6 9.25375 6 9.875Z"
        fill="#F6BF0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14.875V19.875C6 21.0312 6.6408 22.1525 7.86 23.0187C9.3096 24.0487 11.6412 24.75 14.28 24.75C16.9188 24.75 19.2504 24.0487 20.7 23.0187C21.9192 22.1525 22.56 21.0312 22.56 19.875V14.875C22.56 14.2537 22.0764 13.75 21.48 13.75C20.8836 13.75 20.4 14.2537 20.4 14.875V19.875C20.4 20.3762 20.0112 20.785 19.482 21.16C18.3108 21.9925 16.4124 22.5 14.28 22.5C12.1476 22.5 10.2492 21.9925 9.078 21.16C8.5488 20.785 8.16 20.3762 8.16 19.875V14.875C8.16 14.2537 7.6764 13.75 7.08 13.75C6.4836 13.75 6 14.2537 6 14.875Z"
        fill="#F6BF0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.28 5C11.6424 5 9.3108 5.70125 7.8612 6.73125C6.642 7.5975 6 8.71875 6 9.875C6 11.0312 6.642 12.1525 7.8612 13.0188C9.3108 14.0487 11.6424 14.75 14.28 14.75C16.9176 14.75 19.2492 14.0487 20.6988 13.0188C21.918 12.1525 22.56 11.0312 22.56 9.875C22.56 8.71875 21.918 7.5975 20.6988 6.73125C19.2492 5.70125 16.9176 5 14.28 5ZM14.28 7.25C16.4112 7.25 18.3096 7.75875 19.482 8.59C20.0112 8.96625 20.4 9.37375 20.4 9.875C20.4 10.3762 20.0112 10.7837 19.482 11.16C18.3096 11.9912 16.4112 12.5 14.28 12.5C12.1488 12.5 10.2504 11.9912 9.078 11.16C8.5488 10.7837 8.16 10.3762 8.16 9.875C8.16 9.37375 8.5488 8.96625 9.078 8.59C10.2504 7.75875 12.1488 7.25 14.28 7.25Z"
        fill="#F6BF0C"
      />
    </svg>
  );
};

export const IconSideBarCard: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.25 5H3.75C2.36929 5 1.25 6.11929 1.25 7.5V22.5C1.25 23.8807 2.36929 25 3.75 25H26.25C27.6307 25 28.75 23.8807 28.75 22.5V7.5C28.75 6.11929 27.6307 5 26.25 5Z"
        stroke="#F6BF0C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 12.5H28.75"
        stroke="#F6BF0C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconSideBarKaspi: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1906_31262)">
        <path
          d="M22.142 2.01273H22.1429C23.2877 2.01273 24 2.80294 24 3.54545V26.4545C24 27.2031 23.2809 28 22.1429 28H7.85714C6.71912 28 6 27.2031 6 26.4545V3.54545C6 2.79694 6.71896 2.00018 7.85676 2C7.85688 2 7.85701 2 7.85714 2L22.142 2.01273Z"
          stroke="#F6BF0C"
          strokeWidth="2"
        />
        <path d="M13 3H17.375" stroke="#F6BF0C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="15" r="5" fill="#87C557" />
        <path
          d="M17.498 14L16.2793 15L14.5605 16.5L12.998 15.1364"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1906_31262">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconCardItemDelivery: FC<CardIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20.5" cy="20.5" r="20.5" fill="#F6BF0C" />
      <path
        d="M9.8 18.4384H8.8624V20.0384H9.8V26.5452H13.7064C14.0592 27.8436 15.2452 28.8024 16.6536 28.8024C18.062 28.8024 19.248 27.8436 19.6012 26.5452H27.3196C27.6724 27.8436 28.8584 28.8024 30.2668 28.8024C31.6752 28.8024 32.8612 27.8436 33.214 26.5452H35V18.7624L32.5492 13.8604H26.7756V11H9.8V14.4384H7V16.0384H9.8V18.4384ZM16.6536 27.2024C15.85 27.2024 15.1964 26.5488 15.1964 25.7452C15.1964 24.9416 15.85 24.288 16.6536 24.288C17.4572 24.288 18.1108 24.9416 18.1108 25.7452C18.1108 26.5488 17.4572 27.2024 16.6536 27.2024ZM30.2668 27.2024C29.4632 27.2024 28.8096 26.5488 28.8096 25.7452C28.8096 24.9416 29.4632 24.288 30.2668 24.288C31.07 24.288 31.724 24.9416 31.724 25.7452C31.724 26.5488 31.07 27.2024 30.2668 27.2024ZM32.9056 18.1512H29.8V15.4604H31.56L32.9056 18.1512ZM28.2 15.4604V19.7512H33.4V24.9452H33.214C32.8612 23.6468 31.6752 22.688 30.2668 22.688C28.8584 22.688 27.6724 23.6468 27.3192 24.9452H26.776V15.4604H28.2ZM11.4 12.6H25.176V24.9452H19.6008C19.2476 23.6468 18.062 22.688 16.6532 22.688C15.2444 22.688 14.0588 23.6468 13.706 24.9452H11.4V20.0384H14.7376V18.4384H11.4V16.0384H12.8752V14.4384H11.4V12.6ZM7.8 28.9384H13.6752V30.5384H7.8V28.9384Z"
        fill="white"
      />
    </svg>
  );
};

export const IconCardItemInStock: FC<CardIconsProps> = (props) => {
  const { className } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20.5" cy="20.5" r="20.5" fill="#A8D982" />
      <path
        d="M27.6114 15.8965L18.4073 25.1006L14.2236 20.9169"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardItemOutOfStock: FC<CardIconsProps> = (props) => {
  const { className } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1906_29872)">
        <circle cx="20.5" cy="20.5" r="20.5" fill="#FF5943" />
        <circle
          cx="11.25"
          cy="30"
          r="2.25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="23.625"
          cy="30"
          r="2.25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.625 27.75H11.25V12H9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.1152 13.8092L11.3213 13.2525C10.7704 13.2132 10.2919 13.6279 10.2526 14.1788C10.2132 14.7296 10.6279 15.2081 11.1788 15.2475L25.8583 16.296L25.0077 22.25H11.25C10.6978 22.25 10.25 22.6977 10.25 23.25C10.25 23.8023 10.6978 24.25 11.25 24.25H25.875C26.3727 24.25 26.7946 23.8841 26.865 23.3914L27.3565 19.9509C27.7438 19.9064 28.1261 19.8319 28.5 19.7284C29.3841 19.4838 30.2215 19.0775 30.9676 18.5242C32.2599 17.5658 33.2098 16.2172 33.6769 14.6776C34.1441 13.138 34.1037 11.4889 33.5618 9.974C33.0199 8.45907 32.0052 7.15855 30.6676 6.26451C29.3299 5.37046 27.7402 4.93029 26.1332 5.00898C24.5262 5.08767 22.9871 5.68106 21.7431 6.70152C20.4992 7.72199 19.6165 9.11542 19.2252 10.676C18.9993 11.577 18.9441 12.5061 19.0562 13.4166C19.0724 13.5479 19.092 13.6788 19.1152 13.8092ZM21.1485 13.9545L27.0713 14.3775C27.3481 14.3973 27.6042 14.5312 27.7784 14.7471C27.9526 14.9631 28.0292 15.2417 27.99 15.5164L27.6458 17.926C28.4221 17.7621 29.1589 17.4324 29.8034 16.9544C30.759 16.2458 31.4613 15.2486 31.8068 14.1102C32.1522 12.9717 32.1223 11.7524 31.7217 10.6322C31.321 9.51205 30.5707 8.55042 29.5816 7.88935C28.5925 7.22828 27.417 6.9028 26.2288 6.96099C25.0405 7.01917 23.9025 7.45794 22.9827 8.21249C22.0629 8.96704 21.4102 9.99737 21.1208 11.1513C20.8889 12.0764 20.9004 13.0417 21.1485 13.9545Z"
          fill="white"
        />
        <path d="M31 8L23.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_1906_29872">
          <rect width="41" height="41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconCardCounterMinus: FC<CardIconsProps> = (props) => {
  const { className } = props;
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.29102 17.5H27.7077"
        stroke="#5C5F65"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardCounterPlus: FC<CardIconsProps> = (props) => {
  const { className } = props;
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 7.29102V27.7077"
        stroke="#5C5F65"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.29102 17.5H27.7077"
        stroke="#5C5F65"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCardTenge: FC<CardIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 4.12407H4M7 4.12407H4M4 4.12407V10.5M1 1.5H4H7"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
