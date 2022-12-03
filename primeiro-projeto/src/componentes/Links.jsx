





import logoAgro from './imgs/logAgro.jpg'
import reactLogo from './imgs/react.svg';

export default function Links() {

    return(

        <div>
        <a href="https://falaagro.com/" target="_blank">
          <img src= {logoAgro} className="logo" alt="agro logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


    );
}

