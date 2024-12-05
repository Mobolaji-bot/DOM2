import {useState} from 'react'

const Profile = () => {
const [profile, setProfile] = useState({
    name:"",
    age: ""
})

const change = (e) => {
    const{name,value} = e.target
    setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value, 
    }
    ))
}




  return (
    <section>
      <h1>Michael</h1>
      <form>
        <label>Name:
            <input type="text" name="name" value={profile.name} onChange={change}/>
        </label>
      </form>

      <section>
        <label>Age
             <input type="text" name="age" value={profile.age} onChange={change} />
        </label>
      </section>

<h3>Profile Info</h3>
<p>Name:{profile.name}</p>
<p>Age:{profile.age}</p>
    </section>
  );
}

export default Profile
