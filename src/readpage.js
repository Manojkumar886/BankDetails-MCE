import 'bootstrap/dist/css/bootstrap.min.css'
import {  useEffect, useState } from 'react';
import { readoneaccountdetails } from './connect';
import { useParams } from 'react-router';
export let Readpage=()=>
{
    const [customervalues,setCustomervalues]=useState({})
    const {acc_number}=useParams(); 
    
    useEffect(()=>
    {
        getoneaccdetails();
    })

    const getoneaccdetails=async()=>
    {
        const temp=await readoneaccountdetails(acc_number);
        setCustomervalues(temp.data);
    }
    
    return(
        <>
        <div className="container row justify-content-center">
            <div className="card col-lg-8 col-md-10 col-sm-12 bg-secondary">
                <div className="card-body text-center ">
                    <h1>{customervalues.acc_number}</h1>
                    <h1>{customervalues.acc_holder}</h1>
                    <h1>{customervalues.acc_bal}</h1>
               </div>
            </div>           
        </div>

        </>
    );
}