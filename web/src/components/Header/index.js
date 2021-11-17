import React from 'react';
import { ReactComponent as SvgLogo } from '../../logo.svg';

import { Container } from '../../styles/GlobalStyles';
import { HeaderStyled, InputContainer, IconsContainer, UserAvatar, LogoContainer } from './styles';

import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  function handleClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <HeaderStyled>
      <Container style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
        <LogoContainer>
         <SvgLogo className="logo" />
        </LogoContainer>
         <InputContainer>
          <SearchIcon className="icon"/>
          <input type="text" placeholder="Pesquisar" />
         </InputContainer>
         <IconsContainer>
           { isDarkTheme 
              ? <WbSunnyIcon onClick={handleClick } className="icon" /> 
              : <Brightness2OutlinedIcon onClick={handleClick} className="icon" />
           }
           <HomeRoundedIcon className="icon" fontSize="large" />
           <ExploreOutlinedIcon className="icon" fontSize="large" />
           <FavoriteBorderOutlinedIcon className="icon" fontSize="large" />
           <UserAvatar>
             <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg" />
           </UserAvatar>
         </IconsContainer>
      </Container>
    </HeaderStyled>
  )
}

export default Header;
