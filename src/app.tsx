import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Discover from "./pages/discover";
import SideNavBar from "./components/sidenavbar";
import { media } from "./utils/mediaBreakPoints";
import "./css/app.css";

export default function App(props: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <PageContainer>
        <SideNavBar isOpen={isOpen} toggleNavBar={toggleNavBar} />
        <ContentWrapper>
          <Switch>
            <Route
              path="/discover"
              render={() => (
                <Discover
                  {...props}
                  isOpen={isOpen}
                  toggleNavBar={toggleNavBar}
                />
              )}
            />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const ContentWrapper = styled.main`
  padding-left: 280px;

  @media ${media.mobile} {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media ${media.tabletPortrait} {
    padding-left: 200px;
    padding-right: 5px;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
