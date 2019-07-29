import React, { Component } from "react";
import {store, increment, decrement}  from './redux'
import Axios from "axios";
import Total from './total'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      key:0
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    // fetch("https://bitbucket.org/gc-coders/react-challenge/raw/520a066d65cf9a4920abd4dd01ff893966498cdc/gifts.json")
    // .then(response=>response.json())
    // .then((data)=>{
    //     this.setState({
    //         item:data.products._source.charities
    //     })
    // })

    Axios.get(
      "https://bitbucket.org/gc-coders/react-challenge/raw/520a066d65cf9a4920abd4dd01ff893966498cdc/gifts.json"
    ).then(result => {
      //console.log(result.data);
      this.setState({
        item: result.data.products
      });
    });
  };

  keyFunc=()=>{
    this.setState({
      key:this.state.key+1
    })
  }

  incrementCount=(e)=>{
   // console.log(e.target.id);
    //let id = e.target.id;
    //console.log(id);
    //let idVal +=id;
   //console.log(idVal);
  // console.log(e.target.id);
    this.keyFunc();
    let listItems= e.target.title + "," + e.target.value;
    // let listItems= "{ title:"+e.target.title + ", price:" + e.target.value+"}";
    localStorage.setItem(this.state.key, listItems);
    console.log(localStorage.getItem(this.state.key));
   //console.log(e.target.name)
    
   //console.log(localStorage.length);
   // console.log(typeof JSON.parse(localStorage.getItem("id")));
    store.dispatch(increment(e.target.value));
   
}

decrementCount=()=>{
    store.dispatch(decrement());

}

  render() {
    // console.log(this.state.item);
    return (
      <React.Fragment>
        <div className="container">
        <div className="text-right m-2 clearfix">
          <Total/>
          </div>
          <br></br>
          <div className="row border pt-5">
            <div className="col-md-4 border">Hide Filters</div>
            <div className="col-md-4 border offset-4 ">Sort By</div>
          </div>
          <div className="row pt-5">
            {
              this.state.item.map(itemData => {
               // var item = itemData._source;
               // console.log(itemData._source.image);
            return(

             // item.map((itemVal)=>{
              //   return(
                  
                  <div key={itemData._source.id} className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      alt={itemData._source.description}
                      title={itemData._source.description}
                      src={itemData._source.image}
                      width="348"
                      height="225"
                      className="border"
                    />
                    <div className="card-body">
                      <p className="card-text">
                       {itemData._source.title }
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-dark bg-light p-2">
                         {itemData._source.giftprice}
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary text-right" id={itemData._source.id} title={itemData._source.title}  name={itemData._source.image} value={itemData._source.giftprice} onClick={e=>this.incrementCount(e)}
                         
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>




               // )
            // })

            ) 
              }
              )
          
          }

             

              
            
               
                
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
