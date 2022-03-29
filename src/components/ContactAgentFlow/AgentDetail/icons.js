import React from "react";

const Briefcase = (props) => (
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
      d="M2.666 5.333A.667.667 0 0 0 1.999 6v6.667c0 .368.299.666.667.666h10.667a.667.667 0 0 0 .666-.666V6a.667.667 0 0 0-.666-.667H2.666ZM.666 6a2 2 0 0 1 2-2h10.667a2 2 0 0 1 2 2v6.667a2 2 0 0 1-2 2H2.666a2 2 0 0 1-2-2V6Z"
      fill="#929AA2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.252 1.92a2 2 0 0 1 1.414-.586h2.667a2 2 0 0 1 2 2v10.667a.667.667 0 0 1-1.334 0V3.334a.667.667 0 0 0-.666-.667H6.666a.667.667 0 0 0-.667.667v10.667a.667.667 0 0 1-1.333 0V3.334a2 2 0 0 1 .586-1.414Z"
      fill="#929AA2"
    />
  </svg>
);

const Phone = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 11.002v1.81a1.206 1.206 0 0 1-1.316 1.207 11.94 11.94 0 0 1-5.207-1.852 11.765 11.765 0 0 1-3.62-3.62 11.94 11.94 0 0 1-1.852-5.232A1.207 1.207 0 0 1 3.205 2h1.81a1.207 1.207 0 0 1 1.207 1.038c.077.58.218 1.148.423 1.695a1.207 1.207 0 0 1-.272 1.273l-.766.767a9.654 9.654 0 0 0 3.62 3.62l.766-.767a1.207 1.207 0 0 1 1.273-.271 7.747 7.747 0 0 0 1.696.422A1.207 1.207 0 0 1 14 11.002Z"
      stroke="#929AA2"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

const Email = (props) => (
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
      d="M2.666 3.333A.67.67 0 0 0 1.999 4v8a.67.67 0 0 0 .667.667h10.667a.67.67 0 0 0 .666-.667V4a.67.67 0 0 0-.666-.667H2.666ZM.666 4c0-1.102.898-2 2-2h10.667c1.101 0 2 .898 2 2v8c0 1.101-.899 2-2 2H2.666c-1.102 0-2-.899-2-2V4Z"
      fill="#929AA2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.787 3.618a.667.667 0 0 1 .928-.163l6.284 4.399 6.285-4.4a.667.667 0 1 1 .764 1.093L8.382 9.214a.667.667 0 0 1-.765 0L.95 4.547a.667.667 0 0 1-.163-.929Z"
      fill="#929AA2"
    />
  </svg>
);

export { Briefcase, Phone, Email };
