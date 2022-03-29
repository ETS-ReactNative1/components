import styled from 'styled-components';
import { Dialog } from '@material-ui/core';

export const Container = styled(Dialog)``;

export const ModalTitleContainer = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 24px;
`;

export const ModalTitle = styled.div`
  font-family: 'GloberAdjusted';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  color: #000;
  flex: 1;
  text-align: center;
`;

export const ModalBody = styled.div`
  padding: 20px 24px 0 24px;
  background-color: #fafbfb;
  flex: 1;
  border-top: 1px solid #e6e9eb;
  border-bottom: 1px solid #e6e9eb;
`;

export const ModalFooter = styled.div`
  height: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
`;

export const SendEmailButton = styled.div`
  cursor: pointer;
  border-radius: 8px;
  background-color: #37d2be;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  font-family: 'GloberAdjusted';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #fff;

  ${({ disabled }) =>
    disabled && {
      backgroundColor: '#e6e9eb',
      color: '#a8aab7'
    }}
`;