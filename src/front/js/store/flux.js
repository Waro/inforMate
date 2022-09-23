const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      hotels: [], //All hotels info
      resturants: [], //All resturants info
      mytriplist: [], //hotel and resturants saved
    },
    actions: {
      addItem: (item) => {
        const store = getStore();

        // First we generate a POST request and add the items inside the DB
        // We get the new Id, the old id, the businessname, the url, the image
        // We set the items to the mytriplist store
        const newTripList = [...store.mytriplist, { ...item }];
        setStore({ mytriplist: newTripList });
      },

      removeItem: (restaurantToRemove) => {
        const store = getStore();

        const filteredList = store.mytriplist.filter(
          (myt) => myt.id !== restaurantToRemove.id
        );

        console.log({ restaurantToRemove, filteredList });

        setStore({
          mytriplist: filteredList,
        });
      },

      getResturant: async () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const request = await fetch(
          "https://foodbukka.herokuapp.com/api/v1/restaurant",
          requestOptions
        );
        const json = await request.json();
        const data = json;
        console.log(data);
        setStore({ resturants: data.Result });
      },
      fetchRestaurant = (e) => {
        console.log("test");
        e.preventDefault();
        const Backend_URL = process.env.BACKEND_URL;
    
        fetch(Backend_URL + "/api/restaurant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name : name,
            external_api_id : external_api_id,
            address : address,
            typology : typology,
            phone : phone,
            parking : parking,
            image : image
          }),
        })
          .catch(() => {
            console.log("error");
          })
          .then((data) => data.json())
          .then((datarestaurant) => {
            console.log(datarestaurant);
          });
      };
    },
  };
};

export default getState;
