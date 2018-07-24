import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

const ProductList = ({ VacationData }) => {
  console.log("Datos del Vacation productLsit", VacationData);
  return (
    <div>
     {VacationData.map(prod => 
      prod.personId)
      .map(person => person.name +" "+ person.lastName)}
    <p>La persona a la que hay llamado no está</p>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Fecha de nicio</th>
            <th>Fecha de Fin</th>
            <th>Last Name</th>
          </tr>
        </thead>

        <tbody>
          {VacationData
          .map(product =>
            <tr key={product.idRequest}>
              <td>{product.startDate}</td>
              <td>{product.endDate}</td>
              <td>{product.requestedDays}</td>              
            </tr>
          )}
        </tbody>

      </Table>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    VacationData: state.reducerLogin.VacationData
  };
  console.log("State del productList", state.reducerLogin.products);
};

export default connect(mapStateToProps)(ProductList);
