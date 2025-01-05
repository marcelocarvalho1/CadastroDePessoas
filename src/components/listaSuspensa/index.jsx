import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      
      <label>{props.label}</label>
      <select 
        onChange={(evento) => props.aoAlterado(evento.target.value)} 
        required={props.obrigatorio} 
        value={props.valor}>

        <option value="" disabled>Selecione uma opção</option>

        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>

        ))}
      </select>
    </div>
  );
};
