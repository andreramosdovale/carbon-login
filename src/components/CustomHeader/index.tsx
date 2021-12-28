import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { } from 'carbon-components-react/lib/components/UIShell';
import { Container, TitleContainer, TitleContainerText, Title, SubTitle } from "./styles";
import { DARK } from "../../constants/theme";
import useToggleTheme from "../../hooks/useToggleTheme";
import { SkipToContent, Header, HeaderName, HeaderMenuButton, HeaderGlobalAction, HeaderContainer, HeaderGlobalBar } from 'carbon-components-react/lib/components/UIShell';
import { Toggle } from 'carbon-components-react';

const CustomHeader: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useToggleTheme();
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(true)

  const onClickSideNavExpand = () => {
    console.log(":p")
  }

  const onToggle = () => {
    toggleTheme()
  }
  
  return (
    <HeaderContainer render={({onClickSideNavExpand, isSideNavExpanded}) => (
      <>
        <Header >
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={onClickSideNavExpand}
            tooltipAlignment="end">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
          </HeaderGlobalAction>
          <HeaderName href="#" prefix="">
            <SkipToContent />
            <TitleContainerText>
              <Title>
                Elysium Labs App
              </Title>
              <SubTitle>
                by Elysium Labs
              </SubTitle>
            </TitleContainerText>
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Change Theme"
              onClick={onClickSideNavExpand}>
              {/*<Switch
                onChange={toggleTheme}
                checked={title === DARK}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.secundary)}
                onColor={colors.secundary}
              />*/}
              <Toggle
                aria-label="toggle button"
                defaultToggled
                onToggle={toggleTheme}
                id="toggle-1"
              />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </>
    )}/>
  )
};

export default CustomHeader;
