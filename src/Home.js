import { useState } from 'react';

const Home = () => {
    const [completion, setComplistion] = useState('haven\'t');
    const [number, setNumber]   = useState(0);
    let clicks = 0; //doesn't fully work
    //The e is there to show properties of the output from the buttons
    //e.target is to just show the exact code where the output is coming from
    const handleClickAgain = (name, e) => {

        console.log('You have Clicked a successful button ' + name, e.target);
    }
    const handleClick = () => {
        clicks++; 
        setComplistion('have');
        setNumber(clicks);
        //console.log('oh, Hello', e); this would only out put something to console not on the UI
    }

    return ( 
        <div className = "home">
            <h1>HomePage</h1>
            <p> I {completion} finished my homework today</p>
            <p>I have clicked this button {number} times</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick = {(e) => handleClickAgain('Joseph', e)}> The Second Button</button>
        </div>

     );
}
 
export default Home;