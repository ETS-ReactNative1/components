import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  font-family: GloberAdjusted;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.20000000298023224px;
  margin-bottom: 4px;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 17px;
`;

export const SHTextContainer = styled.div`
  display: flex;
  flex: 1;
  color: #606060;
`;
export const SHText = styled.div`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`;

export const ClaimListing = styled.span`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;

  color: #2a7a7b;
  cursor: pointer;
`;

export const ContactButton = styled.div`
  background: #d7f6f2;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  min-height: 36px;
  width: 320px;
  cursor: pointer;
  font-family: GloberAdjusted;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #2a7a7b;
`;
