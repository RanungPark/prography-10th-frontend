import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <LayoutStyled>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  widows: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const OutletWrapper = styled.div`
  min-width: 768px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
