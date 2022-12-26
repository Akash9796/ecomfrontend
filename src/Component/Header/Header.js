import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
  Tv,
  TvOutlined,
  Movie,
  MovieOutlined,
  Menu,
  Close,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
export default function Header() {
  const [tab, setTab] = useState(window.location.pathname);
  const [show, setShow] = useState(true);

  return (
    <Wrapper>
      <Logo>
        <img
          src="https://www.simicart.com/blog/wp-content/uploads/eCommerce-logo.jpg"
          alt=""
        />
      </Logo>
      <Left show={show}>
        {show}
        <Link to="/" onClick={() => (setTab("/"), setShow(!show))}>
          {tab === "/" ? <Home  /> : <HomeOutlined />}
        </Link>
        <Link to="/movies" onClick={() => (setTab("/movies"), setShow(!show))}>
          {tab === "/movies" ? (
            <Movie  />
          ) : (
            <MovieOutlined />
          )}
        </Link>
        <Link
          to="/tvshows"
          onClick={() => (setTab("/tvshows"), setShow(!show))}
        >
          {tab === "/tvshows" ? (
            <Tv />
          ) : (
            <TvOutlined />
          )}
        </Link>
      </Left>
      <Right show={show}>
        <Link to="/search" onClick={() => (setTab("/search"), setShow(!show))}>
          {tab === "/search" ? (
            <Search />
          ) : (
            <SearchOutlined />
          )}
        </Link>
        <Link to="/account" onClick={() => setTab("/account")}>
          {tab === "/account" ? (
            <AccountCircle  />
          ) : (
            <AccountCircleOutlined />
          )}
        </Link>
      </Right>
      <MenuIcon innerWidth onClick={() => setShow(!show)}>
        {show ? <Menu /> : <Close />}
      </MenuIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #d5d5d5;
  z-index: 100;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  a {
    height: 2vmax;
    margin: 1vmax 4vmax;

    svg{
        color: black;

    }

  }

  svg {
    font-size: 2vmax;
    transition: all 0.5s;
    color: white;

    &:hover {
      color: white;
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 650px) {
    display: ${(p) => (p.show ? `none` : `flex`)};
    flex-direction: column;
  }
`;

const Right = styled(Left)`
`;
const Logo = styled.div`
  img {
    width: 30px;
    margin: 5px 0;
    position: relative;
    right: 0px;
  }
`;
const MenuIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: none;
  color: white;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;
