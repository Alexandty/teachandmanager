export default values => {
    const errors = {};
    const requiredFields = [
      'motivoIngresado'
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Este campo es requerido';
      }
    });
    return errors;
  };