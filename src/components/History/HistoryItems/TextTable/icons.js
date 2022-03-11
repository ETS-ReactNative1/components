import React from "react";

const ExternalLinkIcon = (props) => (
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
      d="M3.333 4.667a.667.667 0 0 0-.666.667v7.333a.667.667 0 0 0 .666.667h7.334a.667.667 0 0 0 .666-.667v-4a.667.667 0 1 1 1.334 0v4a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V5.334a2 2 0 0 1 2-2h4a.667.667 0 0 1 0 1.333h-4ZM9.333 2c0-.368.299-.666.667-.666h4c.368 0 .667.298.667.667v4a.667.667 0 0 1-1.334 0V2.667H10a.667.667 0 0 1-.667-.666Z"
      fill="#2A7A7B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.471 1.53c.26.26.26.682 0 .942L7.138 9.805a.667.667 0 0 1-.943-.942l7.334-7.334c.26-.26.682-.26.942 0Z"
      fill="#2A7A7B"
    />
  </svg>
);

export { ExternalLinkIcon };
