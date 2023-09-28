import './App.css'
import front from "./assets/front.svg"


function Navbar(){
    return(
        <section className='navbar-outline'>
            <img src={front} alt="icon" width="100px"/>
           
            <h1>my travel journal</h1>
        </section>

    )
}

export default Navbar
