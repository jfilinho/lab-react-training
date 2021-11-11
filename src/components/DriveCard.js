import React from "react";
function DriverCard(props){



    return(
       <div className="cards">
        <img className="image"alt="primeiro card" src={props.img} style={{ width: "250px" }} />
           <h1>{props.name}</h1>
            {props.rating} 
            {props.car.model}
            {props.car.licencePlate}
      </div>
    )
   
}
 
export default DriverCard;