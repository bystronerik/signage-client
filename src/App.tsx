import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { RelayEnvironmentProvider } from 'react-relay';
import relayEnvironment from './relay-environment';
import { Player } from './app/containers/Player';
import { Loading } from './app/components/Loading';
import { Error } from './app/components/Error';

function App() {
    return (
        <div className="App">
            <ErrorBoundary FallbackComponent={Error}>
                <RelayEnvironmentProvider environment={relayEnvironment}>
                    <Suspense fallback={<Loading />}>
                        <Router>
                            <Switch>
                                <Route path="/">
                                    <Player />
                                </Route>
                            </Switch>
                        </Router>
                    </Suspense>
                </RelayEnvironmentProvider>
            </ErrorBoundary>
        </div>
    );
}

export default App;
