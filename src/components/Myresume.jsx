import React, { useContext } from 'react'
import { NameContext } from './Layout';
import './Myresume.css'
const Myresume = () => {
 

  const {name} = useContext(NameContext);
  const {age} = useContext(NameContext);
  const {email} = useContext(NameContext);


  return (
    <div>
     




<header className="flex flex-col lg:flex-row py-16">
  <div className="flex flex-col lg:w-1/2 justify-center items-center mx-auto lg:ml-36">
    <img className="h-64 w-64 shadow-md" src="https://source.unsplash.com/random/?coder" alt="#"  style={{marginRight:50}}/>
    

  <div className="card text-center bg-white rounded-sm shadow-xl w-80 p-4 my-8">
      <h1 className="text-xl font-bold"> {name} </h1>
      <em className="text-base">Front End Developer</em>
    <p className="text-base font-bold">{email}</p>
      
        <div className="mt-4">
          <a href="#"><i className="text-xl fab fa-linkedin pr-4"></i></a>
          <a href="#"><i className="text-xl fab fa-github pr-4"></i></a>
          <a href="#"><i className="text-xl fab fa-codepen pr-4"></i></a>
          <a href="#"><i className="text-xl fas fa-external-a-alt pr-4"></i></a>
      </div>
    
    </div>
  </div>

  <div className="flex flex-col justify-center lg:items-end lg:w-1/2 text-white text-center lg:text-right mt-12 mx-auto lg:mt-0 lg:mr-48 p-4 lg:p-0">
    <h1 className="text-xl font-semibold p-4 lg:p-0 mb-8">Hi, my name is <strong className="text-7xl p-4">{name}</strong></h1>
    <p className="px-8 lg:p-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center lg:justify-end mx-auto lg:mx-0 mt-8 p-8 lg:p-0">
      <button id="view-works" className="text-sm font-semibold rounded shadow-md p-2 mr-8 transition duration-500">View Portfolio</button>
      <button className="bg-transparent text-sm font-semibold rounded shadow-md p-2 transition duration-500"><p>Contact Me</p></button>
    </div>
</div>

</header>

<section id="services" className="h-96">
  
</section>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#40C69F" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,122.7C840,149,960,171,1080,154.7C1200,139,1320,85,1380,58.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

<section id="skills" className="h-96">
  
</section>

<footer className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between mx-auto p-4 h-24 lg:h-16">
  <small className="text-sm pb-4 lg:ml-16">&copy; 2021 <a href='#' className="font-semibold hover:underline">Nikki Peel</a></small>
  <div className="lg:p-0 lg:mr-16">
     <a href="#"><i className="text-xl fas fa-envelope pr-4"></i></a>
          <a href="#"><i className="text-xl fab fa-linkedin pr-4"></i></a>
          <a href="#"><i className="text-xl fab fa-github pr-4"></i></a>
          <a href="#"><i className="text-xl fab fa-codepen"></i></a>
    
      </div>
</footer>
    </div>
  )
}

export default Myresume