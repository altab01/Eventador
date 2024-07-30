import React from "react";
const Hero = () =>{

return(
<>

<main className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen">
    <div>


     <img src="my-project\src\assets\dtu bg.jpg" alt="" />

    <div className="text-center font-extrabold text-7xl pt-6 ml-10 mt-20 ">
        <h1>DTU EVENTADORE</h1>
    </div>
 
<div className="flex items-center justify-center mt-10">
 <div className=" text-center max-w-md ">
      <p>Hye Mohammad altab is here the developer of this event discription website here you can get information about dtu's present and past events at one place. This can save your time by 80%. Now keep surfing i am signing off</p>
 </div>

 </div>
   <div className="text-center py-5 my-5">    <form action="search">
        <input type="search" className="border border-grey-400 rounded-3xl w-64 px-3 py-2" placeholder="search about dtu events"></input>
       </form>
       </div>


    </div>
</main>
</>

    
);
}

export default Hero
