import React from "react";
import "../css/SeatContainer.css";
import { useState,useEffect } from "react";
import Axios from 'axios';
const SeatContainer = (props) => {
  const [seat,setSeat] = useState(null)

  useEffect(() => {
    Axios.get("/ShowTiming/getShowById/"+localStorage.getItem("id")).then(res => {
      setSeat(res.data.seatArray)
    })
  },[])
  

  const fun = (i,j) => {
      const temp_seats = seat
      let k = 10*i + j
      if(temp_seats[k].className === "seat"){
        temp_seats[k].className  = "seat selected" 
        const temp_selectedSeats = props.selectedSeats
        temp_selectedSeats.push(temp_seats[k])
        props.setSelectedSeats(temp_selectedSeats)
      } 
      else if(temp_seats[k].className === "seat occupied")
      { 
      }
      else {
        temp_seats[k].className = "seat"
        const temp_selectedSeats = props.selectedSeats
        for(let j=0;j<temp_selectedSeats.length;j++){
          if(temp_seats[i]._id === temp_selectedSeats[j]._id) {
            temp_selectedSeats.splice(j,1)
          }
        }
        props.setSelectedSeats(temp_selectedSeats)
      }
      props.forceRender()
      setSeat(temp_seats) 
 
  };
// console.log(seat[1])
  let render__content = []

  if(seat !== null) {
    for(let i=0;i<6;i++) {
    const temp_render = []
    for(let j=0;j<10;j++) {
      temp_render.push(
        <div className={seat[10*i+j].className} onClick={() => fun(i,j)} ></div>
      ) 
    }
    const temp_render_content = (
      <div className="row">
        {temp_render}
      </div>
    )
    render__content.push(temp_render_content)
  } 
  }

  return (
    <div className="seat__layout">
      {render__content}
    </div>
  )
}

export default SeatContainer