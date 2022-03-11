import React from "react";

const ArrowUp = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.666c.368 0 .667.298.667.667v9.333a.667.667 0 1 1-1.334 0V3.333c0-.369.299-.667.667-.667Z"
      fill="#2A7A7B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.529 2.861c.26-.26.682-.26.942 0l4.667 4.667a.667.667 0 0 1-.943.943L8 4.275 3.805 8.471a.667.667 0 1 1-.943-.943L7.529 2.86Z"
      fill="#2A7A7B"
    />
  </svg>
);

const ArrowDown = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.666c.368 0 .667.298.667.667v9.333a.667.667 0 1 1-1.334 0V3.333c0-.369.299-.667.667-.667Z"
      fill="#A82B31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.862 7.53c.26-.261.682-.261.943 0L8 11.724l4.195-4.196a.667.667 0 0 1 .943.943L8.471 13.14a.667.667 0 0 1-.942 0L2.862 8.472a.667.667 0 0 1 0-.943Z"
      fill="#A82B31"
    />
  </svg>
);

export { ArrowUp, ArrowDown };
