import styled from 'styled-components';
import ShowMoreText from 'react-show-more-text';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-family: 'GloberAdjusted';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.6000000238418579px;
  margin-bottom: 36px;

  ${({ isMobile }) =>
    isMobile && {
      fontSize: 24,
      lineHeight: '24px'
    }}
`;

export const PreviewText = styled.div`
  font-family: 'GloberAdjusted';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ${({ fade }) => fade && `-webkit-mask-image: linear-gradient(180deg, #000 24.15%, transparent);`}
`;

export const Text = styled(ShowMoreText)`
  font-family: 'GloberAdjusted';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;

  margin-bottom: 20px;
  text-align: justify;
  line-break: normal;

  ${({ expanded }) =>
    expanded
      ? {
          lineBreak: 'normal'
        }
      : {
          whiteSpace: 'nowrap',
          opacity: '0',
          height: 0
        }}

  & span {
    ${({ expanded }) =>
      !expanded && {
        display: 'none'
      }}
  }
`;

export const Button = styled.div`
  border: 1px solid #9dd3d1;
  cursor: pointer;
  color: #2a7a7b;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  border-radius: 8px;
  width: max-content;
  padding: 7px 12px;
  z-index: 1;
  ${({ isMobile }) =>
    isMobile && {
      fontWeight: 700
    }}
`;
