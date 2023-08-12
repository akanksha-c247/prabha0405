import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Create.style.scss';

interface UpdateUser {
  // id: string | undefined,
  // name:string,
  // username:string,
  // email:string
  id: number,
  name?: string,
  username?: string,
  email?: string
}

export const Update = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [updateUser, setUpdateUser] = useState<UpdateUser>({
    id: 0,
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('alluser') || '[]')
    const userEdit = allUsers.find((user: any) => user.id === (id));
    
    if (userEdit) {
      setUpdateUser(userEdit);
    }

  }, [id])

  const handleEdit = (id: number) => {
    const allUsersString = localStorage.getItem('alluser') || "[]";
    console.log(allUsersString,'getting data')
    const allUsers: UpdateUser[] = JSON.parse(allUsersString);
    const updatedUsers = allUsers.map((user: UpdateUser) =>
      user.id === (id) ? updateUser : user
    );
    localStorage.setItem('alluser', JSON.stringify(updatedUsers));
    navigate('/');
  }


  return (
    <div className='form-container'>
      <form className='form-container'>
        <div>
          <label htmlFor='id'>Id  :</label>
          <input type="number" value={updateUser.id} />
        </div>
        <div>
          <label htmlFor="name">Name  :</label>
          <input type="text" value={updateUser.name} />
        </div>
        <div>
          <label htmlFor="username">Username  :</label>
          <input type="text" value={updateUser.username} />
        </div>
        <div>
          <label htmlFor="email">Email  :</label>
          <input type="text" value={updateUser.email} />
        </div>
        <div>
          <Link to="/"><input type="button" value="Back" /></Link>
          <input type="submit" value="Edit User" onClick={() => { handleEdit(updateUser.id) }} />
        </div>
      </form>
    </div>
  )
}