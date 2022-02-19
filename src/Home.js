const Home = () => {
    //The e is there to show properties of the output from the buttons
    //e.target is to just show the exact code where the output is coming from
    const handleClickAgain = (name, e) => {

        console.log('You have Clicked a successful button ' + name, e.target);
    }
    const handleClick = (e) => {

        console.log('oh, Hello', e);
    }

    return ( 
        <div className = "home">
            <h1>HomePage</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick = {(e) => handleClickAgain('Joseph', e)}> The Second Button</button>
        </div>

     );
}
 
export default Home;