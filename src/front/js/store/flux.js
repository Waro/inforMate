
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			hotels: [], //All hotels info
			resturants: [],  //All resturants info
		},
		actions: {
			getResturant: async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
			
				const request = await fetch("https://foodbukka.herokuapp.com/api/v1/restaurant", requestOptions);
				const json = await request.json();
				const data = json;
				console.log(data)
				setStore({ resturants: data.Result });
			},
			
		}
	};
};

export default getState;
