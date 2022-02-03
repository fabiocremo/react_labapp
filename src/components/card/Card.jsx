import React from "react";
import './card.css';
import star from '../../assets/star.png';

export default function Card(props) {
    function abc () {
      console.log('abc')
    }
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card" onClick={abc}>
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={props.coverImg} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From €{props.price}</span>
            </p>
        </div>
    )
}