import './App.css';

function App() {
  return (
     <div className="App">
     <header className='header'>
      <div className='logoHeader'>
        <h1>TransitFlow</h1>
       <ul className='addressbar'>
         <li>Mon - Sat 9.00 - 18.00<br/>
             Sunday Closed
         </li>
         <li>Email<br/>
            contact@logistics.com
         </li>
         <li>Call Us<br/>
            (00) 112 365 489
         </li>
       </ul>
       </div>

      <nav>
       <ul className='menu'>
         <li>Home</li>
       <li>About</li>
         <li>Pages</li>
         <li>Project</li>
         <li>Contact</li>
       </ul>
       <ul className='content'>
       <li>Instagram</li>
       <li>Facebook</li>
       <li>Twitter</li>
       <li>linkedin</li>
       </ul>
       <button className='quote'>Request Quote</button>
      </nav>
      </header>

      <div className='banner'>
<p className='log'>Logistics & Supply Chain Solutions</p>
   <p className='gate'>Your Gateway <br/>
   to any Destination in the 
   <br/>World</p>
   <p className='explanation'>
   In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis <br/>vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, <br/>sed laoreet risus lectus.
   </p>

   <button className='explore'>Explore More</button>
      </div>
   

     </div>
  );
}

export default App;
