import React,{Component} from "react"
import Memegenerator from "./components/Memegenerator"
import Header from "./components/Header"

class App extends Component{
  constructor(){
    super()
  }
  render()
  {
    return(
      <div>
        <Header/>
        <Memegenerator/>
      </div>
    )
  }
}
export default App