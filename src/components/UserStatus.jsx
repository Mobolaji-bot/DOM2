

const UserStatus = (props) => {
 if(props.loggedIn && props.IsAdmin){
    return <h1>Welcome Admin</h1>
 }else{
    return <h1>Welcome users</h1>
 }
}

export default UserStatus
