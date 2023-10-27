import './Login.scss'
import { useState, useEffect } from "react";

function Success()
{
    return(
        <div className='root'>
            <div style={{width:"100%",backgroundColor:"green", display:"flex", justifyContent:"center"}}>
                <p>Correct Credentials</p>
            </div>
        </div>
    );
}

export default Success;