import {use, useState} from 'react'

const ListRender = () => {

  const [list] = useState(["Matheus", "Ryan", "Léticia", "Julia"])

  const [users, setUsers] = useState([
    {id: 1, name: "Ryan", age: 21},
    {id: 2, name: "Sebastião", age: 70},
    {id: 3, name: "Rafael", age: 40},
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter(((user) => randomNumber !== user.id))
    });
  }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  )
}

export default ListRender