import React, { useCallback } from "react";
import { useState} from 'react'
import {Link} from 'react-router-dom'

function SellerSingup(){
    const [gstin,setGstin] = useState('')
    const [approvalstate,setApprovalstate] = useState('')
    function checkGstin(){
        fetch(`http://localhost:4000/checkSeller/${gstin}`)
        .then(res=>res.json())
        .then(data=>{
            setApprovalstate(data.message)
        })
        .catch(err=>console.log("err",err))
    }
    return(
        <div>
            <h1>Seller Singup</h1>
            <input type="text" placeholder="Enter GSTIN" name="gstin" onChange={(e)=>{setGstin(e.target.value)}}/>
            <button onClick={checkGstin}>Check</button>
            {
                approvalstate==='approved'&&(
                    <div>
                        <input type="text" placeholder="Enter your new password" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="confirm your new password" />
                    </div>
                )
            }
            {
                approvalstate==='please apply' && <Link to='/addSeller'>Click here to apply as a seller</Link>
            }
            {
                approvalstate==='please wait for approval' && <h1>Please wait for approval</h1>
            }
        </div>
    )
}
export default SellerSingup