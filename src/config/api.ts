export const heading: string = "currency exchanger";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "8202455168321bd6a22fce2d";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;
