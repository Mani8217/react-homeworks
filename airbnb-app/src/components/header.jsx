
import bnb from "./airbnb1.png";

export default function Header(){
    return (
       <>
       <nav class="navbar bg-light">
       <div class="container-fluid">
         <a class="navbar-brand" href="#"><img src={bnb} width="80" alt="" /><h2>airbnb</h2></a>
       </div>
     </nav>
     
    
   </>

    )
}