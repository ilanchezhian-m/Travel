import Navbar from './Nav'
import './App.css'
import Hero from './Hero'
import data from './data'

function App() {
    const cards = data.map(item => {
          return(
              <Hero
                  key={item.id} // Provide a unique key
                  title={item.title}
                  location={item.location}
                  googleMapsUrl={item.googleMapsUrl}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                  imageUrl={item.imageUrl}
              />
              )
          
              } )

    return (
      <div className="app-main">
          <Navbar />
          {cards}
      </div>
  )
}

export default App
