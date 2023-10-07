import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { createbankaccount } from './connect';

export let Registraion=()=>
{
    const[process,setProcess]=useState({
        "acc_number":0,
        "acc_holder":"",
        "acc_bal":0,
    })

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

    let Register=async()=>
    {
        alert(" welcome to Indian Bank"+JSON.stringify(process))
        let temp=await createbankaccount(process);
        return temp;
    }

    return(
        <>
            <div className="container mt-5" >
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bank2"></i>Indian Bank Registration</h4>
                <div className="row justify-content-center " >
                    <div className="mt-3">
                                <label className="form-label" >Account Number</label>
                                <input type="number" 
                                name="acc_number"
                                onChange={track}
                                value={process.acc_number}
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
                    <div className="mt-3">
                                <label className="form-label" >account Balance</label>
                                <input type="number" 
                                name="acc_bal"
                                onChange={track}
                                value={process.acc_bal}
                                className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3"  onClick={Register} >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );

}