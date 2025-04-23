import {use, useState} from 'react'

const ListRender = () => {

  const [list] = useState(["Matheus", "Ryan", "Léticia", "Julia"])

  const [users] = useState([
    {id: 1, name: "Ryan", age: 21},
    {id: 815611, name: "Sebastião", age: 70},
    {id: 8783021, name: "Rafael", age: 40},
  ]);

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
    </div>
  )
}

export default ListRender