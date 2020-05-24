import React, { memo, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// Store

import { history } from './store';
// Constants
import { APP_TYPES, selector } from './reducers';

import * as ROUTES from './constants/routes';
// Components
import PrivateLayout from './private-layout';
import PublicLayout from './public-layout';
import { Modal as SettingsModal } from './modals/settings-modal';

const Root = memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: APP_TYPES.INITIALIZE });
    }, [dispatch]);

    const { initialized } = useSelector(selector);
    if (!initialized) {
        return null;
    }

    return <>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={ROUTES.LAYOUT_PUBLIC} component={PublicLayout} />
                <Route path={ROUTES.LAYOUT_PRIVATE} component={PrivateLayout} />
                <Redirect to={{ pathname: ROUTES.SIGN_IN.LINK() }} />
            </Switch>
        </ConnectedRouter>

        {/*Modals*/}
        <SettingsModal />
    </>;
});

export default Root;
