import React from 'react'
import { useLoaderData } from 'react-router-dom'
//this is another method for accessing parameters from the url
//import { useParams } from 'react-router-dom'

const JobDetails = () => {

    //const {id} = useParams();
    const jobDetails = useLoaderData();


  return (
    <div className='job-details'>
        <p><b>Job Title:</b>{jobDetails.title}</p>
        <p><b>Salary :</b>{jobDetails.salary}</p>
        <p><b>Job Location :</b>{jobDetails.location}</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/"+ id);
    if(!res.ok){
        throw Error("Could not found job details");
    }
    return res.json();

}