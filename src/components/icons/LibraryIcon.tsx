import { SVGProps } from "react";

export const LibraryIcon = ({ fill, stroke }: SVGProps<string>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      stroke={stroke}
      fill={fill}
      height="48"
      width="48"
    >
      <path d="M480-188.153 161.615-431.384l35.616-27.308L480-243.23l282.769-215.462 35.616 27.308L480-188.153Zm0-144.693L161.615-576.077 480-819.308l318.385 243.231L480-332.846Z" />
    </svg>
  );
};
