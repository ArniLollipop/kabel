import { FC, SVGProps } from 'react';

interface ServicesIconsProps extends SVGProps<SVGSVGElement> {
  className?: string;
  textColor?: string;
}

export const ServicesDetailsIcon: FC<ServicesIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 13L7 7L1 1"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ServicesDeleteIcon: FC<ServicesIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6L6 18"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ServicesBackIcon: FC<ServicesIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 9.93896C0 10.3208 0.145996 10.6465 0.449219 10.9385L9.20898 19.5073C9.44482 19.7544 9.75928 19.8779 10.1187 19.8779C10.8486 19.8779 11.4214 19.3164 11.4214 18.5752C11.4214 18.2158 11.2754 17.8901 11.0283 17.6431L3.1333 9.93896L11.0283 2.23486C11.2754 1.97656 11.4214 1.65088 11.4214 1.2915C11.4214 0.561523 10.8486 0 10.1187 0C9.75928 0 9.44482 0.123535 9.20898 0.370605L0.449219 8.93945C0.145996 9.23145 0.0112305 9.55713 0 9.93896Z"
        fill="#00ABC2"
      />
    </svg>
  );
};

export const ServicesArticleIcon1: FC<ServicesIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg
      className={className}
      width="37"
      height="45"
      viewBox="0 0 37 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6864 18.2C28.1795 17.2782 27.4343 16.5095 26.5288 15.9741C25.6233 15.4387 24.5906 15.1562 23.5386 15.1562H21.4375V10.75H27.3125C29.8436 10.7471 32.2702 9.74039 34.06 7.95062C35.8498 6.16086 36.8565 3.73423 36.8594 1.20312C36.8594 1.00836 36.782 0.821567 36.6443 0.683846C36.5066 0.546124 36.3198 0.468752 36.125 0.46875H0.875C0.680232 0.468752 0.493442 0.546124 0.355721 0.683846C0.217999 0.821567 0.140627 1.00836 0.140625 1.20312C0.14349 3.73423 1.15024 6.16086 2.94 7.95062C4.72977 9.74039 7.15639 10.7471 9.6875 10.75H15.5625V15.1562H13.4614C12.4094 15.1562 11.3767 15.4387 10.4712 15.9741C9.56569 16.5095 8.82054 17.2782 8.31359 18.2L8.07061 18.6418C3.8376 26.3508 1.61545 35.0022 1.60938 43.7969C1.60938 43.9916 1.68675 44.1784 1.82447 44.3162C1.96219 44.4539 2.14898 44.5312 2.34375 44.5312H34.6562C34.851 44.5312 35.0378 44.4539 35.1755 44.3162C35.3133 44.1784 35.3906 43.9916 35.3906 43.7969C35.3846 35.0022 33.1624 26.3508 28.9294 18.6418L28.6864 18.2ZM1.64245 1.9375H35.3575C35.1719 3.9436 34.2444 5.80823 32.7564 7.16649C31.2684 8.52474 29.3272 9.27886 27.3125 9.28125H9.6875C7.67283 9.27886 5.73156 8.52474 4.2436 7.16649C2.75564 5.80823 1.82808 3.9436 1.64245 1.9375ZM17.0312 10.75H19.9688V15.1562H17.0312V10.75ZM3.0835 43.0625C3.20956 34.7648 5.36351 26.6239 9.35756 19.3496L9.60055 18.9078C9.98076 18.2165 10.5396 17.6399 11.2188 17.2384C11.8979 16.8368 12.6724 16.625 13.4614 16.625H23.5386C24.3276 16.625 25.1021 16.8368 25.7812 17.2384C26.4604 17.6399 27.0192 18.2165 27.3995 18.9078L27.6424 19.3496C31.6365 26.6239 33.7904 34.7648 33.9165 43.0625H3.0835Z"
        fill={textColor}
      />
      <path
        d="M18.5 18.8281C16.3213 18.8281 14.1916 19.4742 12.3801 20.6846C10.5685 21.895 9.15664 23.6154 8.32289 25.6283C7.48915 27.6411 7.271 29.856 7.69604 31.9928C8.12108 34.1296 9.17022 36.0924 10.7108 37.633C12.2513 39.1735 14.2141 40.2227 16.351 40.6477C18.4878 41.0728 20.7027 40.8546 22.7155 40.0209C24.7283 39.1871 26.4488 37.7752 27.6592 35.9637C28.8696 34.1522 29.5156 32.0224 29.5156 29.8438C29.5123 26.9232 28.3507 24.1233 26.2856 22.0582C24.2205 19.9931 21.4205 18.8314 18.5 18.8281ZM23.8935 37.7167L23.1751 36.4724L21.9031 37.2068L22.6229 38.4536C21.5598 38.9649 20.4106 39.2732 19.2344 39.3627V37.9219H17.7656V39.3627C16.5894 39.2732 15.4402 38.9649 14.3771 38.4536L15.0969 37.2068L13.825 36.4724L13.1066 37.7167C12.1352 37.049 11.2947 36.2086 10.627 35.2372L11.8713 34.5188L11.1369 33.2469L9.89022 33.9667C9.37887 32.9036 9.07054 31.7544 8.9811 30.5781H10.4219V29.1094H8.9811C9.07054 27.9331 9.37887 26.7839 9.89022 25.7208L11.1369 26.4406L11.8713 25.1687L10.627 24.4503C11.2947 23.479 12.1352 22.6385 13.1066 21.9708L13.825 23.2151L15.0969 22.4807L14.3771 21.2339C15.4402 20.7226 16.5894 20.4143 17.7656 20.3248V21.7656H19.2344V20.3248C20.4106 20.4143 21.5598 20.7226 22.6229 21.2339L21.9031 22.4807L23.1751 23.2151L23.8935 21.9708C24.8648 22.6385 25.7053 23.4789 26.373 24.4503L25.1287 25.1687L25.8631 26.4406L27.1098 25.7208C27.6211 26.7839 27.9295 27.9331 28.0189 29.1094H26.5781V30.5781H28.0189C27.9295 31.7544 27.6211 32.9036 27.1098 33.9667L25.8631 33.2469L25.1287 34.5188L26.373 35.2372C25.7053 36.2085 24.8648 37.049 23.8935 37.7167Z"
        fill={textColor}
      />
      <path
        d="M19.2344 27.767V23.9688H17.7656V27.767C17.2756 27.9402 16.8627 28.2811 16.5997 28.7293C16.3367 29.1776 16.2407 29.7044 16.3286 30.2166C16.4165 30.7289 16.6826 31.1935 17.08 31.5285C17.4773 31.8635 17.9803 32.0472 18.5 32.0472C19.0197 32.0472 19.5227 31.8635 19.92 31.5285C20.3174 31.1935 20.5835 30.7289 20.6714 30.2166C20.7593 29.7044 20.6633 29.1776 20.4003 28.7293C20.1373 28.2811 19.7244 27.9402 19.2344 27.767ZM18.5 30.5781C18.3548 30.5781 18.2128 30.5351 18.092 30.4544C17.9712 30.3737 17.8771 30.259 17.8215 30.1248C17.7659 29.9906 17.7514 29.8429 17.7797 29.7005C17.8081 29.558 17.878 29.4272 17.9807 29.3245C18.0834 29.2218 18.2143 29.1518 18.3567 29.1235C18.4992 29.0951 18.6468 29.1097 18.781 29.1653C18.9152 29.2209 19.0299 29.315 19.1106 29.4358C19.1913 29.5565 19.2344 29.6985 19.2344 29.8437C19.2342 30.0384 19.1567 30.2251 19.019 30.3628C18.8814 30.5005 18.6947 30.5779 18.5 30.5781Z"
        fill={textColor}
      />
    </svg>
  );
};
export const ServicesArticleIcon2: FC<ServicesIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg
      className={className}
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23.5" cy="23.5" r="22.68" stroke={textColor} strokeWidth="1.64" />
      <circle cx="23.5" cy="23.5" r="5.055" stroke={textColor} strokeWidth="1.64" />
      <circle cx="37.7681" cy="23.5" r="5.055" stroke={textColor} strokeWidth="1.64" />
      <circle cx="9.23193" cy="23.5" r="5.055" stroke={textColor} strokeWidth="1.64" />
      <circle cx="23.5" cy="10.0713" r="5.055" stroke={textColor} strokeWidth="1.64" />
      <path
        d="M28.555 36.9287C28.555 39.7205 26.2918 41.9837 23.5 41.9837C20.7082 41.9837 18.445 39.7205 18.445 36.9287C18.445 34.1369 20.7082 31.8737 23.5 31.8737C26.2918 31.8737 28.555 34.1369 28.555 36.9287Z"
        stroke={textColor}
        strokeWidth="1.64"
      />
      <path
        d="M18.4837 33.5713C18.4837 36.3631 16.2205 38.6263 13.4287 38.6263C10.6369 38.6263 8.37371 36.3631 8.37371 33.5713C8.37371 30.7795 10.6369 28.5163 13.4287 28.5163C16.2205 28.5163 18.4837 30.7795 18.4837 33.5713Z"
        stroke={textColor}
        strokeWidth="1.64"
      />
      <circle cx="33.5713" cy="33.5713" r="5.055" stroke={textColor} strokeWidth="1.64" />
      <path
        d="M38.6263 13.4287C38.6263 16.2205 36.3631 18.4837 33.5713 18.4837C30.7795 18.4837 28.5163 16.2205 28.5163 13.4287C28.5163 10.6369 30.7795 8.37371 33.5713 8.37371C36.3631 8.37371 38.6263 10.6369 38.6263 13.4287Z"
        stroke={textColor}
        strokeWidth="1.64"
      />
      <circle cx="13.4287" cy="13.4287" r="5.055" stroke={textColor} strokeWidth="1.64" />
    </svg>
  );
};
export const ServicesArticleIcon3: FC<ServicesIconsProps> = (props) => {
  const { className, textColor } = props;

  return (
    <svg
      className={className}
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1906_33714)">
        <mask
          id="mask0_1906_33714"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="47"
          height="47"
        >
          <path d="M0 3.8147e-06H47V47H0V3.8147e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1906_33714)">
          <path
            d="M30.5588 6.41003C36.0773 12.9994 35.2091 22.815 28.6198 28.3335C22.0303 33.852 12.2149 32.9839 6.69638 26.3945C1.17775 19.805 2.04591 9.98958 8.63533 4.47108C15.2246 -1.04755 25.0403 -0.179389 30.5588 6.41003Z"
            stroke={textColor}
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.38 9.07217C31.4283 13.906 30.7914 21.1063 25.9575 25.1546C21.1238 29.2029 13.9233 28.566 9.87525 23.7321C5.82694 18.8984 6.4637 11.698 11.2976 7.64972C16.1313 3.60153 23.3317 4.2383 27.38 9.07217Z"
            stroke={textColor}
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.3317 23.7852L34.7441 26.6657C35.1224 27.1173 35.0629 27.7898 34.6112 28.1681L27.405 34.2032C26.9535 34.5815 26.2809 34.5219 25.9027 34.0703L23.4902 31.1898"
            stroke={textColor}
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.8132 28.8365L43.2216 40.0713C44.3569 41.4281 44.1786 43.448 42.8232 44.5833L42.1244 45.1688C40.7677 46.3041 38.7478 46.1259 37.6125 44.7691L28.2041 33.5343"
            stroke={textColor}
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.4795 11.2278H24.6916V21.5771"
            stroke={textColor}
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.549 18.7953C18.549 20.4481 17.2091 21.7881 15.5562 21.7881C13.9033 21.7881 12.5635 20.4481 12.5635 18.7953V14.0091C12.5635 12.3563 13.9033 11.0163 15.5562 11.0163C17.2091 11.0163 18.549 12.3563 18.549 14.0091V18.7953Z"
            stroke={textColor}
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1906_33714">
          <rect width="47" height="47" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};