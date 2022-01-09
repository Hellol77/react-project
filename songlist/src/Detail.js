/* eslint-disable */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";




function Detail(props) {
  let { id } = useParams();
  
  let history = useNavigate();
  return (
    <div className="container">
      <div className='detailTitle'>
        <h1>Song Information</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={props.data[id].img}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.data[id].저작물명}</h4>
          <p>{props.data[id].아티스트명}</p>
          <button className="btn btn-danger">YouTube</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}



function Info(props){
  return (
  <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail;
