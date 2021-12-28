import styled from 'styled-components';
import { TextInput, Button, Checkbox } from 'carbon-components-react';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LogginSection = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-left: 50px;
`;

export const BannerSection = styled.div`
  flex: 5;
`;

export const CustomButton = styled(Button)`
  width: 100%;
`;

export const LogginTitle = styled.h2`
  font-weight: bold;
`

export const LogginHr = styled.hr`
  margin: 30px 0 10px 0;
  color: white;
`

export const FlexText = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ComponentContainer = styled.div`
  margin: 10px 0;
`