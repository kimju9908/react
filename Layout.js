import { Outlet } from "react-router-dom";
import Styled, { styled } from "styled-components";

const Header = styled.header`
  background-color: lightgray;
  padding: 16px;
  font-size: 24px;
`;

const Footer = styled.footer`
  background-color: royalblue;
  color: white;
  text-align: center;
  font-size: 18px;
`;
const Layout = () => {
  return;
  <>
    <Header></Header>

    <main>
      <Outlet />
    </main>

    <Footer></Footer>
  </>;
};
export default Layout;
