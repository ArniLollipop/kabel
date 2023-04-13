import { FC, SVGProps } from "react";

interface ContactsIconsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const IconContactsClock: FC<ContactsIconsProps> = (props) => {
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
        d="M17.4993 32.0834C25.5535 32.0834 32.0827 25.5542 32.0827 17.5001C32.0827 9.44593 25.5535 2.91675 17.4993 2.91675C9.4452 2.91675 2.91602 9.44593 2.91602 17.5001C2.91602 25.5542 9.4452 32.0834 17.4993 32.0834Z"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 8.75V17.5L23.3333 20.4167"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconContactsGeo: FC<ContactsIconsProps> = (props) => {
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
        d="M30.625 14.5833C30.625 24.7916 17.5 33.5416 17.5 33.5416C17.5 33.5416 4.375 24.7916 4.375 14.5833C4.375 11.1023 5.75781 7.76389 8.21922 5.30247C10.6806 2.84106 14.019 1.45825 17.5 1.45825C20.981 1.45825 24.3194 2.84106 26.7808 5.30247C29.2422 7.76389 30.625 11.1023 30.625 14.5833Z"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 18.9583C19.9162 18.9583 21.875 16.9995 21.875 14.5833C21.875 12.167 19.9162 10.2083 17.5 10.2083C15.0838 10.2083 13.125 12.167 13.125 14.5833C13.125 16.9995 15.0838 18.9583 17.5 18.9583Z"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconContactsMail: FC<ContactsIconsProps> = (props) => {
  const { className, width, height, color } = props;

  return (
    <svg
      width={width || "35"}
      height={height || "35"}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.83268 5.83325H29.166C30.7702 5.83325 32.0827 7.14575 32.0827 8.74992V26.2499C32.0827 27.8541 30.7702 29.1666 29.166 29.1666H5.83268C4.22852 29.1666 2.91602 27.8541 2.91602 26.2499V8.74992C2.91602 7.14575 4.22852 5.83325 5.83268 5.83325Z"
        stroke={color || "#39424B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.0827 8.75L17.4993 18.9583L2.91602 8.75"
        stroke={color || "#39424B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconContactsPhone: FC<ContactsIconsProps> = (props) => {
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
        d="M21.9482 7.29159C23.3726 7.56949 24.6816 8.26613 25.7078 9.29232C26.734 10.3185 27.4307 11.6276 27.7086 13.052M21.9482 1.45825C24.9075 1.78701 27.6672 3.11226 29.7739 5.21639C31.8807 7.32052 33.2094 10.0785 33.5419 13.0374M32.0836 24.6749V29.0499C32.0852 29.4561 32.002 29.8581 31.8393 30.2302C31.6766 30.6024 31.438 30.9364 31.1387 31.211C30.8394 31.4855 30.4861 31.6946 30.1013 31.8247C29.7166 31.9548 29.3089 32.0031 28.9044 31.9666C24.4169 31.479 20.1063 29.9455 16.319 27.4895C12.7954 25.2505 9.80803 22.2631 7.569 18.7395C5.10438 14.935 3.5706 10.6035 3.09191 6.09575C3.05547 5.69247 3.1034 5.28603 3.23264 4.90229C3.36189 4.51855 3.56962 4.16592 3.84262 3.86687C4.11561 3.56781 4.44788 3.32887 4.81828 3.16526C5.18867 3.00166 5.58908 2.91697 5.994 2.91659H10.369C11.0767 2.90962 11.7629 3.16024 12.2995 3.62174C12.8361 4.08323 13.1866 4.72411 13.2857 5.42492C13.4703 6.82502 13.8128 8.19973 14.3065 9.52284C14.5027 10.0448 14.5452 10.6121 14.4289 11.1575C14.3126 11.7028 14.0423 12.2034 13.6502 12.5999L11.7982 14.452C13.8742 18.103 16.8972 21.126 20.5482 23.202L22.4002 21.3499C22.7968 20.9578 23.2973 20.6876 23.8427 20.5713C24.3881 20.455 24.9554 20.4975 25.4773 20.6937C26.8004 21.1874 28.1752 21.5298 29.5753 21.7145C30.2837 21.8144 30.9306 22.1713 31.3931 22.7171C31.8556 23.2629 32.1013 23.9597 32.0836 24.6749Z"
        stroke="#39424B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconContactsTg: FC<ContactsIconsProps> = (props) => {
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
        d="M34.076 2.59886C33.3438 1.98825 32.3374 1.83112 31.4555 2.18967L1.59372 14.3131C0.280132 14.8568 -0.346397 16.3685 0.194276 17.6893C0.47392 18.3725 1.03056 18.9027 1.72393 19.1465L8.16601 21.3986L11.6572 33.0065C11.6643 33.0301 11.6858 33.0445 11.6949 33.0673C11.731 33.1598 11.7838 33.245 11.8504 33.3185C11.8752 33.3481 11.9023 33.3758 11.9312 33.4014C12.0182 33.474 12.1192 33.5277 12.2278 33.559C12.2444 33.5639 12.2555 33.5787 12.2724 33.5826L12.2821 33.5822L12.287 33.5843C12.3427 33.5967 12.3994 33.6028 12.4563 33.6023C12.5307 33.5996 12.6044 33.5867 12.6752 33.5639C12.6889 33.5601 12.7028 33.5611 12.7162 33.5566C12.8372 33.5138 12.9464 33.4433 13.0354 33.3506C13.0458 33.3402 13.0616 33.3383 13.0715 33.3273L18.0943 27.7541L25.4219 33.4599C25.8671 33.8099 26.416 34.0001 26.9811 34C28.2034 33.9998 29.2585 33.1388 29.5104 31.9361L34.9484 5.09C35.1368 4.16135 34.8014 3.20385 34.076 2.59886ZM13.4802 23.6001L12.3015 29.3602L9.84337 21.1848L22.0349 14.8008L13.7064 23.1761C13.5913 23.292 13.5126 23.4395 13.4802 23.6001ZM27.878 31.5989C27.8141 31.9074 27.5952 32.1604 27.3002 32.2667C27.0119 32.3782 26.6864 32.3285 26.4441 32.1357L18.5046 25.9537C18.1609 25.6861 17.6703 25.7296 17.3783 26.0536L13.8855 29.9289L15.0622 24.1844L27.0431 12.1346C27.3687 11.8078 27.3692 11.2774 27.0442 10.9501C26.7871 10.691 26.3925 10.6298 26.0697 10.799L8.79743 19.844L2.26918 17.5621C1.91334 17.4443 1.67133 17.1122 1.66696 16.7355C1.64977 16.3562 1.87306 16.0075 2.2236 15.8664L32.0805 3.74459C32.3924 3.6115 32.7523 3.66725 33.0099 3.88863C33.2662 4.0967 33.384 4.43234 33.3143 4.75611L27.878 31.5989Z"
        fill="#39424B"
      />
    </svg>
  );
};

export const IconContactsWa: FC<ContactsIconsProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7286 11.6437C14.4627 10.963 14.1555 11.0116 13.951 11.0042C13.7464 10.9969 13.5672 11.0005 13.2907 11.0048C13.0567 11.0085 12.6735 11.0665 12.3393 11.3903C12.0048 11.7136 11.0673 12.4911 11.0025 14.1389C10.9381 15.7864 12.1317 17.4236 12.2984 17.6527C12.465 17.8827 14.5777 21.4539 18.0894 22.9227C21.6014 24.391 21.6198 23.9434 22.264 23.9106C22.9089 23.8781 24.3704 23.1745 24.6935 22.4034C25.0166 21.6324 25.0425 20.962 24.9603 20.819C24.8781 20.6765 24.648 20.5839 24.3039 20.4042C23.9594 20.2242 22.2681 19.3524 21.9509 19.2291C21.6336 19.1062 21.4021 19.0422 21.1551 19.3691C20.908 19.695 20.2063 20.4252 19.9936 20.6415C19.78 20.8579 19.5745 20.878 19.23 20.6974C18.8865 20.5178 17.7702 20.1235 16.4758 18.9351C15.4686 18.0106 14.8075 16.8888 14.6159 16.5465C14.4242 16.2041 14.6147 16.0293 14.797 15.8691C14.9605 15.7245 15.1628 15.4904 15.3462 15.3012C15.5285 15.1119 15.5928 14.9748 15.7185 14.7552C15.8438 14.5361 15.7934 14.3385 15.7121 14.1678C15.6307 13.9972 14.9945 12.3243 14.7286 11.6437Z"
        fill="#39424B"
      />
      <path
        d="M6.29341 25.8001L6.98977 26.0786L7.1342 25.7176L6.92232 25.3915L6.29341 25.8001ZM4 31.5336L3.30364 31.2551L2.70307 32.7565L4.23717 32.2451L4 31.5336ZM9.90469 29.5654L10.3378 28.9531L10.0277 28.7338L9.66752 28.8539L9.90469 29.5654ZM30.3167 18C30.3167 25.3419 24.5696 31.25 17.5333 31.25V32.75C25.4456 32.75 31.8167 26.122 31.8167 18H30.3167ZM17.5333 4.75C24.5696 4.75 30.3167 10.6581 30.3167 18H31.8167C31.8167 9.87797 25.4456 3.25 17.5333 3.25V4.75ZM4.75 18C4.75 10.6581 10.4971 4.75 17.5333 4.75V3.25C9.6211 3.25 3.25 9.87797 3.25 18H4.75ZM6.92232 25.3915C5.55145 23.2816 4.75 20.7397 4.75 18H3.25C3.25 21.0356 4.13876 23.8605 5.66451 26.2087L6.92232 25.3915ZM4.69636 31.8122L6.98977 26.0786L5.59706 25.5216L3.30364 31.2551L4.69636 31.8122ZM9.66752 28.8539L3.76283 30.8221L4.23717 32.2451L10.1419 30.2769L9.66752 28.8539ZM17.5333 31.25C14.8654 31.25 12.3887 30.4036 10.3378 28.9531L9.47162 30.1777C11.7647 31.7995 14.5418 32.75 17.5333 32.75V31.25Z"
        fill="#39424B"
      />
    </svg>
  );
};