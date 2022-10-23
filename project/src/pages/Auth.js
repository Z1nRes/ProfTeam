import React, {useContext} from "react";
import { Context } from "..";
import {Button, Card, Container, Form} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context)
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-4" placeholder="Введите ваш логин..."/>
                    <Form.Control className="mt-4" placeholder="Введите ваш пароль..."/>
                    <Form className="d-flex justify-content-between">
                        <Button className="mt-4" variant="outline-success" onClick={() => user.setIsAuth(true)}>
                            <NavLink to={SHOP_ROUTE} style={{textDecoration: 'none'}}>
                                {isLogin ? "Войти" : "Зарегистрироваться"}
                            </NavLink>
                        </Button>
                        {isLogin ? 
                            <div className="mt-4 align-self-center">
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться!</NavLink>
                            </div>
                            :
                            <div className="mt-4 align-self-center">
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти!</NavLink>
                            </div>
                        }
                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;