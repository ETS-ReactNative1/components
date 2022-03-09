import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Title = styled.div`
  font-family: "GloberAdjusted";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  color: #3b5568;
  margin-bottom: 19px;
`;

export const ListItem = styled.div`
  font-family: "GloberAdjusted";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  min-width: 100px;
  padding-bottom: 3px;
  border-bottom: 1px solid #f2f4f6;
  width: max-content;
  margin-bottom: 3px;
`;
