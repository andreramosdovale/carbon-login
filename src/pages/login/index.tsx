import React, { useState } from 'react';
import { Container, LogginSection, BannerSection, LogginTitle, LogginHr, FlexText, ComponentContainer, CustomButton } from "./style" 
import { TextInput, Button, Checkbox } from 'carbon-components-react';
 
const Login = () => {
  const [step, setStep] = useState(false)
  const [email, setEmail] = useState("email@email.com.br")

  return (
    <Container>
      <LogginSection>
        <LogginTitle>Log in</LogginTitle>
        {!step ? (
          <>
            <p>Don´t have account? <a href="#">Create an IBMid</a></p>
            <LogginHr />
            <FlexText>
              <p>Continue with IBMid</p>
              <p><a href="#">Forgot ID?</a></p>
            </FlexText>
            <ComponentContainer>
              <TextInput
                id="test"
                invalidText="A valid value is required"
                labelText=""
                placeholder="Email"
              />
            </ ComponentContainer>
            <ComponentContainer>
              <Button style={{width: "100%"}} onClick={() => (setStep(true))}>Continue</Button>
            </ComponentContainer>
            <Checkbox defaultChecked labelText="Renenber ID" id="checked" />
            <LogginHr />
            <p>Alternative logins</p>
            <ComponentContainer>
              <Button style={{width: "100%"}}>Log in with Azure</Button>
            </ComponentContainer>
            <ComponentContainer>
              <Button style={{width: "100%"}}>Log in with Github</Button>
            </ComponentContainer>
            <LogginHr />
            <p>Need help? <a>Contact the IBM help desk</a></p>
          </>
        ) : (
          <>
            <p>Logging in as {email} <a href="#">Not you?</a></p>
            <LogginHr />
            <FlexText>
              <p>Password</p>
              <p><a href="#">Forgot password?</a></p>
            </FlexText>
            <ComponentContainer>
              <TextInput
                id="test2"
                invalidText="A valid value is required"
                labelText=""
                placeholder="Passsword"
              />
              <ComponentContainer>
                <Button style={{width: "100%"}}><span>Log in</span></Button>
              </ComponentContainer>
            </ ComponentContainer>
          </>
        )}
      </LogginSection>
      <BannerSection />
    </Container>
  )
}

export default Login;