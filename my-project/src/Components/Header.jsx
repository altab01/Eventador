

import React from "react";
import { Link } from "react-router-dom";
const Header = () => {

const NavMenu  = [ 
{
    id: 1,
    title: "Home",
    path:'/',
    delay:0.1,

},
{
    id: 2,
    title: "Events",
    path:'/Events',
    delay:0.2,

},
{
    id: 3,
    title: "Engi",
    path:'/Engi',
    delay:0.3,

},
{
    id: 4,
    title: "Contactus",
    path:'/Contactus',
    delay:0.4,

},

]
    return(
        <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 ">
        <div className=" flex justify-center">
     

       <ul className="flex gap-6">
      
      {

        NavMenu.map((menu) => {

            return(
<li
    key = {menu.id}
    className = "nav-menu"
    data-delay = {menu.delay}
    >

    <Link to = {menu.path} className="inline-block px-2 py-2">{menu.title}</Link>
</li>

            );
        })
       }

</ul>


<button className=""></button>
      
        </div>
        </nav>
    );
}


export default Header;