import turist1 from './turist1.jpeg';
import turist2 from './turist2.jpeg';
import turist3 from './turist3.jpeg';
import turist4 from './turist4.jpeg';
import turist5 from './turist5.jpeg';
import turist6 from './turist6.jpeg';
import turist7 from './turist7.jpeg';
import turist8 from './turist8.jpeg';
import turist9 from './turist9.jpeg';

export default function Main(){
    return(
        <>
          <section className='album'>
            <div><img src={turist1} /></div>
            <div><img src={turist2} /> <img src={turist3} /></div>
            <div className='flex-item'><img src={turist8} /> <img src={turist9} /></div>
            <div><img src={turist6} /> <img src={turist7} /></div>
            <div className='flex-item'><img src={turist4} /> <img src={turist5} /></div>
          </section>
        <section className='text'>
        <h1>Online Expression</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla necessitatibus excepturi nobis esse ab repellendus sed odio explicabo ipsam. Laudantium quidem excepturi velit mollitia culpa vero at voluptas tenetur nostrum.</p>
        </section>
        <section className='cards'>
        <div className="card" >
  <img src={turist5} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card">
  <img src={turist1} class="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div><div className="card">
<img src={turist2} class="card-img-top" alt="" />
<div className="card-body">
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card">
<img src={turist3} className="card-img-top" alt="" />
<div className="card-body">
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
        </section>
        </>
    )
}