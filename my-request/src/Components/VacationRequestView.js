import React from 'react';
import { connect } from 'react-redux';

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

const vacationRequest = ({ products }) => {
    return (
        <div style={styles.products}>
            {products.map(VacationData =>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr key={VacationData.idRequest}>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{VacationData.startDate}</td>
                            <td>{VacationData.endDate}</td>
                            <td>{VacationData.request_days}</td>
                        </tr>
                    </tbody>
                </Table>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        VacationRequest: state.VacationRequest
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(vacationRequest);
