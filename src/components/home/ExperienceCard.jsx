import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
            <div className="pb-5 text-center m-auto">
                <img className=" bg-white mb-3 w-25 p-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                    <br/>
                    {data.content}
                </p>              
            </div>
     );
}
 
export default ExperienceCard;