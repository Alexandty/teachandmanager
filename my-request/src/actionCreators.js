import axios from 'axios';



const _loadProducts = (VacationData) => ({
  type: 'REPLACE_PRODUCTS',
  VacationData
});


const loadProducts = (user) => {
  return dispatch => {
    return axios.get("http://localhost:8081/solicitud/vacaciones/consultar/"+user )
      .then(response => {      
        dispatch( _loadProducts(response.data) );
      });


  };
};

export { loadProducts};
