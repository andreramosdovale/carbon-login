import styled from "styled-components";

export const Container = styled.div`
  min-height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-weight: bold;
  font-size: 1.5rem;

  margin-bottom: 50px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TitleContainerText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 1.3rem;
  line-height: 1.2 !important;
`;

export const SubTitle = styled.p`
  font-size: 0.8rem;
`;

