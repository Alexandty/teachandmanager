export default values => {
  const errors = {};
  const requiredFields = [
    'startDate',
    'endDate'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'La solicitud requiere este campo';
    }
  });
  return errors;
};