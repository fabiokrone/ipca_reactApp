import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=01/01/2000&dataFinal=31/12/2100'

});

export default api;
