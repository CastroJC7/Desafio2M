// utils/currency.js
export const formatCurrency = (amount) => {
  // Redondeamos el monto a dos decimales
  const roundedAmount = Math.round(amount * 100) / 100;
  
  // Convertimos el monto a una cadena de texto
  const formattedAmount = roundedAmount.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 2,
  });

  return formattedAmount;
};
