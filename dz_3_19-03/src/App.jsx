import './App.css'
import Goods from './components/goods'
import Poisk from './components/Poisk'


function App() {
  return( 
    <div>
    <center style={{marginBottom:'50px'}}>  <Poisk/> </center>
      <Goods/>
    </div>
  )
}

export default App

