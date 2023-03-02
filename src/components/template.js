import React from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import styled from 'styled-components';
const Template = () => {
  return (
    <TemplateContainer>
      <Header />
      <Content>
        <Sidebar />
        <Page>페이지</Page>
      </Content>
    </TemplateContainer>
  );
};

export default Template;

const TemplateContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 80px);
`;
const Page = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;