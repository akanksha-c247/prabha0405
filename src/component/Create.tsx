import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Create.style.scss';

interface formData {
  id: number,
  name?: string,
  username?: string,
  email?: string
}
 interface CreateProps {
  allUsers: any,
  setAllUsers: any
}
export const Create = ({ allUsers, setAllUsers }: CreateProps) => {
  const [formData, setFormData] = useState<formData>({
    id: 0,
    name: "",
    username: "",
    email: ""
  })
  localStorage.getItem('alluser')
  const navigate = useNavigate();
  // console.log(allUsers, setAllUsers,'24')
  // const location = useLocation();
  // const passed = location.state;

  //  to add new user function
  // const handleAddUser =(data: formData)={}
  const handleAddUser = () => {
    const newAllUsers = [...allUsers, formData]
    localStorage.setItem('alluser', JSON.stringify(newAllUsers));
    setAllUsers(newAllUsers)
    
    navigate('/')
  
  }

  // when the user fill the form
  const onInputChanged = (fieldName: any,value:any) => {
    setFormData((prev) => ({...prev,[fieldName]:value}))
  }
  return (

    <div className='form-container'>
      <form className='form-container'>
        <div>
          <label htmlFor='id'>Id  :</label>
          <input type="number" value={formData.id} onChange={(e)=>{onInputChanged('id', e.target.value)}} />
        </div>
        <div>
          <label htmlFor="name">Name  :</label>
          <input type="text" value={formData.name} onChange={(e)=>{onInputChanged('name', e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="username">Username  :</label>
          <input type="text" value={formData.username} onChange={(e)=>{onInputChanged('username', e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="email">Email  :</label>
          <input type="text" value={formData.email} onChange={(e)=>{onInputChanged('email', e.target.value)}}/>
        </div>
        <div>
          <input type="submit" value="Add User" onClick={handleAddUser} />
          <Link to="/"><input type="button" value="Back" /></Link>
        </div>
      </form>
    </div>
  )
}
