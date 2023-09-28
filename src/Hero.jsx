
import loca from './assets/loca.svg'


function Hero(props){
    // map function
    return(
                <section className='hero--body'>

                    <img src={props.imageUrl} alt="icon" className='hero--img' />

                    <div className='hero-content' >

                            <span className='hero-star-city-map'  >
                              <img src={loca} alt = "icon" />
                                <p> {props.title}</p>
                                <p> <a href={props.googleMapsUrl}>view on google maps</a> </p> 
                           </span>

                    <h1>{props.location}</h1>
                    <h4>{props.startDate}-{props.endDate}</h4>
                    <span className='hero-para'>
                    <p>{props.description}</p>
                    </span>
                 
                    </div>
                </section>
    )
}

export default Hero