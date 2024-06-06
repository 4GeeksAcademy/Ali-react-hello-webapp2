const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		starships: [],
		planets: [],
		favorites: [],
	  },
	  actions: {
		getPeople: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/people/");
			if (!response.ok) {
			  throw new Error(`${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			setStore({ people: data.results });
		  } catch (error) {
			console.error("Error fetching people:", error);
		  }
		},
		getPersonDetails: async (uid) => {
		  try {
			const response = await fetch(
			  `https://www.swapi.tech/api/people/${uid}`
			);
			if (!response.ok) {
			  throw new Error(`${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			if (data) {
			  return data.result.properties;
			} else {
			  return false;
			}
		  } catch (error) {
			console.error("Error fetching person details:", error);
		  }
		},
		getPlanetDetails: async (id) => {
		  try {
			const response = await fetch(
			  `https://www.swapi.tech/api/planets/${id}`
			);
			if (!response.ok) {
			  throw new Error(`${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			const planetsDetails = {
			  description: data.result.description,
			  properties: { ...data.result.properties },
			};
			setStore({ planetsDetails: planetsDetails });
		  } catch (error) {
			console.error("Error fetching planet details:", error);
		  }
		},
		getVehicles: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/starships/");
			if (!response.ok) {
			  throw new Error(`${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			setStore({ starships: data.results });
		  } catch (error) {
			console.error("Error fetching starships:", error);
		  }
		},
		getPlanets: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/planets/");
			if (!response.ok) {
			  throw new Error(`${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			setStore({ planets: data.results });
		  } catch (error) {
			console.error("Error fetching planets:", error);
		  }
		},
		addFavorite: (item) => {
		  const store = getStore();
		  setStore({ favorites: [...store.favorites, item] });
		},
		removeFavorite: (item) => {
		  const store = getStore();
		  setStore({ favorites: store.favorites.filter((fav) => fav !== item) });
		},
	  },
	};
  };
  
  export default getState;
