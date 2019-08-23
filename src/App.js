import React from 'react';
import image from './assets/images/kitten.png';

const App = title => {
	return (

	<div>
		{title}
		<img src={image} alt="kitty" />
	</div>)
}

export default App;
