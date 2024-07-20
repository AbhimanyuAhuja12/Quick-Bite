import React from "react";



class UserClass extends React.Component{


    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0,
            count2:1,

            userInfo:{
                name:"Abhi",
                location:"USA"
            }
        }

    }

    async componentDidMount(){
          const data = await fetch("https://api.github.com/users/AbhimanyuAhuja12");
          const json = await data.json();
          console.log(json);


          this.setState({
            userInfo:json,

        }
        )
    }
      
    render(){
        // const {name , location} =this.props;
        const {name,location}=this.state.userInfo;

      

        const {count,count2} = this.state;

        return(<div className="user-card">
            <h1>{name}</h1>
            <h1>{location}</h1>
            <h1>count={count}</h1>
            <h1>count2={count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+1,
                })
            }}>count increase</button>
            <h2>Name:{this.props.name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@abhi</h4>
    
        </div>
        );
    }
}

export default UserClass;