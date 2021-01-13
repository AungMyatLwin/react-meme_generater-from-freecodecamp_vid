import React from "react"

class Memegenerator extends React.Component{
    constructor(){
        super()
        this.state={
            top_text:"",
            bottom_text:"",
            random_image:"http://i.imgflip.com/1bij.jpg",
            allMemeImg:[]

        }
        this.componentDidMount=this.componentDidMount.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.Gen=this.Gen.bind(this)
        
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response=>response.json())
        .then(response=>{
            const {memes}=response.data
            
            this.setState({
                allMemeImg:memes
            })
        })
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        
    }
    Gen(event){
        event.preventDefault()
        const rand=Math.floor(Math.random() * this.state.allMemeImg.length)
        const random_imageurl=this.state.allMemeImg[rand].url
        this.setState({
            random_image:random_imageurl
        })
    }
    render(){
        return(
            <div>
            <form className="meme-form"  >
                
                <input name="top_text" type="text" value={this.state.top_text}  onChange={this.handleChange} />Top Text
                <br/>
                <input name="bottom_text" type="text" value={this.state.bottom_text} onChange={this.handleChange} />bottom Text
                <br/>
                <button onClick={this.Gen}>Gen</button>
            </form>
                <div className="meme">
                    <img src={this.state.random_image}/>
                    <h2 className="top">{this.state.top_text}</h2>       
                    <h2 className="bottom">{this.state.bottom_text}</h2>  
                </div>
            </div>
        )
    }
}

export default Memegenerator