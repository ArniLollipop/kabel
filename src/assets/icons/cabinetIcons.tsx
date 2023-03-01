import { FC, SVGProps } from "react";

interface CabinetIconsProps extends SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
}

export const IconCabinetProfile: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor || "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke={fillColor || "#00ABC2"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={fillColor || "#00ABC2"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetOrder: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#00ABC2" } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2047_55882)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9709 1.45003L21.6981 5.45003C22.0616 5.6156 22.3676 5.87085 22.5815 6.18707C22.7954 6.50329 22.9088 6.86794 22.9091 7.24003V16.77C22.9088 17.1421 22.7954 17.5068 22.5815 17.823C22.3676 18.1392 22.0616 18.3945 21.6981 18.56L12.9709 22.56C12.6678 22.6991 12.3335 22.7715 11.9945 22.7715C11.6556 22.7715 11.3213 22.6991 11.0181 22.56L2.29087 18.56C1.92774 18.3923 1.62297 18.1349 1.41093 17.8168C1.1989 17.4988 1.08804 17.1328 1.09087 16.76V7.24003C1.09109 6.86794 1.20453 6.50329 1.41845 6.18707C1.63237 5.87085 1.93828 5.6156 2.30178 5.45003L11.0291 1.45003C11.3308 1.3126 11.6631 1.24109 12 1.24109C12.3369 1.24109 12.6692 1.3126 12.9709 1.45003Z"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.43994 6.16003L11.9999 11L22.5599 6.16003"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22.76V11"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2047_55882">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconCabinetDelivery: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#00ABC2" } = props;

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
        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetCards: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#00ABC2" } = props;

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
        d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 10H23"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetBonuses: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#00ABC2" } = props;

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
        d="M11.9207 17.8041H11.9206C11.5801 17.8015 11.2188 17.9265 10.969 18.0223C10.6761 18.1346 10.3406 18.2875 9.99162 18.4565C9.51156 18.689 8.95869 18.9753 8.40155 19.2638C8.15434 19.3918 7.90629 19.5203 7.66339 19.6447C6.85107 20.0607 6.08755 20.4358 5.48567 20.6708C5.41213 20.6996 5.34355 20.7252 5.27987 20.7478C5.28322 20.6993 5.28738 20.6477 5.29242 20.5931C5.34925 19.9778 5.49772 19.1717 5.6736 18.304C5.72594 18.0457 5.78092 17.7811 5.83578 17.517C5.95972 16.9205 6.08302 16.327 6.17385 15.817C6.23985 15.4464 6.29428 15.0904 6.32048 14.7842C6.34237 14.5283 6.36361 14.1393 6.25319 13.804C6.14372 13.4715 5.89685 13.1692 5.72722 12.9736C5.52398 12.7393 5.26764 12.4793 4.9922 12.2128C4.61309 11.8461 4.15788 11.4294 3.69956 11.0098C3.49643 10.8239 3.29269 10.6373 3.09469 10.4544C2.43117 9.84122 1.82493 9.26154 1.40785 8.78687C1.38169 8.75711 1.3568 8.72833 1.33314 8.70055C1.38046 8.68912 1.4305 8.67756 1.48332 8.66592C2.11742 8.52615 2.96777 8.41199 3.88178 8.30441C4.15526 8.27222 4.43526 8.24054 4.71424 8.20898C5.34288 8.13786 5.96632 8.06733 6.49815 7.99286C6.88461 7.93874 7.25022 7.87898 7.55669 7.80941C7.81585 7.75058 8.1891 7.65361 8.47134 7.46013C8.75735 7.26406 8.97875 6.95013 9.12276 6.73093C9.29268 6.47229 9.47155 6.1572 9.65071 5.82299C9.89721 5.36319 10.1699 4.81812 10.4442 4.26991C10.5656 4.02714 10.6874 3.78376 10.8073 3.54689C11.2098 2.75203 11.5963 2.02085 11.937 1.49461C11.9806 1.42734 12.0217 1.36607 12.0604 1.31053C12.098 1.36643 12.1379 1.42806 12.1801 1.49567C12.5119 2.02702 12.886 2.76403 13.275 3.56503C13.3909 3.80367 13.5086 4.04887 13.6259 4.29345C13.8909 4.84588 14.1545 5.39519 14.3932 5.8588C14.5667 6.19576 14.7403 6.51363 14.9059 6.77494C15.0462 6.99635 15.2625 7.31399 15.5455 7.51471L15.5455 7.51474C15.8248 7.71276 16.1966 7.81553 16.4547 7.87834C16.76 7.95264 17.1245 8.01806 17.51 8.07815C18.0405 8.16084 18.6626 8.24102 19.2899 8.32186C19.5684 8.35774 19.8479 8.39376 20.1209 8.43019C21.033 8.55192 21.8813 8.67924 22.5129 8.8288C22.5649 8.84111 22.6141 8.85329 22.6607 8.8653C22.6367 8.89268 22.6113 8.92102 22.5847 8.95033C22.1596 9.41855 21.5437 9.98883 20.8699 10.5916C20.6688 10.7715 20.462 10.9549 20.2557 11.1377C19.7904 11.5501 19.3283 11.9597 18.9431 12.3204C18.6633 12.5826 18.4026 12.8385 18.1955 13.0696C18.0226 13.2626 17.7709 13.5608 17.656 13.8911L17.656 13.8912C17.54 14.2246 17.5547 14.6137 17.5723 14.8701C17.5933 15.1767 17.6418 15.5335 17.7015 15.9051C17.7838 16.4165 17.8971 17.0118 18.011 17.6103C18.0614 17.8751 18.1119 18.1405 18.1599 18.3994C18.3212 19.2698 18.4561 20.078 18.5025 20.6941C18.5067 20.7495 18.51 20.8017 18.5126 20.8508C18.449 20.827 18.3804 20.8002 18.3069 20.7702C17.7092 20.5259 16.9521 20.139 16.1469 19.7105C15.9061 19.5824 15.6603 19.4501 15.4153 19.3183C14.8631 19.0212 14.315 18.7263 13.8389 18.4864C13.4928 18.312 13.1599 18.1539 12.8688 18.037C12.6206 17.9374 12.2614 17.8068 11.9207 17.8041ZM5.29254 21.3146C5.292 21.3154 5.28908 21.307 5.28535 21.2869C5.29121 21.3036 5.29307 21.3137 5.29254 21.3146ZM11.7276 0.900589C11.7275 0.899715 11.7343 0.90418 11.7482 0.916605C11.7346 0.907675 11.7277 0.901462 11.7276 0.900589ZM12.4 0.906156C12.3999 0.907026 12.3929 0.913114 12.3792 0.921807C12.3932 0.909632 12.4001 0.905286 12.4 0.906156ZM18.4903 21.4155C18.4898 21.4146 18.4918 21.4046 18.4979 21.388C18.4939 21.408 18.4908 21.4164 18.4903 21.4155Z"
        stroke={fillColor}
        strokeWidth="2"
      />
    </svg>
  );
};

export const IconCabinetSupport: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#00ABC2" } = props;

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
        d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetLogout: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#00ABC2" } = props;

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
        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17L21 12L16 7"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12H9"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetArrow: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = "#39424B" } = props;

  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 13L7 7L1 1"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetEdit: FC<CabinetIconsProps> = (props) => {
  const { className } = props;

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
        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetPassword: FC<CabinetIconsProps> = (props) => {
  const { className } = props;

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
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetEditPhoto: FC<CabinetIconsProps> = (props) => {
  const { className } = props;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#00ABC2" />
      <path
        d="M20 13V27"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 20H27"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
