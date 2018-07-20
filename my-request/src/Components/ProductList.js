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

const ProductList = ({ VacationData }) => {
  return (
    <div style={styles.products}>
      {VacationData.map(product =>
        <div className="thumbnail" style={styles.product} key={product.idRequest}>
          <img src={product.image} alt={product.startDate} />
          <div className="caption">
            <h4>{product.endDate}</h4>
            <h4>{product.requestedDays}</h4>

          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    VacationData: state.VacationData
  };
};


export default connect(mapStateToProps)(ProductList);
