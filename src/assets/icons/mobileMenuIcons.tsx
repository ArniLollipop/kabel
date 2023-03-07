import { FC, SVGProps } from "react";

interface mobileMenuIconsProps extends SVGProps<SVGSVGElement> {
  className?: string;
  textColor?: string | undefined;
}

export const IconMobileMenuHome: FC<mobileMenuIconsProps> = (props) => {
  const { className, textColor = "#4F4F4F" } = props;

  return (
    <svg
      width="29"
      height="26"
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.191406 11.9414C0.191406 12.5508 0.648438 13.0664 1.39844 13.0664C1.76172 13.0664 2.07812 12.8789 2.35938 12.6328L3.70703 11.5078V22.418C3.70703 24.1523 4.75 25.1719 6.53125 25.1719H22.3867C24.168 25.1719 25.2109 24.1523 25.2109 22.418V11.4375L26.6406 12.6328C26.9219 12.8789 27.2383 13.0664 27.6016 13.0664C28.2812 13.0664 28.7969 12.6445 28.7969 11.9766C28.7969 11.5781 28.6445 11.2617 28.3398 11.0156L25.2109 8.37891V3.39844C25.2109 2.87109 24.8711 2.53125 24.3438 2.53125H22.7617C22.2461 2.53125 21.8945 2.87109 21.8945 3.39844V5.58984L16.1523 0.761719C15.1445 -0.0820312 13.8789 -0.0820312 12.8594 0.761719L0.648438 11.0156C0.34375 11.2734 0.191406 11.6133 0.191406 11.9414ZM17.8633 15.1875C17.8633 14.6367 17.5117 14.2852 16.9609 14.2852H12.0273C11.4883 14.2852 11.1133 14.6367 11.1133 15.1875V22.875H7.14062C6.40234 22.875 6.00391 22.4648 6.00391 21.7266V9.57422L14.0078 2.87109C14.3242 2.58984 14.6875 2.58984 15.0039 2.87109L22.9141 9.50391V21.7266C22.9141 22.4648 22.5156 22.875 21.7773 22.875H17.8633V15.1875Z"
        fill={textColor}
      />
    </svg>
  );
};

export const IconMobileMenuCard: FC<mobileMenuIconsProps> = (props) => {
  const { className, textColor = "#4F4F4F" } = props;

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="8.00016"
        cy="25.3327"
        r="2.66667"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="22.6667"
        cy="25.3327"
        r="2.66667"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6668 22.6667H8.00016V4H5.3335"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.66602L26.6667 7.99935L25.3333 17.3327H8"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconMobileMenuProduct: FC<mobileMenuIconsProps> = (props) => {
  const { className, textColor = "#4F4F4F" } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="1" width="8" height="8" rx="1" stroke={textColor} strokeWidth="2" />
      <rect x="15" y="1" width="8" height="8" rx="1" stroke={textColor} strokeWidth="2" />
      <rect x="1" y="15" width="8" height="8" rx="1" stroke={textColor} strokeWidth="2" />
      <rect x="15" y="15" width="8" height="8" rx="1" stroke={textColor} strokeWidth="2" />
    </svg>
  );
};

export const IconMobileMenuServices: FC<mobileMenuIconsProps> = (props) => {
  const { className, textColor = "#4F4F4F" } = props;

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
        d="M12.5 25C19.3382 25 25 19.326 25 12.5C25 5.66177 19.326 0 12.4877 0C5.66176 0 0 5.66177 0 12.5C0 19.326 5.67402 25 12.5 25ZM12.5 22.9167C6.71569 22.9167 2.09559 18.2843 2.09559 12.5C2.09559 6.71569 6.70343 2.08333 12.4877 2.08333C18.2721 2.08333 22.9167 6.71569 22.9167 12.5C22.9167 18.2843 18.2843 22.9167 12.5 22.9167ZM11.152 18.3211C11.5564 18.3211 11.8995 18.125 12.1446 17.7451L17.7451 8.93382C17.8799 8.68873 18.0392 8.41912 18.0392 8.14951C18.0392 7.59804 17.549 7.24265 17.0343 7.24265C16.7279 7.24265 16.4216 7.43873 16.1887 7.79412L11.1029 15.9559L8.68873 12.8309C8.39461 12.4387 8.125 12.3407 7.78186 12.3407C7.2549 12.3407 6.83823 12.7696 6.83823 13.3088C6.83823 13.5784 6.94853 13.8358 7.1201 14.0686L10.1103 17.7451C10.4167 18.1495 10.7475 18.3211 11.152 18.3211Z"
        fill={textColor}
      />
    </svg>
  );
};

export const IconMobileMenuMore: FC<mobileMenuIconsProps> = (props) => {
  const { className, textColor = "#4F4F4F" } = props;

  return (
    <svg width="28" height="25" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="3.66667"
        cy="3.66667"
        r="2.66667"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <circle
        cx="13.6667"
        cy="3.66667"
        r="2.66667"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="23.6667"
        cy="3.66667"
        r="2.66667"
        stroke={textColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
