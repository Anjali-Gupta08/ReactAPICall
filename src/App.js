import react,{ Component } from 'react'
import './App.css';
class  App extends Component {
  constructor (props){
    super(props);
    this.state = {
      items:[],
      isLoaded:false

    }
  }

  componentDidMount() {
      fetch('https://finalspaceapi.com/api/v0/character/')
    .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items:json,
        })

        
      }).catch((err) => {
        console.log(err);
      });
  }
  
  render(){

     const {items,isLoaded} =this.state;

    if(!isLoaded)
      return(<div>Items loading...</div>);
      else{
        return (
                <div className="App">
                
                    {items.map(item => (
                      
                      <div key={item.id}> 
                      <img src={item.img_url} width='400px'alt='Image'></img>
                      <h3 className='Text'> Name: {item.name} </h3>
                      <h3 className='Text'>Gender: {item.gender} </h3>
                      </div>
                    ))}
                   
                </div>
              );
  }}
}
export default App;
