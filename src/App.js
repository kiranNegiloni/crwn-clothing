import './App.css';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import { Header } from './components/header/header.component';
import { SigninSignupPage } from './pages/signin-signup-page/signin-signup-page.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SigninSignupPage} />
			</Switch>
		</div>
	);
}

export default App;
