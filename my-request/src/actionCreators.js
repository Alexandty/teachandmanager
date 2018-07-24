import axios from 'axios';



const _loadProducts = (VacationData) => ({
  type: 'REPLACE_PRODUCTS',
  VacationData
});


const loadProducts = () => {
  return dispatch => {
    return axios.get("http://localhost:8081/solicitud/consultar/todo" )
      .then(response => {      
        console.log("datos", response);
        dispatch( _loadProducts(response.data) );
      });


  };
};

export { loadProducts};
