import React from 'react';
import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import ExtensionView from 'views/ExtensionView';

const Routes = () => {
    return (
        <RoutesWrapper>
            <Route index element={<ExtensionView />} />
        </RoutesWrapper>
    );
};

export default Routes;
