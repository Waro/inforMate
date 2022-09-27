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
      addRestaurant: (item) => {
        const Backend_URL = process.env.BACKEND_URL;

        fetch(Backend_URL + "/api/restaurants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: item.businessname,
            external_api_id: item.id,
            address: item.address,
            typology: item.typology,
            phone: item.phone,
            parking: item.parking,
            image: item.image,
            userid: localStorage.getItem("users_id"),
          }),
        })
          .catch(() => {
            console.log("error");
          })
          .then((data) => data.json())
          .then((datarestaurant) => {
            console.log(datarestaurant);
          });
      },

      fetchmyTrip: async (e) => {
        e.preventDefault();
        const Backend_URL = process.env.BACKEND_URL;

        const triplistAnswer = await fetch(Backend_URL + "/api/mytrip", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((triplist) => triplist);

        setStore({ mytriplist: triplistAnswer });
      },
    },
  };
};

export default getState;
