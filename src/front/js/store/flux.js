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
      removeItem: async (restaurantToRemove) => {
        const store = getStore();

        const filteredList = store.mytriplist.filter(
          (myt) => myt.id !== restaurantToRemove.id
        );

        const Backend_URL = process.env.BACKEND_URL;

        await fetch(Backend_URL + `/api/restaurants/${restaurantToRemove.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).catch(() => {
          console.log("error");
        });

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
        setStore({ resturants: data.Result });
      },
      addRestaurant: (item) => {
        const Backend_URL = process.env.BACKEND_URL;

        fetch(Backend_URL + "/api/restaurants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(item),
        })
          .catch(() => {
            console.log("error");
          })
          .then((data) => data.json())
          .then((datarestaurant) => {
            console.log(datarestaurant);
          });
      },

      fetchmyTrip: async () => {
        const Backend_URL = process.env.BACKEND_URL;
        const user_id = localStorage.getItem("users_id");

        const triplistAnswer = await fetch(
          Backend_URL + `/api/restaurants/${user_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
          .then((data) => data.json())
          .then((triplist) => triplist);

        setStore({ mytriplist: triplistAnswer.restaurants });
      },
    },
  };
};

export default getState;
