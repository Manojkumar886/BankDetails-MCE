import axios from 'axios';

export let Displayall=async()=>
{
    // alert("axios called")
    const url="http://localhost:2020/list";  
    const temp=await axios.get(`${url}`);
    console.log(temp.data)
    return temp;
}

export let createbankaccount=async(object)=>
{
    const url="http://localhost:2020/new";
    const temp=await axios.post(`${url}`,object);
    return temp;
}
