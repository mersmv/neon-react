import Header from "./components/Header/Header"
import Logos from "./components/Logos/Logos";
import Objetives from "./components/Objetives/Objetives";
import Opinions from "./components/Opinions/Opinions";
import Plans from "./components/Plans/Plans";
import Privacy from "./components/Privacy/Privacy";
import Standars from "./components/Standars/Standars";
import { CARDS } from "./constants/cards";

const App = () => {
	return (
	<div>
<Header/>;
<Logos/>
<Objetives/>
<Privacy/>
<Standars/>
<Plans/>
{CARDS.map(card => {
	<Opinions key={card.id} {...card}/>
})}
	</div>
	)
};

export default App;
