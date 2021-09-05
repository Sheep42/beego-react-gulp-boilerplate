import React, { useState } from 'react';

const Home = ( { msg } ) => {
  
	const [message, setMessage] = useState( msg );

	const handleClick = () => {
    
		setMessage( 'Hello, you clicked!' );

	};

	return (
		<h1 style={{ cursor: 'pointer' }} onClick={ handleClick }>
			{ message }
		</h1>
	);

}

export default Home;
