
import React, { Component } from 'react'



import firebase from 'firebase/app';
import 'firebase/database';



const handleClick = () => {

  const db = firebase.database();
 const airqRef = db.ref('AIRQ/state');
 airqRef.set("2");
};

export class List extends Component {


 


  constructor(){
      super();
      this.state ={
        co2 : " ",
        tvoc : " ",
        TEMP : " ",
        RH : " ",
        AIRQ : " ",
        ENOSE: " ",
        TVOC: " "
      };
    };
      componentDidMount() {
        
        const rootRef_c = firebase.database().ref().child('test/CO2');
        const rootRef_t = firebase.database().ref().child('test/tvoc');
        const rootAirq = firebase.database().ref().child('AirQ');

        const rootRT = firebase.database().ref().child('test/T');
        const rootRH = firebase.database().ref().child('test/H');
        const eNOSE = firebase.database().ref().child('ENOSE');
        const eTVOC = firebase.database().ref().child('test/TVOC');


        const coRef = rootRef_c.child('state');
        const tvocRef = rootRef_t.child('state');
        const tempr = rootRT.child("state");
        const rh = rootRH.child("state");
        const air_q = rootAirq.child("state");
        const enose = eNOSE.child("state");
        const etvoc = eTVOC.child("state");





        tvocRef.on('value', snap => {
  
            this.setState({
              tvoc : snap.val()
  
            });
            
          });

        
        etvoc.on('value', snap => {
  
            this.setState({
              TVOC : snap.val()
  
            });
            
          });


          coRef.on('value', snap => {
  
            this.setState({
              co2 : snap.val()
  
            });
            
          });

          tempr.on('value', snap => {
  
            this.setState({
              TEMP : (Math.round(Number(snap.val())*10)/10).toString()
  
            });
            
          });

          rh.on('value', snap => {
  
            this.setState({
              RH : (Math.round(Number(snap.val())*10)/10).toString()
  
            });
            
          });


          air_q.on('value', snap => {
  
            this.setState({
              AIRQ : snap.val()
  
            });
            
          });
          enose.on('value', snap => {
  
            this.setState({
              ENOSE : snap.val()
  
            });
            
          });
  
  
      }

      


  render() {
      return (
<div>

<article  className='person'>
        
        <img src="image/noze_logo.png"/>
            <div>
           
              <h2>{this.state.ENOSE}</h2>
              <p> Prediction </p>
            </div>
            
          </article>

          <article  className='person'>
        
        <img src="image/noze_logo.png"/>
            <div>
           
              <h2>{this.state.TVOC}</h2>
              <p> Prediction (ppm) </p>
            </div>
            
          </article>

          <article  className='person'>
        
        <img src="https://e7.pngegg.com/pngimages/823/271/png-clipart-deuterated-acetone-solvent-in-chemical-reactions-carbonyl-group-propionaldehyde-ball-miscellaneous-chemistry-thumbnail.png" alt="TVOC" />
            <div>
              <h2>{this.state.tvoc}</h2>
              <p> ppm </p>
            </div>
          </article>


          <article  className='person'>
        <img src="https://runningmagazine.ca/wp-content/uploads/2019/08/gettyimages-1002295536-170667a.jpg" alt="Temp" />
            <div>
              <h2>{this.state.TEMP}</h2>
              <p> °C</p>
            </div>
          </article>

          <article  className='person'>
        
        <img src="https://thumbs.dreamstime.com/b/moisture-percentage-icon-badge-style-one-weather-collection-can-be-used-ui-ux-white-background-127207708.jpg" alt="RH" />
            <div>
           
              <h2>{this.state.RH}</h2>
              <p> % RH </p>
            </div>
            
          </article>

          {/* <button className = {this.state.AIRQ ==="BAD" ? "btn danger": this.state.AIRQ ==="WARNING" ? "btn warning" :  "btn success" }> NOZE  {this.state.AIRQ} </button> */}
          <button className = {"btn warning"} onClick={handleClick} > START </button>
          

</div>
  
      )
  }
}

export default List;


