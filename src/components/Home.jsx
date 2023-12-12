import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Container className="mt-4">
                <h2>Welcome to the I NEED A NAME</h2>
            </Container>

            <Container className="mt-4">
                <p>This WebApp has been created to REASON</p>
                <p>SOME TEXT: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Container>

            <Container className="mt-4">
                <h3>Get Started:</h3>
                <br />
                <div className="row text-center justify-content-around">
                    <Link to="/counter" className="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <h3>Counter</h3>
                    </Link>
                    <Link to="/film-search" className="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <h3>Film Search</h3>
                    </Link>
                    <Link to="/number-to-roman" className="container col-3 rounded border border-secondary-subtle bg-success text-light shadow link-light">
                        <h3>Number to Roman Numerals</h3>
                    </Link>
                </div>
            </Container>
        </>
    )
}