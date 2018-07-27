import React from 'react';
import { connect } from 'react-redux';
import { Table, Label } from 'react-bootstrap';


const RequestVacationList = ({VacationData, user}) => {
  console.log(VacationData);
  
  return (
    <div>
     {user.name} {user.lastName} <Label bsStyle="success">fecha de ingreso a la empresa{user.entryDate}</Label>
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
          .sort((productA,productB) => {
            if(productA===productB) return 1
            else if(productA < productB) return -0
            else return 0
          })
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

export default connect(mapStateToProps)(RequestVacationList);
