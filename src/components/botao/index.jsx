import './Botao.css';

export const Botao = (props) => {
    return ( 
        <button className="botao"> {props.children} </button>

     );
}