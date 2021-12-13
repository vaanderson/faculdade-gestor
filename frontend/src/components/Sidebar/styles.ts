import styled from "styled-components";
import * as RPS from "react-pro-sidebar";

export const ThumbUser = styled.div`
  border-radius: 0.3rem;
  margin: 0 auto;
  height: 5rem;
  width: 5rem;
  text-align: center;
  background-color: var(--thirdy);
  padding: 1.5rem 0;
  color: #fff;
`;

export const Sidebar = styled.div`
  position: fixed;
  width: 285px;
  z-index: 1;
  & > .collapsed {
    & ${ThumbUser} {
      width: 3rem;
      height: 3rem;
      padding: 1rem 0.3rem;
      font-size: 0.8rem;
    }

    &:hover {
      width: 85px;
      background-color: #000;
    }
  }
`;

export const ProSidebar = styled(RPS.ProSidebar)`
  height: 100vh;
  width: 100%;
  min-width: 100%;

  & > .pro-sidebar-inner {
    background-color: var(--primary);
    box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
    border-right: 1px solid #e6edef;
  }

  & .pro-inner-item {
    padding: 0.5rem !important;
    &:hover {
      color: #fff !important;
    }
  }
  &.pro-sidebar.collapsed {
    & .pro-menu-item {
      margin-top: 1rem;
      :hover {
        background-color: var(--secondary);
        border-radius: 0.5rem;
        color: #fff;
      }
    }
  }
`;

export const LogoContainer = styled.div`
  font-size: 20px;
  padding: 0 20px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 20px;
  right: 5px;
  padding: 0.2rem;
  z-index: 9999;

  font-weight: bold;
  font-size: 20px;
  line-height: 1rem;
  color: #fff;

  background-color: var(--secondary);

  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #4d0572;
  }
`;

export const Logo = styled.img`
  width: 50%;
  margin-top: 1rem;
`;

export const UserBox = styled.div`
  text-align: center;
  margin: 2rem 0 2rem 0;
  color: #fff;
`;

export const Username = styled.p`
  margin-top: 1rem;
`;

export const UserMail = styled.p`
  font-size: 0.6rem;
`;

export const Favicon = styled.img`
  width: 100%;
  margin-top: 1rem;
`;

export const Menu = styled(RPS.Menu)`
  & .active {
    background-color: var(--secondary);
    border-radius: 0.5rem;
    color: #fff !important;
    font-weight: 600;
  }

  & .pro-inner-item {
    color: #fff;
  }

  /* Aqui está o background do icone */
  & .pro-icon-wrapper {
    background-color: transparent !important;
    font-size: 20px !important;
  }

  & .pro-menu-item {
    margin-top: 1rem;
    :hover {
      background-color: var(--thirdy);
      border-radius: 0.5rem;
      color: #fff;
    }

    a {
      &::before {
        position: unset !important;
      }
    }
  }

  & .pro-inner-list-item {
    background-color: var(--third) y !important;

    &.popper-element {
      background-color: transparent !important;
    }
  }

  & .popper-inner {
    background-color: #fff !important;
    padding-bottom: 1rem;
    padding-right: 1.3rem;

    & .pro-inner-item {
      color: #6c7583;

      &:hover {
        color: #fff !important;
      }
    }
  }
  & .pro-arrow {
    color: #000 !important;
  }

  & .pro-sub-menu > .pro-inner-list-item > div > ul {
    padding-top: 0 !important;
  }
`;

export const SidebarFooter = styled(RPS.SidebarFooter)`
  border-top: 1px solid #ffffff8c !important;
`;

export const SidebarContent = styled(RPS.SidebarContent)`
  padding: 0.8rem;
`;

// cinza: #e7e9eb
// cinza escuro: #6c7583

// azul: #0064fe
//azul escuro: #035ae1

// amarelo: #ffb000

// ffeb00
