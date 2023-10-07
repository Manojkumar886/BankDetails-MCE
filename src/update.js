import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useNavigate, useNavigation, useParams } from 'react-router'
import { readoneaccountdetails, updateaccdetails } from './connect';

export let Updatepage=()=>
{
   
    const{acc_number}=useParams();
    const[process,setProcess]=useState({})

    useEffect(()=>
    {
        getoneaccdetails();
    },[])

    const getoneaccdetails=async()=>
    {
        const temp=await readoneaccountdetails(acc_number);
        setProcess(temp.data);
    }

    const track=(getvalue)=>
    {
        const{name,value}=getvalue.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )        
    }
    const update=async()=>
    {
        const temp=await updateaccdetails(acc_number,process)
        return temp;
    }
    return(
        <>
            <div className='container row justify-content-center'>
            <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bank2"></i>Indian Bank Registration</h4>
                <div className="row justify-content-center " >
                    <div className="mt-3">
                                <label className="form-label" >Account Balance</label>
                                <input type="number" 
                                name="acc_bal"
                                onChange={track}
                                value={process.acc_bal}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >account Holder</label>
                                <input type="text" 
                                name="acc_holder"
                                onChange={track}
                                value={process.acc_holder}
                                className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3"   onClick={update}>UPDATE</button>
                        <button className="btn btn-outline-danger col-3 me-3"  type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
        </div>
        </>
    );
}