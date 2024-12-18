import React, { useState, useEffect } from 'react';
import CommonLayout from '../../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("test123");
    const [name, setName] = useState(localStorage.getItem('Name') || '');

    useEffect(() => {
        if (name) {
            localStorage.setItem('Name', name);
        }
    }, [name]);

    const loginAuth = () => {
        localStorage.setItem("user", "true");
        setTimeout(() => {
            router.push('/page/account/checkout');
        }, 200);
    };

    const registerAuth = () => {
        localStorage.setItem("user", "true");
        setTimeout(() => {
            router.push('/page/account/register');
        }, 200);
    };

    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label className="form-label" htmlFor="email">Email</Label>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Label className="form-label" htmlFor="password">Password</Label>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <button type="button" className="btn btn-solid" onClick={loginAuth}>
                                        Login
                                    </button>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create An Account</h6>
                                <p>
                                    Sign up for a free account at our store. Registration is quick and easy.
                                    It allows you to be able to order from our shop. To start shopping, click
                                    register.
                                </p>
                                <button type="button" className="btn btn-solid" onClick={registerAuth}>
                                    Create an Account
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Login;
