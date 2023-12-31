import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Displayall, deleteaccount } from './connect';
import { useNavigate } from 'react-router';

export let Listallpage=()=>
{
    const navi=useNavigate();
    // conts[getname(variable),setname(FUNCTION)]=useState(initialized)
    const[allvalues,setAllvalues]=useState([]);

    useEffect(async()=>{
        const res=await Displayall()
        setAllvalues(res.data)
    },[])
    return(
        <>
        <div className='text-center bg-success d-flex row justify-content-center mt-3'>
            <div className='col-lg-12 col-md-10 col-sm-12'>
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>Account number</th>
                            <th>Account Holder</th>
                            <th>Account Balance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allvalues.map((data)=>
                            (
                                <tr>
                                    <td>
                                        <a href={`reading/${data.acc_number}`} className='btn btn-outline-primary'>
                                            {data.acc_number}
                                        </a>
                                    </td>
                                    <td>{data.acc_holder}</td>
                                    <td>{data.acc_bal}</td>
                                    <td>
                                        <a href={`updating/${data.acc_number}`} className='btn btn-outline-primary'>UPDATE</a>
                                        <button className='btn btn-outline-danger'
                                        onClick={
                                            async()=>
{
                                                const temp=await deleteaccount(data.acc_number);

                                                alert(temp.data+" has been deleted successfully");
                                                navi("/listall")
                                            }
                                        }>DELETE</button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>

            </div>

        </div>

        </>
    );
}