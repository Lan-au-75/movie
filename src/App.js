import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRouter } from '~/routers';
import DefaultLayout, { Authentication } from '~/layouts';

function App() {
    return (
        <Router>
            <Routes>
                {publicRouter.map((route, index) => {
                    const Page = route.element;

                    let Layout;
                    switch (route.layout) {
                        case DefaultLayout:
                            Layout = DefaultLayout;
                            break;

                        case Authentication:
                            Layout = Authentication;
                            break;
                        case null:
                            Layout = Fragment;
                            break;

                        default:
                            Layout = DefaultLayout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
