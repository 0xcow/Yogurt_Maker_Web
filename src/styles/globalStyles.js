import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 2px;
  width: 2px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 10px;
  width: 10px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 20px;
  width: 20px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 20px;
  width: 20px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 15px;
  font-weight: 100;
  line-height: 1;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 15px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 15px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
