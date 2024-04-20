import axios from 'axios';

const URL_TARJETAS = 'https://gist.githubusercontent.com/CastroJC7/17687410f12d367e0e0814ba36471c07/raw/dfd057ef986afcc1317ba22f125d585fd4eb6f25/tarjetas';

export const getCreditCards = async () => {
  try {
    const response = await axios.get(URL_TARJETAS);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las tarjetas:', error);
    return [];
  }
};