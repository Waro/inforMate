var myHeaders = new Headers();
myHeaders.append("Api-key", "27ce8dd65b9c2c59e49624eea0d1426e");
myHeaders.append("X-Signature", "813e48b616c075f56ebd1e69d4c13b4927cb4490aa321c2e9bae79e67eba2e99");
myHeaders.append("Accept", "application/json");
myHeaders.append("Accept-Encoding", "gzip");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			hotels: [], //All hotels info
			resturants: [],  //All resturants info
			card: []		
		},
		actions: {
			getHotelData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false", settings);
				const json = await request.json();
				const data = json;
				setStore({ hotels: data.results });
			},
			getHotelDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ card: [...store.card, data.result.properties] });
			},

			charDescription: url => {
				getActions().getCharacterDescription(url);
			},
		}
	};
};

export default getState;
