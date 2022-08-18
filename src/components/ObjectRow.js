import React from 'react'

export default function ObjectRow(props) {
  return (

    <div style={{maxWidth:"300px",borderRadius:"30px"}} >
      
      <div class="card m-4 ripple position-relative" style={{width: "18rem",minHeight:"725px"}}>
          <img src={props.obj[10]} class="card-img-top animate__animated animate__zoomInRight" alt="Chicago Skyscrapers"/>
          <div class="card-body">
            <h5 class="card-title"><span class="badge bg-primary">{props.obj[1]}</span></h5>
            <p class="card-text" style={{fontWeight:"bold"}}>{props.obj[9]}</p>
          </div>
          <ul class="list-group list-group-light list-group-small">
            <li class="list-group-item px-4"><span class="badge rounded-pill badge-primary">{props.obj[3]} <span class="badge rounded-pill badge-light m-1" style={{fontSize:"15px"}}>{props.obj[6]} Wear </span></span></li>
            <li class="list-group-item px-4"><span style={{fontWeight:"bold"}}> Year: </span> {props.obj[7]},<span style={{fontWeight:"bold"}}> Usage:</span> {props.obj[8]}</li>
          </ul>
          <span style={{top:"25px", left:"250px"}} class="position-absolute translate-middle badge rounded-pill">
              <span class="badge rounded-pill badge-light" style={{fontSize:"15px"}}>{props.obj[5]}</span>
          </span>

          <span style={{top:"30px", left:"25px"}} class="position-absolute translate-middle badge rounded-pill">
            <i class="fa fa-3x fa-tint" aria-hidden="true" style={{color:props.obj[5]}}></i>
          </span>

          <span style={{top:"360px", left:"140px"}} class="position-absolute translate-middle badge rounded-pill">
              <span class="badge rounded-pill badge-light" style={{fontSize:"15px",backgroundColor:"#011542",color:"white"}}>{props.obj[4]}</span>
          </span>

          <div class="card-body">
            <a href="#" class="m-2 btn btn-success p-2">Add to cart</a>
            <a href="#" class="m-2 btn btn-warning p-2">Buy Now</a>
          </div>
      </div>
    </div>
  )
}
