import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Routes from 'Routes';
import Navbar from 'components/Navbar';

const App = () => {
    return (
        <ErrorBoundary>
            <Navbar />
            <Router basename="/">
                <Routes />
            </Router>
        </ErrorBoundary>
    );
};

export default App;
