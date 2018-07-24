import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const ProductList = ({ VacationData }) => {
  return (
    <div>
     {VacationData.map(prod => 
      prod.personId)
      .map(person => person.name +" "+ person.lastName+ " "+person.entryDate)}
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
};

export default connect(mapStateToProps)(ProductList);
