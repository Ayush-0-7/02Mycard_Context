import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { NameContext } from './Layout';

const Home = () => {
    const {setName} = useContext(NameContext);
    const {setAge} = useContext(NameContext);
    const {setMail} = useContext(NameContext);


    function cred(e){
      e.preventDefault();
      const username = document.getElementById('name');
      const age = document.getElementById('twitter');
      const email = document.getElementById('email');
      console.log(username.value)
      console.log(age.value)

      setName(username.value);
      setAge(age.value);
      setMail(email.value);
      username.value=" ";
      age.value=null;
      email.value=" ";



    }
  return (
    <div>


          <div className="bg-blue-200 min-h-screen flex items-center">
   <div className="w-full">
     <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
     <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form action="" onSubmit={cred}>
         <div className="mb-5">
           <label for="name" className="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"
           />
         </div>

         <div className="mb-5">
           <label for="twitter" className="block mb-2 font-bold text-gray-600">Age</label>
           <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." className="border border-red-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label for="email" className="block mb-2 font-bold text-gray-600">Email</label>
           <input type="text" id="email" name="email" placeholder="Enter your email" className="border border-gray-300 shadow p-3 w-full rounded mb-"
           />
         </div>

         <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" >Submit</button>
       </form>
     </div>
   </div>
 </div>
        
    </div>
  )
}

export default Home