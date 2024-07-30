import React from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const sections = [
  {
    title: "Fests",
    items: ["e-cell ent-cell", "CC-Engi", "Aarambh", "Yuvaan"],
  },
  {
    title: "Seminars",
    items: ["Tech-seminars", "CC-Engi", "Aarambh", "Yuvaan"],
  },
  {
    title: "Fests",
    items: ["e-cell ent-cell", "CC-Engi", "Aarambh", "Yuvaan"],
  },
];

const items = [
  {
    Name: "Instagram",
    icon: FaInstagramSquare,
    Link: "https://www.instagram.com/md.altabs?igsh=MTA4aDI2OGwzbHBncg==",
  },
  {
    Name: "Linkedin",
    icon: FaLinkedin,
    Link: "https://www.linkedin.com/in/mohammad-altab-43110822a",
  },
  {
    Name: "Twitter",
    icon: FaTwitter,
    Link: "https://x.com/AltabAl32459?t=rE2InXlQ52BExMJweboayQ&s=08",
  },
  {
    Name: "Github",
    icon: FaGithub,
    Link: "https://github.com/altab01",
  },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-600 text-white py-2 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="py-1 text-gray-400 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))
        
        }
         <div className="col-span-2 pt-8 md:pt-2">
        <p className="font-bold uppercase">Subscribe to our newsletter</p>

        <p className="py-4">Here you will get the all details of events happening in dtu</p>
            <form className= " flex flex-col sm:flex-row" action="
            ">
                <input type="Email" placeholder="Enter email address" className="w-full text-black p-2 mr-4 rounded-md mb-4"/>

                <button className="p-2 mb-4 text-gray-400 hover:text-white">
                    Subscribe
                </button>
            </form>
    
     </div>

      </div>


    
      <div className="flex justify-center space-x-4 py-4 ">
        {items.map((item, index) => (
          <a key={index} href={item.Link} target="_blank" rel="noopener noreferrer" className="text-xl  text-gray-400 hover:text-white">
            <item.icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
