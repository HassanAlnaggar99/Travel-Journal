import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
  const cards = data.map((card, index) => {
    return (
      <>
        {index !== 0 && <hr />}
        <Card
          key={index}
          {...card}
        />
      </>
  )
  });
  return (
    <>
      <Header />
      <div className="container">
        {cards}
      </div>
    </>
  )
}

export default App
