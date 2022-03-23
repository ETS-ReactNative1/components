import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  border-top: 1px solid #e6e9eb;

  ${({ isLast }) =>
    isLast && {
      borderBottom: "1px solid #e6e9eb",
    }}
`;

export const Row = styled.div`
  display: flex;
  padding: 16px 12px;
  border-radius: 8px;
  height: 28px;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: #f2f4f6;
  }
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const AgentName = styled.div`
  font-family: GloberAdjusted;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  width: 15%;
`;
