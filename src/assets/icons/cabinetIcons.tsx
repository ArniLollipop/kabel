import { FC, SVGProps } from 'react';

interface CabinetIconsProps extends SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
}

export const IconCabinetFlag: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor } = props;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1906_33174)">
        <mask
          id="mask0_1906_33174"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <circle cx="12" cy="12" r="12" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1906_33174)">
          <path fillRule="evenodd" clipRule="evenodd" d="M-7 -1H26.3333V24H-7V-1Z" fill="#00ABC2" />
          <path
            d="M15.9963 9.72833C15.9963 7.25232 13.8784 5.24512 11.2657 5.24512C8.65311 5.24512 6.53516 7.25232 6.53516 9.72833C6.53516 12.2043 8.65311 14.2115 11.2657 14.2115C13.8784 14.2115 15.9963 12.2043 15.9963 9.72833Z"
            fill="#FFEC2D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0407 2.57148C10.9962 2.57148 10.785 4.06125 10.7071 4.39478C10.6293 5.14523 11.7077 5.11743 11.5298 4.36699L11.0407 2.56592V2.57148ZM11.4187 17.0134C11.4576 17.0134 11.78 15.5403 11.8856 15.2123C12.0135 14.473 10.935 14.4341 11.0518 15.1901L11.4187 17.0134ZM3.88086 9.69793C3.88086 9.73684 5.43178 10.0481 5.77643 10.1482C6.55467 10.276 6.61026 9.25878 5.80978 9.36995L3.88086 9.70349V9.69793ZM18.9843 9.87581C18.9843 9.8369 17.4167 9.58119 17.0665 9.49225C16.2827 9.39775 16.2771 10.415 17.0665 10.276L18.9843 9.87581ZM5.47069 4.9729C5.4429 5.0007 6.46573 6.15694 6.6714 6.44044C7.20505 6.99632 7.91103 6.21808 7.20505 5.84008L5.47069 4.97846V4.9729ZM17.2054 14.4785C17.2332 14.4507 16.1103 13.3834 15.8769 13.1222C15.2932 12.6108 14.665 13.439 15.3988 13.7614L17.2054 14.4841V14.4785ZM7.81097 3.36083C7.77761 3.37751 8.25568 4.8117 8.3335 5.15079C8.60032 5.85676 9.56757 5.39537 9.06727 4.78946L7.81653 3.36083H7.81097ZM14.6539 16.2796C14.6928 16.2629 14.3204 14.801 14.2704 14.4619C14.0536 13.7392 13.0585 14.1283 13.5088 14.7732L14.6595 16.2741L14.6539 16.2796ZM16.3382 4.36143C16.3049 4.33363 15.0708 5.2842 14.7707 5.4732C14.1759 5.9735 14.9819 6.65168 15.3932 5.99017L16.3382 4.36143ZM6.16555 15.1289C6.19334 15.1567 7.49967 14.2951 7.81097 14.1228C8.43912 13.6669 7.68867 12.9332 7.22729 13.5669L6.17111 15.1289H6.16555ZM4.21995 7.11862C4.20327 7.15197 5.55407 7.93577 5.84869 8.14145C6.54355 8.50277 6.94935 7.55777 6.15443 7.40768L4.21995 7.11862ZM18.3228 12.5885C18.3394 12.5552 17.0442 11.6824 16.7663 11.4601C16.0992 11.0487 15.6267 11.9659 16.4105 12.1661L18.3228 12.5885ZM13.8423 2.97727C13.8034 2.96616 13.0307 4.27804 12.8251 4.56155C12.8254 4.65208 12.8541 4.74022 12.9072 4.81361C12.9602 4.887 13.0348 4.94196 13.1206 4.97077C13.2065 4.99958 13.2992 5.00081 13.3857 4.97427C13.4723 4.94774 13.5484 4.89478 13.6033 4.82281L13.8423 2.97727ZM8.62256 16.5576C8.66147 16.5742 9.52865 15.3124 9.75101 15.04C10.1568 14.3952 9.17289 13.9838 8.98945 14.7287L8.62256 16.5576ZM4.31445 12.7053C4.33113 12.7386 5.87093 12.3717 6.23225 12.3161C6.98826 12.1049 6.56578 11.171 5.89872 11.6046L4.31445 12.7053ZM18.3283 6.99632C18.3172 6.96297 16.7552 7.22424 16.3938 7.25759C15.6156 7.4188 15.9769 8.38048 16.6718 7.99136L18.3283 6.99632Z"
            fill="#FFEC2D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5782 2.66803C12.5393 2.66248 12.0168 4.07998 11.8611 4.39128C11.6332 5.11393 12.6949 5.29181 12.6783 4.52469L12.5838 2.66248L12.5782 2.66803ZM9.88217 16.8931C9.92108 16.9043 10.5492 15.5201 10.7271 15.2144C11.0051 14.514 9.95999 14.2694 9.92108 15.0309L9.87661 16.8931H9.88217ZM9.34296 2.80701C9.30405 2.81812 9.44858 4.31901 9.44858 4.66366C9.55419 5.40299 10.5937 5.14728 10.2491 4.45799L9.34296 2.80701ZM13.123 16.8098C13.1619 16.8042 13.123 15.2978 13.1508 14.9531C13.1007 14.2027 12.039 14.3917 12.3392 15.1032L13.1174 16.8098H13.123ZM6.66359 4.05219C6.63024 4.07442 7.36956 5.40299 7.50854 5.71985C7.90877 6.37023 8.7704 5.75876 8.16448 5.24178L6.66359 4.05219ZM15.8246 15.609C15.8579 15.5868 15.2131 14.2082 15.1019 13.8858C14.7517 13.2132 13.8512 13.7691 14.4126 14.3194L15.8246 15.609ZM4.70687 5.91996C4.68464 5.95332 5.87979 6.94279 6.12994 7.1985C6.74697 7.66544 7.31953 6.79826 6.56353 6.52588L4.70687 5.91996ZM17.7257 13.6857C17.7479 13.6523 16.6306 12.585 16.3971 12.3182C15.819 11.8123 15.1853 12.6406 15.9191 12.963L17.7257 13.6857ZM3.85081 8.24912C3.83969 8.28804 5.31279 8.84948 5.6352 9.01069C6.38009 9.26084 6.61912 8.2658 5.80753 8.24356L3.85081 8.24912ZM18.7152 11.4621C18.7319 11.4288 17.3032 10.7728 16.9919 10.5894C16.2693 10.2892 15.9524 11.2676 16.7585 11.3454L18.7152 11.4621ZM3.80078 11.1119C3.80634 11.1453 5.39617 11.1231 5.7575 11.1508C6.54685 11.1119 6.35785 10.1058 5.60185 10.3782L3.80078 11.1119ZM18.8208 8.61045C18.8208 8.57154 17.231 8.48815 16.8752 8.43812C16.0803 8.42701 16.197 9.44428 16.9697 9.21636L18.8208 8.60489V8.61045ZM5.1627 14.0804C5.18494 14.1137 6.608 13.4355 6.94153 13.3077C7.63083 12.9464 6.99712 12.1181 6.44679 12.6795L5.1627 14.0804ZM17.52 5.61423C17.4978 5.58087 16.0358 6.16455 15.6856 6.27017C14.9685 6.58703 15.5411 7.45421 16.1303 6.93168L17.52 5.61423ZM7.47518 16.0482C7.50854 16.0649 8.52581 14.9086 8.78151 14.664C9.26513 14.0692 8.3368 13.5523 8.06442 14.2749L7.47518 16.0482ZM15.2409 3.60748C15.2131 3.58525 14.1125 4.66922 13.8401 4.89713C13.3175 5.45858 14.207 6.0367 14.5294 5.33628L15.2353 3.60748H15.2409Z"
            fill="#FFEC2D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.03091 12.711C4.11583 12.9977 4.12796 14.6031 5.83852 16.1512C7.53695 17.6879 10.4485 18.0319 10.4485 18.0319C10.4485 18.0319 10.4607 18.2498 10.2544 18.2612C10.0482 18.2842 9.05341 18.0892 8.55601 17.9402C8.07074 17.8025 7.63401 17.5503 7.58548 17.5617C7.52482 17.5847 7.42777 17.7452 7.28219 17.7223C7.13661 17.6993 6.43297 17.0113 6.11755 16.8278C5.48666 16.3124 4.92811 15.7227 4.45552 15.0733C4.11583 14.5573 4.03091 14.2133 3.92173 14.2133C3.81254 14.2133 3.41219 14.4655 3.41219 14.4655C3.41219 14.4655 3.04824 13.9495 2.73282 13.1239C2.40527 12.2982 2.44166 11.8166 2.51445 11.7822C2.59938 11.7478 2.59937 12.3899 2.84201 12.9748C3.08464 13.5711 3.42433 13.7546 3.42433 13.7546C3.42433 13.7546 3.20596 13.4449 3.03611 12.6766C2.86627 11.9083 2.79348 11.1629 2.9148 10.9336C3.03611 10.7042 3.1453 10.6354 3.15743 10.6469C3.18169 10.6698 2.95119 11.0024 3.1089 11.8854C3.26661 12.7684 3.69122 13.5138 3.78828 13.4793C3.88533 13.4449 3.72762 13.2615 3.66696 12.7454C3.6063 12.2294 3.72762 11.9083 3.86107 11.8625C3.92173 11.8166 4.01878 12.4358 4.03091 12.711ZM2.84201 14.1789C2.51445 13.8922 2.00492 12.8945 1.89574 12.9404C1.77442 12.9977 2.72069 14.4311 2.74495 14.5458C2.76922 14.6834 2.97546 15.0733 2.81774 15.016C2.66003 14.9586 1.53179 13.8348 1.66524 14.0527C1.79869 14.2706 2.6479 15.2568 2.59937 15.3141C2.55085 15.3715 1.89574 14.7637 1.87147 14.844C1.85934 14.9128 2.51445 15.5091 2.50232 15.5779C2.49019 15.6467 2.07771 15.1995 2.07771 15.2912C2.07771 15.3829 2.50232 15.8302 2.50232 15.899C2.50232 15.9678 2.13837 15.5779 2.25969 15.7843C2.36887 16.0136 2.6843 16.2086 2.67216 16.2774C2.66003 16.3462 2.40527 16.1856 2.40527 16.22C2.40527 16.2544 2.8784 16.415 2.98759 16.5411C3.1089 16.6673 3.88533 17.5159 4.46765 17.9402C5.04997 18.3644 6.72413 19.1098 6.84545 19.1098C6.95463 19.1098 7.12448 18.8805 7.08808 18.7887C7.05169 18.697 5.41391 18.1695 4.96504 17.7796C4.50404 17.3897 3.38793 16.4494 3.29088 16.4035C3.20596 16.3462 2.95119 16.3691 2.95119 16.3118C2.95119 16.2544 3.27875 16.3462 3.25448 16.3118C3.24235 16.2774 2.80561 16.0939 2.81774 16.0595C2.84201 16.0251 3.12104 16.1283 3.12104 16.0939C3.12104 16.0595 2.61151 15.7958 2.63577 15.7384C2.6479 15.6811 3.01185 15.899 3.01185 15.8531C3.01185 15.8302 2.52658 15.5091 2.53871 15.4517C2.55085 15.3944 2.9148 15.704 2.90266 15.6352C2.89053 15.5664 2.61151 15.1765 2.61151 15.1306C2.61151 15.0733 3.04824 15.5205 3.09677 15.4288C3.12103 15.3485 2.93906 14.6031 2.95119 14.5917C2.96333 14.5802 3.27875 14.7522 3.32727 14.649C3.38793 14.5343 3.1089 14.3853 2.84201 14.1789ZM8.43469 19.8208C8.20419 19.8552 8.09501 19.7749 8.22846 19.5914C8.41043 19.5914 8.8957 19.4424 9.06554 19.3736C9.23538 19.3048 9.41736 19.213 9.56294 19.0869C9.70852 18.9378 9.80557 19.1672 9.72065 19.2933C9.65999 19.3736 9.38096 19.5226 9.17473 19.6029C8.87143 19.6947 8.60454 19.8323 8.43469 19.8208ZM9.95115 19.236C9.79344 19.0754 9.92689 18.9607 10.1574 18.8346C10.4971 18.6626 10.4 18.4218 10.8368 18.2268C11.0309 18.1122 13.7484 17.0801 14.634 16.5297C15.5196 15.9792 18.0066 14.2018 18.6738 12.9748C19.3289 11.7592 19.0135 11.6675 19.1105 11.6216C19.1955 11.5643 19.2925 11.7936 19.2804 12.0689C19.2561 12.3326 19.0378 13.1353 19.1105 13.2156C19.1833 13.2959 20.1053 12.5849 20.4935 11.7248C20.8818 10.8648 21.1729 9.97034 21.3549 9.97034C21.549 9.97034 21.0395 11.4382 20.7119 12.0115C20.3965 12.5849 20.0204 12.8716 20.1053 12.9977C20.2024 13.1124 21.1487 12.367 21.4762 11.8166C21.7916 11.2547 22.0949 10.7616 22.1556 10.8648C22.0591 11.5365 21.7789 12.1729 21.3428 12.711C20.8332 13.2615 20.2267 13.6628 20.3237 13.7431C20.4086 13.8348 21.1001 13.9266 21.8159 13.4679C22.5438 12.9977 22.6166 12.3211 22.7015 12.3555C22.7986 12.3899 22.6166 13.3188 21.9251 13.8922C21.2336 14.4655 20.3237 14.5229 20.348 14.649C20.3965 14.7637 22.3254 14.1215 22.289 14.2706C22.2526 14.4082 19.7899 15.3256 19.7656 15.4173C19.7656 15.4861 20.1903 15.5091 20.8575 15.36C21.5126 15.2224 22.1435 14.7293 22.2284 14.844C22.2526 15.0045 21.7552 15.3944 21.0031 15.5779C20.2388 15.7614 19.8627 16.0022 19.8384 16.0595C19.8263 16.1168 21.1972 15.899 21.1972 15.9678C21.1972 16.0366 19.4017 16.3691 19.3896 16.4609C19.3653 16.5411 21.088 16.1283 21.0637 16.2315C21.0152 16.3118 18.7223 16.954 18.7466 16.9884C18.7587 17.0342 20.6634 16.5985 20.627 16.6673C20.5785 16.7475 17.4242 17.5847 17.4 17.642C17.3757 17.6879 20.1903 17.0457 20.166 17.103C20.1417 17.1604 18.7102 17.4929 18.7102 17.5273C18.7102 17.5617 19.8627 17.3553 19.8384 17.4127C19.8263 17.4585 16.9268 18.158 16.8662 18.2612C16.8055 18.3759 18.3705 17.9746 18.3462 18.181C18.322 18.3874 14.9858 19.4424 14.9736 19.2474C14.9494 19.0525 16.9996 18.5594 16.9875 18.5021C16.9632 18.4447 15.8107 18.6167 15.7865 18.5135C15.7743 18.3988 16.5508 18.1695 16.4901 18.1236C16.4294 18.0663 15.8471 18.2842 15.8957 18.158C15.9563 18.0319 17.0603 17.5503 17.036 17.5159C17.0239 17.4815 16.6357 17.6305 16.6721 17.5159C16.7206 17.3897 19.062 16.7475 19.0256 16.6673C18.9892 16.5985 17.9459 16.8278 17.8489 16.8508C17.8125 16.7819 19.3046 16.2544 19.2804 16.1627C19.2319 16.0824 18.4797 16.4723 18.4312 16.3691C18.4069 16.2544 19.7535 15.7614 19.6686 15.6811C19.5837 15.6008 18.9771 15.8875 18.8922 15.8072C18.8073 15.727 20.166 14.844 19.9598 14.821C19.7535 14.8096 19.4988 15.0962 19.4745 14.9128C19.4988 14.6834 20.5299 14.305 20.2994 14.1215C19.9355 14.0183 18.7102 14.2018 18.2007 14.4885C17.6911 14.7752 15.9927 16.3691 15.5802 16.6214C15.1678 16.8622 13.7605 17.4241 13.4936 17.5388C13.0811 17.6764 13.0083 17.8828 12.5837 18.0892C11.8194 18.2842 11.8316 18.5021 11.4676 18.6282C11.3342 18.6626 9.96328 19.2818 9.95115 19.236ZM8.03435 20.0387C7.80385 20.1533 7.59761 20.4286 7.73106 20.5432C7.80385 20.6809 8.03435 20.2336 8.21633 20.2566L9.18686 20.3024C9.70852 20.3368 9.96328 20.1992 10.2544 20.2222C10.5456 20.2451 11.1886 20.0731 11.4919 20.0731C11.7952 20.0731 11.8558 20.1075 11.8801 19.9813C11.9165 19.8667 10.9338 19.9469 10.4971 19.9355C10.0603 19.9125 9.51441 20.0157 9.18686 20.0157C8.88357 20.0043 8.36191 19.9125 8.03435 20.0387Z"
            fill="#FFEC2D"
          />
          <path
            d="M9.4906 19.9011C9.4906 19.8061 9.39826 19.7291 9.28436 19.7291C9.17046 19.7291 9.07812 19.8061 9.07812 19.9011C9.07812 19.9961 9.17046 20.0731 9.28436 20.0731C9.39826 20.0731 9.4906 19.9961 9.4906 19.9011Z"
            fill="#FFEC2D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3314 19.5678C14.5376 19.5334 15.0957 19.7169 15.4839 19.7972C16.1875 20.0609 17.4977 19.9348 17.4977 20.0609C17.4977 20.1871 17.4128 20.3362 17.1095 20.3591C16.8062 20.382 16.0419 20.2444 16.0662 20.2444C16.0905 20.2444 16.6728 20.5082 16.5029 20.577C16.3331 20.6458 15.8357 20.4279 15.7508 20.4852C15.6659 20.5426 16.2118 20.6458 16.1147 20.6802C16.0419 20.7146 15.6659 20.6343 15.5445 20.6458C15.4232 20.6687 15.6416 20.7949 15.496 20.8407C15.3504 20.8981 15.1078 20.7719 15.0107 20.8063C14.9016 20.8407 15.2291 21.0357 15.0835 21.0586C14.938 21.0815 14.5983 20.9669 14.4042 20.9439C14.2101 20.9439 14.5861 21.1274 14.4648 21.1503C14.3435 21.1618 14.0038 21.0013 13.9189 21.0013C13.834 21.0013 13.9189 21.2306 13.7976 21.2306C13.6763 21.2306 13.5307 21.0357 13.4579 21.0357C13.3851 21.0357 13.4579 21.265 13.3366 21.265C13.2153 21.265 13.1667 21.0242 13.0697 21.0357C12.9484 21.0586 13.0697 21.3453 12.8998 21.3224C12.7421 21.3109 12.7179 21.0242 12.5844 21.0357C12.4631 21.0586 12.6087 21.3224 12.4874 21.3224C12.366 21.3224 12.3418 21.0586 12.2205 21.0357C12.0992 21.0242 12.1477 21.288 12.0749 21.288C12.0021 21.288 11.9293 21.0357 11.8808 21.0357C11.8444 21.0357 11.8808 21.2879 11.7352 21.265C11.5896 21.2421 11.5896 20.9898 11.5532 21.0013C11.5047 21.0242 11.5047 21.2077 11.4077 21.2077C11.3106 21.2077 11.2985 21.0242 11.2621 21.0471C11.2135 21.0586 11.068 21.2879 10.9709 21.2535C10.8617 21.2191 10.9952 21.0357 10.9466 21.0357C10.8981 21.0357 10.7768 21.1618 10.704 21.1503C10.6312 21.1389 10.704 20.9898 10.6798 20.9898C10.6555 20.9898 10.4735 21.0815 10.3886 21.0815C10.3037 21.0815 10.0732 21.1962 10.0125 21.093C9.95185 20.9783 10.1702 20.9783 10.2188 20.8751C10.2551 20.7719 10.0974 20.4623 10.2673 20.3591C10.425 20.2444 10.9466 20.5082 11.7231 20.3247C13.1303 19.9692 14.2222 19.5564 14.3314 19.5678Z"
            fill="#FFEC2D"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1906_33174">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const IconCabinetProfile: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke={fillColor || '#00ABC2'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={fillColor || '#00ABC2'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCabinetOrder: FC<CabinetIconsProps> = (props) => {
  const { className, fillColor = '#00ABC2' } = props;

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
  const { className, fillColor = '#00ABC2' } = props;

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
  const { className, fillColor = '#00ABC2' } = props;

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
  const { className, fillColor = '#00ABC2' } = props;

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
  const { className, fillColor = '#00ABC2' } = props;

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
  const { className, fillColor = '#00ABC2' } = props;

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
  const { className, fillColor = '#39424B' } = props;

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
