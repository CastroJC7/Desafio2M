// utils/validation.js
import * as Yup from 'yup';

export const expenseValidationSchema = Yup.object().shape({
  description: Yup.string().required('La descripción es obligatoria'),
  amount: Yup.number().required('El monto es obligatorio').min(0, 'El monto no puede ser negativo'),
});