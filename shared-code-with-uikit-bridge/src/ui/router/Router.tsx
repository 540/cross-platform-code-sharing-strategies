import React from 'react';
import {BrowserRouter as Navigator, Route as Screen} from 'react-router-dom';
import {routes} from './Router.definition';

export const Router = () => (
    <Navigator>
        {routes.map(route =>
            <Screen exact key={route.name} path={route.path} component={route.component}/>
        )}
    </Navigator>
);

