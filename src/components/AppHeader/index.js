import React from 'react';

import logo from '../../static/img/nevinha-logo-small.png';
import {Header, Logo, NavItem, Nunito, Poppins, Link, MainNavigation} from './style';
import Icon from '@material-ui/core/Icon';


export default () => (
  <Header>
    <h1>
      <Logo href="/">
        <img src={logo} alt="logo" />
        <Nunito>Nevinha<Poppins>Project</Poppins></Nunito>
      </Logo>    
    </h1>

    <nav>
      <MainNavigation>
        <NavItem active>
          <Link href="#">
            <Icon>important_devices</Icon>
            Design
          </Link>
        </NavItem>

        <NavItem>
          <Link href="#">
            <Icon>code</Icon>
            Integrations
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#">
            <Icon>settings</Icon>
            Settings
          </Link>
        </NavItem>
      </MainNavigation>
    </nav>

  </Header>
)