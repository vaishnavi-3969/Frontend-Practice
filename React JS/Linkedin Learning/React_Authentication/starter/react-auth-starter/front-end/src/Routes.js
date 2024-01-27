import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Routes>
                <Switch path="/" exact>
                    <UserInfoPage />
                </Switch>
            </Routes>
        </Router>
    );
}