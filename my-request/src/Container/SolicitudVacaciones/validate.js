export default values => {
  const errors = {};
  const requiredFields = [
    'startDate',
    'endDate'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'La solicitud Requiere este campo';
    }
  });
  return errors;
};
