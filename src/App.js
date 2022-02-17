import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title = 'Welcome to Joseph Mangapit\'s website';
  const hours = 30;
  //const person = {name: 'yoshi', age:30};
  const link = "https://na.op.gg/summoners/na/badminininja";
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
        <Home />
        <h1>{ title }</h1>
        <p>Has spent {hours} hours on games today</p>

        {/*<p>{person}</p>*/}
        <p>{Math.random() * 10 }</p>
        <a href={link}> League Account</a>
    </div>
  );
}

export default App;
