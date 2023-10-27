import './Login.scss'
import { useState, useEffect } from "react";

function Error()
{
    return(
        <div className='root'>
            <div style={{width:"100%",backgroundColor:"red", display:"flex", justifyContent:"center"}}>
                <p>Wrong Data Entered.<br></br>Please Try Again.</p>
            </div>
        </div>
    );
}

export default Error;