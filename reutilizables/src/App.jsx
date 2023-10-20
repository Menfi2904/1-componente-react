import './App.css'
import { Card } from './components/card'


function App() {
  const persons = [
    {id: 1, name: "felipe", age: 45, img:"../../public/vite.svg"},
    {id: 2, name: "alejandra", age: 60, img:"../../public/vite.svg"},
    {id: 3, name: "camilo", age: 60, img:"../../public/vite.svg"},
  ]

  return(
    <div className='app'>
      {persons.map((item) =>(
        <Card key={item.id} name={item.name} age={item.age} img={item.img}/>
      ))}
    </div>
  )
}

export default App
