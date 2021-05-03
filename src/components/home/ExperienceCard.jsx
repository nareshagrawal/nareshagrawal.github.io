import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
            <div className="text-center">
                <a href="https://www.intralinks.com/" target=" _blank">
                    <img className=" bg-white mb-3 w-25 p-3" src={data.companylogo} alt=""/>
                </a>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                    <br/>
                    <br/>
                    <div className="text-justify pl-5 pr-5">
                        {data.content}
                    </div>
                </p>              
            </div>
     );
}
 
export default ExperienceCard;