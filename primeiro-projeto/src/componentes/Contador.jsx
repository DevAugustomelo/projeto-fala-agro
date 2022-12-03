





import {useState} from "react";  
import { FaBeer } from "react-icons/fa";



function Contador() {
    const [count, setCount] = useState(0)

    return(
        <button onClick={() => setCount((count) => count + 1)}>
          <FaBeer/> Contagem de cliques {count}
        </button>
    );
}


export default Contador;