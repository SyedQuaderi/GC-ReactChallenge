import React, { Component } from 'react';
import Axios from 'axios';
import { store } from './redux';
import {NavLink} from 'react-router-dom'



class Checkout extends Component{
    constructor(props){
        super(props);
        this.state={
            itemsState:[]
            
        }
    }

    componentDidMount=()=>{
        var storedValue;
       
        for(let i=0; i<localStorage.length; i++){

            let key=localStorage.key(i);
          
            //console.log(storedValue);
            storedValue= localStorage.getItem(key);
            //console.log(storeValue.split("|"));
            let div=document.querySelector("#result");
           div.innerHTML += storedValue + "</br>" ;
          
        }
       
        let divItem=document.querySelector("#result").textContent;
        let productItem=divItem

        // this.setState({
        //     itemsState:productItem
        // })
       // console.log(productItem);
       // console.log(typeof storedValue);
        //console.log(splitValues)
    }

    // fetchItems=()=>{
    //     Axios.get("https://bitbucket.org/gc-coders/react-challenge/raw/520a066d65cf9a4920abd4dd01ff893966498cdc/gifts.json")
    //     .then((item)=>{
    //             this.setState({
    //                 itemsState:item.data.products
    //             })
    //     })
    // }


    render(){
    //    let item=[]
    //    var price=document.querySelector("#price");
    //    if(this.state.itemsState.length > 0 ){
    //        //console.log("this is itemstate values: ",this.state.itemsState);
    //        this.state.itemsState.map((item)=>{
    //            return console.log(item)
    //        })

    //    }
       
       
        return(
            
          
            <React.Fragment>
              <h1 className="text-center text-primary">  Checkout Page</h1>
              <div><NavLink to="/" className="btn btn-secondary">back</NavLink></div>
                <h5 className="text-dark text-right font-weight-bold" id="result"></h5>
                {/* <div id="price"></div>

                {
                  
                } */}
                
                
            </React.Fragment>
        )
    }
}

export default Checkout