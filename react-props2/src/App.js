import Main from './components/main.jsx'
import Joke from './components/joke.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <div className="App" >
    <Navbar />
    <div className="my-div">
    <Joke 
    title = 'Why are gay people always smiling?'
    punch = 'Because they can’t keep a straight face.'
  />
  <Joke 
     title='Why did David Hasselhoff change his name to “The Hoff?”'
     punch = 'It’s less hassle'
  />
  <Joke 
    title='Why does Waldo wear stripes?'
    punch='Because he doesn’t want to be spotted.'
  />
  <Joke 
  title = 'Why are gay people always smiling?'
  punch = 'Because they can’t keep a straight face.'
/>
<Joke 
   title='Why did David Hasselhoff change his name to “The Hoff?”'
   punch = 'It’s less hassle'
/>
<Joke 
  title='Why does Waldo wear stripes?'
  punch='Because he doesn’t want to be spotted.'
/>
</div>
    <div className='middle'>
      <Main 
       img={require('./images/turist1.jpeg')}
       name='Mani Shidfar'
      />
      <Main 
       img={require('./images/turist2.jpeg')}
       name='Benyamin Kadivar'
      />
      <Main 
       img={require('./images/turist3.jpeg')}
       name='John Doe'
      />
      <Main 
       img={require('./images/turist4.jpeg')}
       name='Mana Raad'
      />
      </div>
      <hr/>

      
    </div>
  );
}

export default App;
