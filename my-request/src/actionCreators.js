import axios from 'axios';


const _loadProducts = (VacationData) => ({
  type: 'REPLACE_PRODUCTS',
  VacationData
});


const loadProducts = (logo) => {
  console.log("dato", logo)
  return dispatch => {
    return axios.get("http://localhost:8081/request/request/"  )
      .then(response => {
        console.log(response.data);
        dispatch( _loadProducts(response.data) );
      });
  };
};

export { loadProducts};
