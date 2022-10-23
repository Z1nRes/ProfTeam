import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Container} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite"
import Button from 'react-bootstrap/Button'

const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Просто купить</NavLink>
                {user.isAuth ?
                    <Nav className='ml-auto' style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button style={{marginLeft: 15}}variant={"outline-light"} onClick={() => user.setIsAuth(false)} className='btnExit'>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button  variant="outline-light"><NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>Авторизация</NavLink></Button>
                    </Nav>
                }
                
            </Container>
        </Navbar>
    );
})

export default NavBar;