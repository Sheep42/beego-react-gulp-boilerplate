import Home from "./components/home";

var message = "Hello, Beego + React!";

ReactDOM.render(
	<Home message={message} />, 
	document.getElementById( "app" )
);
