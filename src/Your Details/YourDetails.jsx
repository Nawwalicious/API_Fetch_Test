function YourDetails(props) {
    return ( 
        <div>
            <h3>Your Details:</h3><br></br>
            <span>Name:{props.userDetails[0].name}</span><br></br>
            <span>Name:{props.userDetails[0].email}</span><br></br>
            <span>Name:{props.userDetails[0].password}</span><br></br>
        </div>
     );
}

export default YourDetails;