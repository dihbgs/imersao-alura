import { SVGProps } from "react";

export const HomeIcon = ({ fill, stroke }: SVGProps<string>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      stroke={stroke}
      fill={fill}
      height="48"
      width="48"
    >
      <path d="M231.769-190.769h149.539v-247h198.384v247h148.539v-372.846L480-751.462 231.769-564.205v373.436ZM188-147v-439l292-219.539L772-586v439H535.923v-247H425.077v247H188Zm292-324.231Z" />
    </svg>
  );
};
