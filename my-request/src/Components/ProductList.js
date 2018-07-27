import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


const ProductList = ({VacationData, user}) => {
  console.log(VacationData);
  
  return (
    <div>
     {user.name} {user.lastName}
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Fecha de nicio</th>
            <th>Fecha de Fin</th>
            <th>Dias solicitados</th>
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
    ...state.reducer
  };
};

export default connect(mapStateToProps)(ProductList);
