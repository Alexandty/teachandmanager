import axios from 'axios';


const _loadProducts = (VacationData) => ({
  type: 'REPLACE_PRODUCTS',
  VacationData
});


const loadProducts = () => {
  return dispatch => {
    return axios.get("http://localhost:8081/request/request/1"  )
      .then(response => {
        console.log(response.data);
        dispatch( _loadProducts(response.data) );
      });
  };
};




export { loadProducts};
