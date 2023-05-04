import { FC } from "react";

interface IconSearchProps {
  className?: string;
}

export const IconSearch: FC<IconSearchProps> = (props) => {
  const { className } = props;

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3623 14.5L12.3623 10.5M8.3623 12.5C5.0486 12.5 2.3623 9.81371 2.3623 6.5C2.3623 3.18629 5.0486 0.5 8.3623 0.5C11.676 0.5 14.3623 3.18629 14.3623 6.5C14.3623 9.81371 11.676 12.5 8.3623 12.5Z"
        stroke="black"
      />
    </svg>
  );
};
