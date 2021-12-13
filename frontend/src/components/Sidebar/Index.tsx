import React, { useState } from "react";

import { MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";

import { FiLogOut, FiSettings, FiTag, FiPackage } from "react-icons/fi";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineOrderedList,
} from "react-icons/ai";

import {
  HiOutlineChevronRight,
  HiOutlineTemplate,
  HiOutlineChevronLeft,
} from "react-icons/hi";

import "react-pro-sidebar/dist/css/styles.css";
import * as Sb from "./styles";
import { Link } from "react-router-dom";

export function SidebarComponent() {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <Sb.Sidebar>
        <Sb.ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <Sb.MenuButton onClick={menuIconClick}>
              {menuCollapse ? (
                <HiOutlineChevronRight />
              ) : (
                <HiOutlineChevronLeft />
              )}
            </Sb.MenuButton>
            <Sb.UserBox>
              <Sb.ThumbUser>V</Sb.ThumbUser>
              {menuCollapse ? (
                ""
              ) : (
                <>
                  <Sb.Username> Vanderson Soares </Sb.Username>
                  <Sb.UserMail> vanderson.stefanio@hotmail.com</Sb.UserMail>
                </>
              )}
            </Sb.UserBox>
          </SidebarHeader>
          <Sb.SidebarContent>
            <Sb.Menu iconShape="square">
              <MenuItem active={true} icon={<HiOutlineTemplate />}>
                Dashboard
              </MenuItem>
              <SubMenu icon={<FiTag />} title="Produtos">
                <Link to="/ListarProdutos">
                  <MenuItem icon={<AiOutlineOrderedList />}>
                    Listar Produtos
                  </MenuItem>
                </Link>
                <Link to="/CadastrarProdutos">
                  <MenuItem icon={<AiOutlineMinus />}>
                    Adicionar Produtos
                  </MenuItem>
                </Link>
              </SubMenu>
              <SubMenu icon={<FiPackage />} title="Estoque">
                <MenuItem icon={<AiOutlinePlus />}>
                  Entrada de mercadoria
                </MenuItem>
                <MenuItem icon={<AiOutlineMinus />}>
                  Saída de mercadoria
                </MenuItem>
              </SubMenu>
            </Sb.Menu>
          </Sb.SidebarContent>
          <Sb.SidebarFooter>
            <Sb.SidebarContent>
              <Sb.Menu iconShape="square">
                <MenuItem icon={<FiSettings />}>Configurações</MenuItem>
                <MenuItem icon={<FiLogOut />}>Sair</MenuItem>
              </Sb.Menu>
            </Sb.SidebarContent>
          </Sb.SidebarFooter>
        </Sb.ProSidebar>
      </Sb.Sidebar>
    </>
  );
}
