import React from "react";
import Faqs from "@/components/Faqs";
import Carousel from "@/components/Carousel";

export default function Home() {
  const data = [
    {
        place:'FENCE SWING GATE',
        title:'GATE',
        title2:'POST',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-1.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'GATE',
        title2:'FRAME',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-2.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'WICKET',
        title2:'GATE FRAME',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-3.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'WELD MESH PANEL',
        title2:'FOR GATE INFILL',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-4.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'COIL SUPPORT',
        title2:'FRAME',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-5.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'PTCC – 850 MM DIAMETER/',
        title2:'16 LOOPS/3.5MM CORE WIRE',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-6.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'TOP AND BOTTOM',
        title2:'HINGES',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-4.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'LOCK/HANDLE',
        title2:'/ALDROP',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-5.jpg'
    },
    {
        place:'FENCE SWING GATE',
        title:'FLAT WRAP (PTCC):610 MM DIAMETER/',
        title2:'10 LOOPS/3.50 MM CORE WIRE',
        description:'',
        image:'https://assets.codepen.io/3685267/timed-cards-6.jpg'
    },
]
  return (
    <div>
      <Carousel />
      <Faqs />
    </div>
  );
}
