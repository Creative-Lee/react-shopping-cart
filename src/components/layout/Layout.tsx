import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header>SHOP</Header>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: 0 16.66%;
`;

export default Layout;
