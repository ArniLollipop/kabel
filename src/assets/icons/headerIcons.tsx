import { FC, SVGProps } from "react";
import classNames from "classnames";
import cls from "./IconCard.module.scss";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  textColor?: string;
}

export const IconCard: FC<IconProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="6.75"
        cy="21.375"
        r="2.25"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="19.125"
        cy="21.375"
        r="2.25"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.125 19.125H6.75V3.375H4.5"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 5.625L22.5 6.75L21.375 14.625H6.75"
        stroke="#00ABC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconGeoTag: FC<IconProps> = (props) => {
  const { className } = props;
  console.log(className);

  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.5441 1.79689C11.2957 1.79509 11.0931 1.99499 11.0913 2.24296C11.0895 2.49093 11.289 2.69353 11.5374 2.69533C11.7854 2.69712 11.988 2.49767 11.9898 2.2497C11.9916 2.00173 11.7921 1.79913 11.5441 1.79689Z"
        fill="#00ABC2"
      />
      <path
        d="M11.5236 4.49227C9.78915 4.47996 8.36868 5.87923 8.35556 7.61318C8.34249 9.34703 9.74253 10.7682 11.4765 10.7813C11.4845 10.7813 11.4925 10.7813 11.5005 10.7813C13.2234 10.7813 14.6315 9.38625 14.6445 7.66034C14.6576 5.92658 13.2576 4.50534 11.5236 4.49227ZM11.5005 9.88295C11.4948 9.88295 11.4889 9.8829 11.4832 9.88286C10.2447 9.87352 9.24461 8.85837 9.25395 7.61992C9.26325 6.38703 10.269 5.39057 11.4996 5.39057C11.5053 5.39057 11.5112 5.39062 11.5169 5.39066C12.7554 5.40001 13.7555 6.41515 13.7462 7.65361C13.7368 8.88649 12.7311 9.88295 11.5005 9.88295Z"
        fill="#00ABC2"
      />
      <path
        d="M13.4598 2.13728C13.2261 2.05435 12.9692 2.17676 12.8863 2.41063C12.8034 2.64449 12.9258 2.90122 13.1596 2.98415C15.1383 3.68542 16.457 5.56994 16.4412 7.6735C16.4393 7.92156 16.6389 8.12421 16.887 8.12609C16.8882 8.12609 16.8893 8.12609 16.8905 8.12609C17.1369 8.12609 17.3377 7.92718 17.3396 7.68024C17.3583 5.19395 15.7991 2.9664 13.4598 2.13728Z"
        fill="#00ABC2"
      />
      <path
        d="M14.2565 16.9105C17.2444 13.0645 19.1116 11.059 19.1368 7.69414C19.1685 3.46056 15.7327 0 11.4995 0C7.31561 0 3.89534 3.38837 3.86354 7.57959C3.83784 11.0357 5.73979 13.0385 8.74831 16.9099C5.75538 17.3571 3.86354 18.4809 3.86354 19.8555C3.86354 20.7763 4.71463 21.6025 6.26008 22.182C7.66672 22.7095 9.5277 23 11.5002 23C13.4727 23 15.3336 22.7095 16.7403 22.182C18.2857 21.6025 19.1368 20.7762 19.1368 19.8555C19.1368 18.4817 17.2467 17.3581 14.2565 16.9105ZM4.76193 7.58638C4.78996 3.888 7.8076 0.898439 11.4996 0.898439C15.2352 0.898439 18.2663 3.95259 18.2384 7.68745C18.2145 10.8829 16.2343 12.8522 13.0728 16.9734C12.5089 17.7082 11.991 18.4029 11.5009 19.0824C11.0121 18.4025 10.5046 17.7202 9.93223 16.9732C6.64007 12.6794 4.73759 10.8589 4.76193 7.58638ZM11.5002 22.1016C7.64359 22.1016 4.76193 20.9158 4.76193 19.8555C4.76193 19.0692 6.4846 18.0759 9.38108 17.7319C10.0214 18.572 10.5827 19.3352 11.1333 20.1147C11.2174 20.2338 11.354 20.3046 11.4998 20.3047C11.4999 20.3047 11.5 20.3047 11.5002 20.3047C11.6458 20.3047 11.7824 20.2341 11.8667 20.1153C12.412 19.346 12.9887 18.5639 13.6235 17.7324C16.5173 18.0767 18.2384 19.0697 18.2384 19.8556C18.2384 20.9158 15.3568 22.1016 11.5002 22.1016Z"
        fill="#00ABC2"
      />
    </svg>
  );
};

export const IconPhone: FC<IconProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2001_12817)">
        <path
          d="M4.48287 15.1241C6.65278 17.718 9.26488 19.7603 12.2462 21.2053C13.3813 21.7433 14.8994 22.3815 16.5906 22.4909C16.6955 22.4954 16.7958 22.5 16.9006 22.5C18.0357 22.5 18.9474 22.108 19.6905 21.3011C19.6951 21.2965 19.7042 21.2874 19.7087 21.2783C19.9731 20.9592 20.274 20.672 20.5885 20.3666C20.8028 20.1614 21.0216 19.9472 21.2313 19.7283C22.2023 18.7163 22.2023 17.4308 21.2222 16.4507L18.4825 13.7109C18.0175 13.2277 17.4613 12.9724 16.8778 12.9724C16.2943 12.9724 15.7336 13.2277 15.2549 13.7064L13.6229 15.3384C13.4725 15.2518 13.3175 15.1743 13.1716 15.1013C12.9893 15.0102 12.8206 14.9235 12.6702 14.8278C11.1841 13.8842 9.83471 12.6533 8.54462 11.0715C7.89273 10.2464 7.4551 9.55346 7.14967 8.84687C7.57819 8.45939 7.97935 8.05367 8.36683 7.65707C8.50359 7.51575 8.64491 7.37443 8.78623 7.23311C9.27856 6.74078 9.54296 6.17095 9.54296 5.592C9.54296 5.01305 9.28312 4.44322 8.78623 3.95089L7.42775 2.59242C7.2682 2.43286 7.11776 2.27787 6.96277 2.11832C6.6619 1.80833 6.34735 1.48923 6.03737 1.20203C5.56783 0.741608 5.01623 0.5 4.43272 0.5C3.85378 0.5 3.29762 0.741608 2.80985 1.20659L1.10492 2.91152C0.484941 3.5315 0.133925 4.28367 0.0609871 5.15437C-0.025627 6.24389 0.174953 7.40178 0.694638 8.80128C1.4924 10.9666 2.69588 12.977 4.48287 15.1241ZM1.1733 5.2501C1.228 4.6438 1.46049 4.1378 1.89812 3.70017L3.59393 2.00435C3.85834 1.74907 4.15009 1.61687 4.43272 1.61687C4.7108 1.61687 4.99344 1.74907 5.25328 2.01347C5.55871 2.2961 5.8459 2.59242 6.15589 2.90696C6.31088 3.06651 6.47044 3.22607 6.62999 3.39018L7.98846 4.74865C8.2711 5.03129 8.41698 5.31848 8.41698 5.60112C8.41698 5.88375 8.2711 6.17095 7.98846 6.45359C7.84715 6.5949 7.70583 6.74078 7.56451 6.8821C7.14056 7.31061 6.74396 7.71633 6.30633 8.10381C6.29721 8.11293 6.29265 8.11749 6.28353 8.12661C5.90517 8.50497 5.96443 8.86511 6.0556 9.13862C6.06016 9.1523 6.06472 9.16142 6.06928 9.17509C6.42029 10.0184 6.90807 10.8208 7.66936 11.7781C9.03695 13.4648 10.4775 14.7731 12.0639 15.7806C12.2599 15.9082 12.4696 16.0085 12.6656 16.1088C12.848 16.2 13.0166 16.2866 13.1671 16.3823C13.1853 16.3914 13.199 16.4005 13.2172 16.4097C13.3677 16.4872 13.5135 16.5236 13.6594 16.5236C14.0241 16.5236 14.2612 16.2911 14.3387 16.2136L16.0436 14.5087C16.308 14.2443 16.5952 14.103 16.8778 14.103C17.2243 14.103 17.5069 14.3172 17.6847 14.5087L20.4336 17.253C20.9806 17.8 20.976 18.3927 20.4199 18.9716C20.2284 19.1768 20.0278 19.3728 19.8136 19.5779C19.4945 19.8879 19.1617 20.207 18.8608 20.5671C18.3366 21.1324 17.712 21.3968 16.9052 21.3968C16.8277 21.3968 16.7456 21.3923 16.6681 21.3877C15.1729 21.292 13.7825 20.7085 12.7386 20.2116C9.90309 18.8394 7.41408 16.8929 5.34901 14.4221C3.64864 12.3753 2.50442 10.4697 1.74768 8.42748C1.27814 7.17385 1.10036 6.16639 1.1733 5.2501Z"
          fill="#00ABC2"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_12817">
          <rect width="22" height="22" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconUserCabinet: FC<IconProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.3666 20.9342V20.1674C6.3666 17.6269 8.42609 15.5676 10.9666 15.5676H14.0333C16.5738 15.5676 18.6333 17.6269 18.6333 20.1674V20.9342M12.4999 6.36758C10.8063 6.36758 9.43327 7.74057 9.43327 9.43425C9.43327 11.1279 10.8063 12.5009 12.4999 12.5009C14.1936 12.5009 15.5666 11.1279 15.5666 9.43425C15.5666 7.74057 14.1936 6.36758 12.4999 6.36758ZM12.4999 23.2342C6.57208 23.2342 1.7666 18.4288 1.7666 12.5009C1.7666 6.57306 6.57208 1.76758 12.4999 1.76758C18.4278 1.76758 23.2333 6.57306 23.2333 12.5009C23.2333 18.4288 18.4278 23.2342 12.4999 23.2342Z"
        stroke="#00ABC2"
        strokeWidth="1.65"
        strokeLinecap="square"
      />
    </svg>
  );
};

export const IconWhatsApp: FC<IconProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2001_12829)">
        <path
          d="M12 24.5C18.3513 24.5 23.5 19.1274 23.5 12.5C23.5 5.87258 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.87258 0.5 12.5C0.5 19.1274 5.64873 24.5 12 24.5Z"
          fill="#29A71A"
        />
        <path
          d="M17.0705 7.20963C15.874 5.94867 14.2851 5.17537 12.5903 5.0292C10.8955 4.88304 9.20652 5.37364 7.82788 6.4125C6.44923 7.45137 5.47174 8.97012 5.07171 10.6948C4.67168 12.4195 4.87545 14.2366 5.64626 15.8183L4.88961 19.6514C4.88176 19.6896 4.88154 19.729 4.88896 19.7673C4.89638 19.8055 4.91128 19.8418 4.93274 19.8737C4.96417 19.9222 5.00903 19.9596 5.06133 19.9808C5.11364 20.002 5.1709 20.006 5.22546 19.9924L8.82575 19.1019C10.3373 19.8859 12.0664 20.0848 13.7053 19.6634C15.3442 19.2419 16.7867 18.2274 17.7761 16.8003C18.7655 15.3732 19.2375 13.6262 19.1083 11.87C18.9791 10.1138 18.257 8.46239 17.0705 7.20963ZM15.9479 16.5587C15.1201 17.4201 14.0541 17.9888 12.9001 18.1845C11.7461 18.3802 10.5624 18.1931 9.51575 17.6496L9.01393 17.3905L6.80671 17.936L6.81325 17.9074L7.27064 15.5892L7.02495 15.0833C6.49015 13.9873 6.30149 12.7428 6.486 11.5281C6.67052 10.3133 7.21873 9.1907 8.05211 8.32099C9.09927 7.22864 10.5193 6.61499 12 6.61499C13.4807 6.61499 14.9007 7.22864 15.9479 8.32099C15.9568 8.33166 15.9664 8.34169 15.9767 8.35099C17.0108 9.44616 17.5882 10.9235 17.5828 12.461C17.5774 13.9985 16.9897 15.4715 15.9479 16.5587Z"
          fill="white"
        />
        <path
          d="M15.7521 14.8577C15.4816 15.3022 15.0543 15.8463 14.5172 15.9813C13.5763 16.2186 12.1322 15.9895 10.3353 14.2413L10.3131 14.2209C8.73318 12.6923 8.32284 11.42 8.42216 10.4109C8.47705 9.83816 8.93443 9.31998 9.31994 8.98179C9.38089 8.92752 9.45317 8.88887 9.53099 8.86895C9.60881 8.84903 9.69002 8.84838 9.76812 8.86707C9.84622 8.88575 9.91905 8.92325 9.98078 8.97656C10.0425 9.02986 10.0914 9.0975 10.1236 9.17407L10.7052 10.5377C10.743 10.6261 10.757 10.7236 10.7457 10.8197C10.7344 10.9158 10.6983 11.0069 10.6411 11.0832L10.3471 11.4813C10.284 11.5636 10.2459 11.6636 10.2378 11.7686C10.2296 11.8736 10.2518 11.9787 10.3014 12.0704C10.466 12.3718 10.8607 12.815 11.2985 13.2254C11.7898 13.6891 12.3348 14.1132 12.6798 14.2577C12.7721 14.2971 12.8736 14.3067 12.9712 14.2853C13.0688 14.2639 13.158 14.2125 13.2273 14.1377L13.5684 13.7791C13.6342 13.7113 13.7161 13.6631 13.8056 13.6391C13.8951 13.6151 13.9891 13.6164 14.0781 13.6427L15.4594 14.0518C15.5356 14.0762 15.6054 14.1184 15.6636 14.1753C15.7217 14.2322 15.7666 14.3022 15.7949 14.3799C15.8231 14.4577 15.834 14.5412 15.8265 14.624C15.8191 14.7068 15.7937 14.7867 15.7521 14.8577Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_12829">
          <rect width="23" height="24" fill="white" transform="translate(0.5 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconLogo: FC<IconProps> = (props) => {
  const { className, width, height, textColor } = props;
  return (
    <svg
      width={width || "274"}
      height={height || "82"}
      viewBox="0 0 274 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.0752 9.79679L82.8191 7.35545L82.1331 6.67188L79.4219 9.04811L80.0752 9.79679Z"
        fill="#00ABC2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.9065 13.8657L80.6304 10.4153L78.7684 8.33203C77.9518 9.17836 75.8939 11.1314 74.8159 11.8801L76.9065 13.8657Z"
        fill="#F6BF0C"
      />
      <path
        d="M66.5516 9.76551L69.9161 6.24998L69.1975 5.56641L65.8003 9.08193L66.5516 9.76551Z"
        stroke="#00ABC2"
        strokeWidth="0.216"
        strokeMiterlimit="22.9256"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.5136 14.1939L67.1722 10.3528L65.1469 8.46484L61.5537 12.4686L63.5136 14.1939Z"
        fill="#F6BF0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.4682 2.92961L64.8201 0.781228L64.2321 0L61.7822 2.21348L62.4682 2.92961Z"
        fill="#F6BF0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.0715 7.19385L63.0566 3.54812L61.1294 1.5625L57.2422 5.24078L59.0715 7.19385Z"
        fill="#00ABC2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.4947 14.3879L74.2282 11.3281C66.4211 17.9035 45.4826 42.4796 41.3994 52.2775L64.1346 26.8876C75.1755 36.718 74.1302 56.5417 51.4604 56.444C59.3981 59.3411 72.1703 57.0625 75.7635 48.5667C79.52 39.7127 75.0448 29.1011 69.263 22.2328L77.4947 14.3879Z"
        fill="#00ABC2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.654 4.58984L52.3422 9.21211C44.0452 6.86843 34.5069 3.45055 26.9285 10.4816C19.7747 17.122 21.4734 25.2273 25.3279 34.9275C23.7926 28.1569 22.2573 22.2 28.2024 16.6989C33.7882 11.5232 42.1506 12.5649 47.475 14.5505C47.3444 14.9086 45.7438 17.1872 43.8492 19.8889C39.4393 26.0736 31.2077 39.5173 28.5618 46.0926C35.6175 36.6853 45.9398 19.8889 56.85 10.4816L59.7899 7.94262L56.654 4.58984Z"
        fill="#F6BF0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.8027 11.8164C52.963 19.8565 35.193 43.7491 33.0044 52.3426C40.2561 39.8104 54.0409 25.8785 64.2652 14.8437L60.8027 11.8164Z"
        fill="#00ABC2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.5516 9.76551L69.9161 6.24998L69.1975 5.56641L65.8003 9.08193L66.5516 9.76551Z"
        fill="#00ABC2"
      />
      <path
        d="M237.163 54.3934V38.3457H240.919V51.3987H252.973V54.4259H237.163V54.3934ZM216.878 54.3934V38.3457H233.668V41.2102H220.634V44.628H229.388V47.4925H220.634V51.3987H233.831V54.4259H216.878V54.3934ZM209.495 41.5357C209.495 41.3078 209.462 41.1776 209.364 41.1451C209.299 41.1125 209.136 41.08 208.94 41.08H199.597V44.6606H208.972C209.201 44.6606 209.332 44.628 209.397 44.5955C209.462 44.5304 209.528 44.4002 209.528 44.2049V41.5357H209.495ZM209.495 47.8506C209.495 47.6227 209.462 47.4925 209.364 47.46C209.299 47.4274 209.136 47.3949 208.94 47.3949H199.597V51.4638H208.972C209.201 51.4638 209.332 51.4312 209.397 51.3987C209.462 51.3336 209.528 51.2034 209.528 51.0081V47.8506H209.495ZM195.841 54.3934V38.3457H209.397C210.116 38.3457 210.736 38.3782 211.226 38.4759C211.716 38.5735 212.108 38.7363 212.37 38.9641C212.664 39.192 212.86 39.5175 212.958 39.9081C213.088 40.2987 213.121 40.8195 213.121 41.438V43.326C213.121 43.8468 213.056 44.2374 212.925 44.5955C212.794 44.921 212.664 45.1814 212.468 45.3767C212.272 45.572 212.076 45.7348 211.88 45.8324C211.684 45.9301 211.488 45.9952 211.324 46.0277C211.488 46.0603 211.651 46.1254 211.88 46.223C212.108 46.3207 212.304 46.4835 212.5 46.6788C212.696 46.9066 212.86 47.1996 212.99 47.5902C213.121 47.9808 213.186 48.4691 213.186 49.055V51.0406C213.186 51.7567 213.121 52.3101 212.958 52.7658C212.827 53.189 212.566 53.5471 212.239 53.7749C211.912 54.0353 211.488 54.1981 210.998 54.2632C210.475 54.3608 209.854 54.3934 209.136 54.3934H195.841ZM178.822 48.4365H186.303L182.546 41.7635H182.513L178.822 48.4365ZM189.504 54.3934L187.74 51.2034H177.352L175.588 54.3934H171.473L180.619 38.3457H184.539L193.75 54.3934H189.504ZM165.201 54.3934L155.434 47.3298V54.3934H151.677V38.3457H155.434V44.921L164.253 38.3131H169.643L159.19 46.0277L170.917 54.3608H165.201V54.3934ZM130.804 54.3934V52.6356L141.91 41.2427H131.915V38.3782H148.084V40.0058L136.749 51.3987H148.574V54.4259H130.804V54.3934ZM114.765 48.4365H122.246L118.489 41.7635H118.457L114.765 48.4365ZM125.447 54.3934L123.683 51.2034H113.295L111.531 54.3934H107.416L116.562 38.3457H120.482L129.693 54.3934H125.447ZM101.144 54.3934L91.3769 47.3298V54.3934H87.6204V38.3457H91.3769V44.921L100.197 38.3131H105.586L95.1334 46.0277L106.86 54.3608H101.144V54.3934ZM201.329 29.5243V22.3305L192.574 13.4766H197.638L200.675 16.6991C201.165 17.1874 201.623 17.6757 202.047 18.1639C202.505 18.6522 202.897 19.0754 203.256 19.466C203.452 19.3032 203.648 19.1079 203.844 18.8801C204.073 18.6522 204.269 18.4243 204.53 18.1639C204.759 17.9035 204.987 17.6757 205.216 17.4478C205.445 17.2199 205.641 16.9921 205.804 16.8293L209.005 13.5091H213.905L205.085 22.363V29.5568H201.329V29.5243ZM180.292 29.5243V16.3736H172.91V13.5091H191.431V16.3736H184.049V29.5568H180.292V29.5243ZM159.68 23.6H167.161L163.404 16.927H163.372L159.68 23.6ZM170.362 29.5243L168.598 26.3343H158.21L156.446 29.5243H152.331L161.477 13.4766H165.397L174.608 29.5243H170.362ZM146.516 29.5243V21.3865C146.516 21.1586 146.516 20.8982 146.516 20.6053C146.516 20.2798 146.549 19.9542 146.549 19.6287C146.549 19.3032 146.581 18.9452 146.581 18.6522C146.581 18.3267 146.614 18.0663 146.614 17.8384H146.581C146.516 17.9686 146.418 18.1314 146.287 18.3267C146.157 18.522 146.026 18.7499 145.863 19.0103C145.7 19.2381 145.536 19.4985 145.373 19.7264C145.21 19.9542 145.079 20.1496 144.981 20.3123L139.656 27.6689H138.938L133.613 20.2798C133.483 20.117 133.352 19.9217 133.189 19.6938C133.025 19.4334 132.862 19.2056 132.699 18.9452C132.535 18.6847 132.405 18.4569 132.274 18.2616C132.143 18.0663 132.045 17.9035 132.013 17.8059H131.98C131.98 18.0012 132.013 18.229 132.013 18.5545C132.013 18.8801 132.045 19.2056 132.045 19.5636C132.045 19.9217 132.078 20.2472 132.078 20.5727C132.078 20.8982 132.078 21.1586 132.078 21.3539V29.5243H128.322V13.4766H132.535L137.239 20.2147C137.631 20.768 138.023 21.3214 138.35 21.8422C138.709 22.363 139.003 22.8187 139.297 23.2419C139.591 22.7862 139.918 22.2979 140.277 21.7771C140.604 21.2563 140.996 20.7355 141.42 20.1496L146.092 13.4766H150.273V29.5243H146.516ZM110.225 29.5243V13.4766H113.981V26.5296H126.035V29.5568H110.225V29.5243ZM93.1735 23.6H100.654L96.93 16.927H96.8974L93.1735 23.6ZM103.888 29.5243L102.124 26.3343H91.7362L89.9723 29.5243H85.8564L95.0028 13.4766H98.9226L108.134 29.5243H103.888Z"
        fill={textColor || "#2B2A29"}
      />
      <path
        d="M273.961 69.8623H272.957L268.979 74.9401V69.8623H268.284V75.6108H269.326L273.305 70.5808V75.6108H274V69.8623H273.961ZM267.125 69.8623H266.121L262.142 74.8922V69.8623H261.447V75.6108H262.49L266.468 70.5808V75.6108H267.163V69.8623H267.125ZM256.426 75.6108H257.121V70.6287H260.675V69.8623H256.426V75.6108ZM251.019 72.7365H254.109C254.302 72.7365 254.456 72.6407 254.572 72.497C254.688 72.3054 254.765 72.0659 254.765 71.6826C254.765 71.2994 254.727 71.0599 254.611 70.8683C254.495 70.6767 254.34 70.6287 254.109 70.6287H251.057V72.7365H251.019ZM250.323 75.6108V69.8623H254.109C254.533 69.8623 254.842 70.006 255.074 70.3413C255.306 70.6287 255.422 71.1078 255.422 71.7305C255.422 72.3533 255.306 72.8323 255.074 73.1198C254.842 73.4072 254.495 73.5509 254.07 73.5509H250.98V75.6587H250.323V75.6108ZM244.877 69.8623H249.319V70.6287H245.573V72.3054H249.203V73.0719H245.573V74.8443H249.319V75.6108H244.877V69.8623ZM238.504 69.8623H239.2V72.3054H243.217V69.8623H243.912V75.6108H243.217V73.0719H239.2V75.6108H238.504V69.8623ZM233.483 72.3054H236.65C236.65 71.491 236.535 71.012 236.341 70.8204C236.11 70.6287 235.608 70.5329 234.719 70.5329C233.831 70.5329 233.29 70.5808 233.136 70.7246C232.904 70.8683 232.788 71.2515 232.788 71.8743H232.093C232.093 70.9641 232.247 70.3892 232.556 70.1497C232.865 69.9102 233.599 69.8144 234.719 69.8144C235.878 69.8144 236.612 70.006 236.921 70.3892C237.23 70.7246 237.346 71.5389 237.346 72.8323C237.346 74.0778 237.191 74.8922 236.921 75.2275C236.612 75.6108 235.878 75.8024 234.719 75.8024C233.599 75.8024 232.865 75.7066 232.556 75.4671C232.247 75.2275 232.093 74.6527 232.093 73.7425H232.788C232.788 74.3653 232.904 74.7485 233.097 74.8443C233.29 74.988 233.831 75.0359 234.719 75.0359C235.608 75.0359 236.148 74.9401 236.341 74.7964C236.573 74.6048 236.689 74.0778 236.689 73.2156H233.522V72.3054H233.483ZM228.269 74.9401C229.35 74.9401 229.968 74.8443 230.162 74.6527C230.355 74.4611 230.432 73.8383 230.432 72.7365C230.432 71.6826 230.355 71.012 230.162 70.8204C229.968 70.6287 229.35 70.5329 228.269 70.5329C227.187 70.5329 226.569 70.6287 226.376 70.8204C226.183 71.012 226.106 71.6347 226.106 72.7365C226.106 73.7904 226.183 74.4132 226.376 74.6048C226.569 74.8443 227.187 74.9401 228.269 74.9401ZM228.269 75.7066C227.303 75.7066 226.608 75.6108 226.26 75.4671C225.874 75.3234 225.643 75.0359 225.527 74.6048C225.449 74.3174 225.411 73.6946 225.411 72.7365C225.411 71.7784 225.449 71.1557 225.527 70.8683C225.643 70.4371 225.874 70.1497 226.26 69.9581C226.647 69.8144 227.342 69.7186 228.269 69.7186C229.235 69.7186 229.891 69.8144 230.277 69.9581C230.664 70.1018 230.895 70.3892 231.011 70.8683C231.089 71.1557 231.127 71.7784 231.127 72.7365C231.127 73.6946 231.089 74.3174 231.011 74.5569C230.895 74.988 230.664 75.2755 230.277 75.4671C229.891 75.6108 229.235 75.7066 228.269 75.7066ZM219.926 72.7365H223.016C223.209 72.7365 223.364 72.6407 223.48 72.497C223.595 72.3054 223.673 72.0659 223.673 71.6826C223.673 71.2994 223.595 71.0599 223.518 70.8683C223.402 70.6767 223.248 70.6287 223.016 70.6287H219.965V72.7365H219.926ZM219.231 75.6108V69.8623H223.016C223.441 69.8623 223.75 70.006 223.982 70.3413C224.213 70.6287 224.329 71.1078 224.329 71.7305C224.329 72.3533 224.213 72.8323 223.982 73.1198C223.75 73.4072 223.402 73.5509 222.977 73.5509H219.887V75.6587H219.231V75.6108ZM213.63 69.8623H218.497V70.6287H216.411V75.6108H215.716V70.6287H213.63V69.8623ZM207.451 75.6108V69.8623H208.146V72.2096H208.841L211.661 69.8623H212.858L209.575 72.5928L213.051 75.6587H211.892L208.802 73.024H208.107V75.6587H207.451V75.6108ZM201.889 69.8623H206.33V70.6287H202.584V72.3054H206.215V73.0719H202.584V74.8443H206.33V75.6108H201.889V69.8623ZM195.207 74.8443H195.477C195.632 74.8443 195.747 74.7006 195.863 74.3653C195.979 73.982 196.018 73.3114 196.018 72.4012V72.2575V72.1617V72.0659C196.018 71.9701 196.018 71.8743 196.018 71.7784C196.018 71.6826 196.018 71.5868 196.018 71.491V69.8623H200.769V75.6108H200.073V70.6287H196.713V71.7305V72.1138C196.713 72.6407 196.713 73.1198 196.674 73.503C196.636 74.1258 196.559 74.6048 196.443 74.9401C196.327 75.3713 196.134 75.6108 195.902 75.6108H195.207V74.8443ZM190.34 72.3054H193.507C193.507 71.491 193.391 71.012 193.198 70.8204C192.966 70.6287 192.464 70.5329 191.576 70.5329C190.688 70.5329 190.147 70.5808 189.992 70.7246C189.761 70.8683 189.645 71.2515 189.645 71.8743H188.95C188.95 70.9641 189.104 70.3892 189.413 70.1497C189.722 69.9102 190.456 69.8144 191.576 69.8144C192.735 69.8144 193.469 70.006 193.778 70.3892C194.087 70.7246 194.202 71.5389 194.202 72.8323C194.202 74.0778 194.048 74.8922 193.778 75.2275C193.469 75.6108 192.735 75.8024 191.576 75.8024C190.456 75.8024 189.722 75.7066 189.413 75.4671C189.104 75.2275 188.95 74.6527 188.95 73.7425H189.645C189.645 74.3653 189.761 74.7485 189.954 74.8443C190.147 74.988 190.688 75.0359 191.576 75.0359C192.464 75.0359 193.005 74.9401 193.198 74.7964C193.43 74.6048 193.546 74.0778 193.546 73.2156H190.379V72.3054H190.34ZM180.491 69H182.577V69.7665H180.491V69ZM184.392 69.8623H183.388L179.409 74.9401V69.8623H178.714V75.6108H179.757L183.735 70.5808V75.6108H184.43V69.8623H184.392ZM174.736 74.9401C175.817 74.9401 176.435 74.8443 176.628 74.6527C176.822 74.4611 176.899 73.8383 176.899 72.7365C176.899 71.6826 176.822 71.012 176.628 70.8204C176.435 70.6287 175.817 70.5329 174.736 70.5329C173.654 70.5329 173.036 70.6287 172.843 70.8204C172.65 71.012 172.573 71.6347 172.573 72.7365C172.573 73.7904 172.65 74.4132 172.843 74.6048C173.036 74.8443 173.693 74.9401 174.736 74.9401ZM174.736 75.7066C173.77 75.7066 173.075 75.6108 172.727 75.4671C172.341 75.3234 172.109 75.0359 171.993 74.6048C171.916 74.3174 171.878 73.6946 171.878 72.7365C171.878 71.7784 171.916 71.1557 171.993 70.8683C172.109 70.4371 172.341 70.1497 172.727 69.9581C173.114 69.8144 173.809 69.7186 174.736 69.7186C175.701 69.7186 176.358 69.8144 176.744 69.9581C177.131 70.1018 177.362 70.3892 177.478 70.8683C177.555 71.1557 177.594 71.7784 177.594 72.7365C177.594 73.6946 177.555 74.3174 177.478 74.5569C177.362 74.988 177.131 75.2755 176.744 75.4671C176.397 75.6108 175.701 75.7066 174.736 75.7066ZM165.466 69.8623H166.161V72.3054H170.178V69.8623H170.873V75.6108H170.178V73.0719H166.161V75.6108H165.466V69.8623ZM159.904 72.7365V74.8443H162.955C163.149 74.8443 163.303 74.7485 163.458 74.6048C163.573 74.4132 163.651 74.1737 163.651 73.7904C163.651 73.4072 163.612 73.1677 163.496 72.9761C163.38 72.8323 163.226 72.7365 163.033 72.7365H159.904ZM159.209 69.8623H159.904V71.9701H162.955C163.38 71.9701 163.689 72.1138 163.921 72.4012C164.153 72.6886 164.307 73.1677 164.307 73.7904C164.307 74.4132 164.191 74.8922 163.96 75.1796C163.728 75.4671 163.419 75.6108 162.994 75.6108H159.209V69.8623ZM152.372 74.8443H152.643C152.797 74.8443 152.913 74.7006 153.029 74.3653C153.145 73.982 153.184 73.3114 153.184 72.4012V72.2575V72.1617V72.0659C153.184 71.9701 153.184 71.8743 153.184 71.7784C153.184 71.6826 153.184 71.5868 153.184 71.491V69.8623H157.934V75.6108H157.239V70.6287H153.879V71.7305V72.1138C153.879 72.6407 153.879 73.1198 153.84 73.503C153.801 74.1258 153.724 74.6048 153.608 74.9401C153.493 75.3713 153.299 75.6108 153.068 75.6108H152.372V74.8443ZM151.407 69.8623H150.403L146.424 74.9401V69.8623H145.729V75.6108H146.772L150.75 70.5808V75.6108H151.445V69.8623H151.407ZM143.991 73.9341C143.991 73.6467 143.914 73.4072 143.759 73.2635C143.605 73.1198 143.45 73.024 143.218 73.024H140.167V74.8443H143.218C143.45 74.8443 143.605 74.7485 143.759 74.6048C143.914 74.4611 143.991 74.2216 143.991 73.9341ZM139.472 69.8623H144.223V70.6287H140.167V72.2575H143.257C143.682 72.2575 144.03 72.3533 144.261 72.5928C144.57 72.8802 144.686 73.3114 144.686 73.9341C144.686 74.5569 144.532 74.988 144.261 75.2755C144.03 75.515 143.682 75.6108 143.257 75.6108H139.472V69.8623ZM137.039 73.5509L135.764 70.5329H135.571L134.296 73.5509H137.039ZM136.228 69.8623L138.661 75.6587H137.888L137.348 74.3653H134.026L133.485 75.6587H132.713L135.146 69.8623H136.228ZM127.383 69.8623H132.249V70.6287H130.163V75.6108H129.468V70.6287H127.383V69.8623ZM122.091 72.7365C122.091 73.7904 122.168 74.4132 122.361 74.6048C122.555 74.7964 123.095 74.8922 124.022 74.8922C124.872 74.8922 125.413 74.8443 125.606 74.7006C125.838 74.5569 125.953 74.1737 125.953 73.5509H126.649C126.649 74.4611 126.494 75.0359 126.185 75.2755C125.876 75.515 125.142 75.6108 124.022 75.6108C122.864 75.6108 122.13 75.4192 121.859 75.0838C121.55 74.7485 121.396 73.9341 121.396 72.6407C121.396 71.3473 121.55 70.485 121.859 70.1497C122.168 69.8144 122.902 69.6228 124.061 69.6228C125.181 69.6228 125.915 69.7186 126.224 69.9581C126.533 70.1976 126.687 70.7725 126.687 71.6826H125.992C125.992 71.0599 125.876 70.6766 125.683 70.5808C125.49 70.4371 124.949 70.3892 124.061 70.3892C123.134 70.3892 122.555 70.485 122.4 70.6766C122.168 71.0599 122.091 71.6826 122.091 72.7365ZM111.663 75.6108V69.8623H112.358V72.2096H113.053L115.873 69.8623H117.07L113.787 72.5928L117.263 75.6587H116.104L113.014 73.024H112.319V75.6587H111.663V75.6108ZM110.465 69.8623H109.461L105.483 74.9401V69.8623H104.787V75.6108H105.83L109.809 70.5808V75.6108H110.504V69.8623H110.465ZM98.2985 69.8623H98.9938V72.3054H103.011V69.8623H103.706V75.6108H103.011V73.0719H98.9938V75.6108H98.2985V69.8623ZM96.3673 70.6287H93.0843V71.7784C93.0843 72.2096 93.0457 72.7365 93.007 73.3593C92.9684 73.982 92.8912 74.4611 92.8139 74.8443H96.406V70.6287H96.3673ZM92.3504 71.7784V69.8623H97.024V74.8443H97.3716V77H96.715V75.6108H92.3118V77H91.6552V74.8443H92.0028C92.0801 74.4611 92.1573 73.982 92.2346 73.3114C92.3118 72.6886 92.3504 72.1617 92.3504 71.7784ZM87.7928 74.9401C88.8743 74.9401 89.4922 74.8443 89.6854 74.6527C89.8785 74.4611 89.9557 73.8383 89.9557 72.7365C89.9557 71.6826 89.8785 71.012 89.6854 70.8204C89.4922 70.6287 88.8743 70.5329 87.7928 70.5329C86.7113 70.5329 86.0933 70.6287 85.9002 70.8204C85.7071 71.012 85.6298 71.6347 85.6298 72.7365C85.6298 73.7904 85.7071 74.4132 85.9002 74.6048C86.0933 74.8443 86.7113 74.9401 87.7928 74.9401ZM87.7928 75.7066C86.8272 75.7066 86.1319 75.6108 85.7843 75.4671C85.3981 75.3234 85.1663 75.0359 85.0505 74.6048C84.9732 74.3174 84.9346 73.6946 84.9346 72.7365C84.9346 71.7784 84.9732 71.1557 85.0505 70.8683C85.1663 70.4371 85.3981 70.1497 85.7843 69.9581C86.1706 69.8144 86.8658 69.7186 87.7928 69.7186C88.7584 69.7186 89.415 69.8144 89.8012 69.9581C90.1875 70.1018 90.4192 70.3892 90.5351 70.8683C90.6123 71.1557 90.651 71.7784 90.651 72.7365C90.651 73.6946 90.6123 74.3174 90.5351 74.5569C90.4192 74.988 90.1875 75.2755 89.8012 75.4671C89.4536 75.6108 88.7584 75.7066 87.7928 75.7066ZM79.3341 73.024V74.8443H82.3854C82.6558 74.8443 82.8489 74.7485 82.9648 74.6048C83.0806 74.4611 83.1579 74.2216 83.1579 73.9341C83.1579 73.6467 83.0806 73.4551 82.9648 73.2635C82.8102 73.0719 82.6171 73.024 82.3854 73.024H79.3341ZM82.9648 71.491C82.9648 71.2036 82.9261 71.012 82.8103 70.8683C82.6944 70.6767 82.4626 70.6287 82.1923 70.6287H79.3341V72.2575H82.1923C82.5013 72.2575 82.6944 72.2096 82.8103 72.0659C82.9261 71.9701 82.9648 71.7305 82.9648 71.491ZM83.8531 73.9341C83.8531 74.509 83.7372 74.9401 83.4669 75.2275C83.1965 75.515 82.8489 75.6587 82.3468 75.6587H78.6002V69.8623H82.1536C82.6171 69.8623 83.0034 70.006 83.2351 70.2934C83.5055 70.5808 83.6214 70.9641 83.6214 71.491C83.6214 72.0659 83.4282 72.4491 83.0806 72.5928C83.2737 72.6886 83.4282 72.8323 83.5441 73.024C83.7759 73.2635 83.8531 73.5509 83.8531 73.9341ZM74.7764 74.9401C75.8579 74.9401 76.4759 74.8443 76.669 74.6527C76.8621 74.4611 76.9394 73.8383 76.9394 72.7365C76.9394 71.6826 76.8621 71.012 76.669 70.8204C76.4759 70.6287 75.8579 70.5329 74.7764 70.5329C73.6949 70.5329 73.077 70.6287 72.8838 70.8204C72.6907 71.012 72.6135 71.6347 72.6135 72.7365C72.6135 73.7904 72.6907 74.4132 72.8838 74.6048C73.077 74.8443 73.6949 74.9401 74.7764 74.9401ZM74.7764 75.7066C73.8108 75.7066 73.1156 75.6108 72.768 75.4671C72.3817 75.3234 72.15 75.0359 72.0341 74.6048C71.9569 74.3174 71.9182 73.6946 71.9182 72.7365C71.9182 71.7784 71.9569 71.1557 72.0341 70.8683C72.15 70.4371 72.3817 70.1497 72.768 69.9581C73.1542 69.8144 73.8494 69.7186 74.7764 69.7186C75.742 69.7186 76.3986 69.8144 76.7849 69.9581C77.1711 70.1018 77.4029 70.3892 77.5187 70.8683C77.596 71.1557 77.6346 71.7784 77.6346 72.7365C77.6346 73.6946 77.596 74.3174 77.5187 74.5569C77.4029 74.988 77.1711 75.2755 76.7849 75.4671C76.3986 75.6108 75.742 75.7066 74.7764 75.7066ZM66.4336 72.7365H69.5235C69.7167 72.7365 69.8711 72.6407 69.987 72.497C70.1029 72.3054 70.1801 72.0659 70.1801 71.6826C70.1801 71.2994 70.1415 71.0599 70.0257 70.8683C69.9098 70.6767 69.7553 70.6287 69.5235 70.6287H66.4722V72.7365H66.4336ZM65.7384 75.6108V69.8623H69.5235C69.9484 69.8623 70.2574 70.006 70.4891 70.3413C70.7209 70.6287 70.8368 71.1078 70.8368 71.7305C70.8368 72.3533 70.7209 72.8323 70.4891 73.1198C70.2574 73.4072 69.9098 73.5509 69.4849 73.5509H66.395V75.6587H65.7384V75.6108ZM59.2495 69.8623H64.6569V75.6108H63.9616V70.6287H59.9447V75.6108H59.2495V69.8623ZM50.6749 69H52.7606V69.7665H50.6749V69ZM54.6146 69.8623H53.6104L49.6321 74.9401V69.8623H48.9368V75.6108H49.9797L53.958 70.5808V75.6108H54.6532V69.8623H54.6146ZM41.7141 72.7365V74.8443H44.7654C44.9585 74.8443 45.113 74.7485 45.2289 74.6048C45.3448 74.4132 45.3834 74.1737 45.3834 73.7904C45.3834 73.4072 45.3448 73.1677 45.2289 72.9761C45.113 72.8323 44.9585 72.7365 44.7654 72.7365H41.7141ZM41.0189 69.8623H41.7141V71.9701H44.8041C45.2289 71.9701 45.5379 72.1138 45.7697 72.4012C46.0014 72.6886 46.1559 73.1677 46.1559 73.7904C46.1559 74.4132 46.04 74.8922 45.8083 75.1796C45.5765 75.4671 45.2289 75.6108 44.8041 75.6108H41.0575V69.8623H41.0189ZM47.7395 75.6108H47.0443V69.8623H47.7395V75.6108ZM34.4141 69.8623H35.1094V72.3054H39.1263V69.8623H39.8215V75.6108H39.1263V73.0719H35.1094V75.6108H34.4141V69.8623ZM32.1739 69.8623L29.8951 72.2575H29.4316V69.8623H28.7364V72.2575H28.2729L25.9941 69.8623H24.9512L27.6549 72.6407L24.6036 75.6108H25.6851L28.2729 73.024H28.7364V75.6108H29.4316V73.024H29.8951L32.4829 75.6108H33.5644L30.5517 72.6407L33.2554 69.8623H32.1739ZM19.428 69.8623H23.8697V70.6287H20.1232V72.3054H23.7539V73.0719H20.1232V74.8443H23.8697V75.6108H19.428V69.8623ZM17.5354 70.6287H14.2523V71.7784C14.2523 72.2096 14.2137 72.7365 14.1751 73.3593C14.1365 73.982 14.0592 74.4611 13.982 74.8443H17.574V70.6287H17.5354ZM13.5185 71.7784V69.8623H18.192V74.8443H18.5396V77H17.883V75.6108H13.4798V77H12.8232V74.8443H13.1708C13.2481 74.4611 13.3253 73.982 13.4026 73.3114C13.5185 72.6886 13.5185 72.1617 13.5185 71.7784ZM10.5058 73.5509L9.23118 70.5329H9.03806L7.76346 73.5509H10.5058ZM9.69467 69.8623L12.128 75.6587H11.3555L10.8148 74.3653H7.49309L6.95235 75.6587H6.17987L8.61319 69.8623H9.69467ZM0 69.8623H0.695234V72.3054H4.71215V69.8623H5.40739V75.6108H4.71215V73.0719H0.695234V75.6108H0V69.8623Z"
        fill={textColor || "#2B2A29"}
      />
    </svg>
  );
};
