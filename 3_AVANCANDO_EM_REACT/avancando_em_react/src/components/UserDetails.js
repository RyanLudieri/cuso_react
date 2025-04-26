
const UserDetails = ({name,age,profession}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>

      {age >= 18 ? 
      (<p>O usuário {name} pode tirar carteira de habilitação!</p>) : 
      (<p>O usuário {name} não pode tirar carteira de habilitação, pois é menor de idade!</p>)}
    </div>
  )
}

export default UserDetails