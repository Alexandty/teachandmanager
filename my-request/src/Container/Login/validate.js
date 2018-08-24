export default values => {
  const errors = {};
  const requiredFields = [
    'username',
    'password'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo(s) requerido(s)';
    }
  });
  return errors;
};