import React from "react";

import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 18px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  color: #2a7a7b;
  font-family: "GloberAdjusted";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusLabel = styled.div`
  background: #ffbf00;
  border-radius: 3px;
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "GloberAdjusted";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const OwnerLabel = styled.div`
  color: #606060;
  font-family: "GloberAdjusted";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;

export const ChevronRight = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.744 4.41a.833.833 0 0 1 1.179 0l5 5a.833.833 0 0 1 0 1.179l-5 5a.833.833 0 0 1-1.179-1.179l4.41-4.41-4.41-4.411a.833.833 0 0 1 0-1.179Z"
      fill="#2A7A7B"
    />
  </svg>
);
