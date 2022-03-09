/* eslint-disable react/prop-types */
import React from "react";

function ImageIcon(props) {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.218 1.667a.667.667 0 0 0-.667.667v9.333c0 .369.299.667.667.667h9.333a.667.667 0 0 0 .667-.667V2.334a.667.667 0 0 0-.667-.667H2.218Zm-2 .667a2 2 0 0 1 2-2h9.333a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H2.218a2 2 0 0 1-2-2V2.334Z"
        fill="#2A7A7B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.551 4.333a.333.333 0 1 0 0 .667.333.333 0 0 0 0-.667Zm-1.666.334a1.667 1.667 0 1 1 3.333 0 1.667 1.667 0 0 1-3.333 0ZM9.08 5.195c.26-.26.682-.26.943 0l3.333 3.334a.667.667 0 1 1-.943.942L9.551 6.61 2.69 13.471a.667.667 0 1 1-.942-.942L9.08 5.195Z"
        fill="#2A7A7B"
      />
    </svg>
  );
}

export { ImageIcon };
