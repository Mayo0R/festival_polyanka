import { Header } from '..//header';
import { Map } from '..//map';
import { About } from '../about';
import { Transport } from '../transport';

export const App = () => {
	return (
		<>
			<Header />
			<About />
			<Map />
			<Transport />
		</>
	);
};
