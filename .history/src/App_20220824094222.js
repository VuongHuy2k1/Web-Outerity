import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/Components/Layout/DefaultLayout';
import DefaultLayoutAdmin from '~/admin/Component/Layout/DefaultLayoutAdmin';
import { DataProvider } from './pages/Cart/DataProvider';
import { AuthProvider } from '~/pages/Register/context/AuthProvider';
function App() {
    return (
        <DataProvider>
            <AuthProvider>
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            </AuthProvider>
        </DataProvider>
    );
}

export default App;
