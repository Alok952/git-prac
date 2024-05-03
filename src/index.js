import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './component/footer';
import Header from './component/header'; // Adjust the
import Note from './component/note';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Card(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <img style={{height:"100px"}} src={props.image} alt="picture"/>
      <p>{props.telephone}</p>
      <p>{props.email}</p>
    </div>
  )
}
root.render(
  <div>
    <Header />
   <Note />
   <Card
   name="hritik"
   image="https://assets.gqindia.com/photos/5fdc6eb81c519f6c10ba2d2f/16:9/w_2560%2Cc_limit/Hrithik-Roshan%2520(2).jpg"
   telephone="12-45-67-6676"
   email="hritik@gmail.com" 
   />
    <Card
   name="akshay"
   image="https://img.etimg.com/thumb/width-1200,height-900,imgsize-26480,resizemode-75,msid-104366975/news/india/my-films-were-not-doing-well-when-akshay-kumar-had-decided-to-do-cargo-business-in-canada.jpg"
   telephone="12-45-67-6676"
   email="akshay@gmail.com" 
   />
    <Card
   name="rajkumar"
   image="https://www.koimoi.com/wp-content/new-galleries/2020/07/rajkummar-rao-shares-glimpse-from-his-salon-visit-amid-pandemic-001.jpg"
   telephone="12-45-67-6676"
   email="rajkumar@gmail.com" 
   />
    <Footer />
  </div>
);
