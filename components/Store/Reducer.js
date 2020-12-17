//Meu entendimento de Reducer e Context

/**
 * Primeiro, crio esse reducer, com toda configuracao de storage de acordo com a action
 * Segundo, criei um componente chamado Store, que retorna um componente Provider, que ira.... 
 * Criando tambem o contexto e o state inicial do role
 * 
 * Nas outras paginas preciso importar o useContext() e passar o Context criado dentro do Store, depois, passar o type de execucao e payload.
 * https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
 */

const Reducer = (state, action) => {
  switch(action.type) {
    case "SET_USER":
      return {
        ...state, 
        user: action.user
      }

    case "CLEAR":
      return {
        user: false
      };

    default: 
      return state;
  }
}

export default Reducer;
