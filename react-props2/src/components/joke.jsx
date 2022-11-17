

export default function Joke(props){
    return(
         <div className="joke-section">
         <ul>
           <li>{props.title}<br/>
           {props.punch}</li>
           </ul>
         </div>

    )
}