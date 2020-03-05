import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH_CHANGE,
  RATING_CHANGE
} from "../types";

const initialState = {
  movies: [
    {
      id: "joker",
      title: "joker",
      rating: "4",
      image: "https://www.dw.com/image/50340387_303.jpg",
      desc:
        "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character."
    },
    {
      id: "sonic",
      title: "sonic",
      rating: "5",
      image: "https://i.ytimg.com/vi/lDfHbfVS8kI/maxresdefault.jpg",
      desc:
        "Sonic tries to navigate the complexities of life on Earth with his newfound best friend -- a human named Tom Wachowski. They must soon join forces to prevent the evil Dr. Robotnik from capturing Sonic and using his powers for world domination."
    },
    {
      id: "venom",
      title: "venom",
      rating: "3",
      image:
        "https://wegotthiscovered.com/wp-content/themes/wgtc_v2/resizer/resizer.php?file=uploads/2018/08/Venom-JP-poster-2-640x321.jpg&height=650&width=1219.1489361702&action=resize",
      desc:
        "Venom is a 2018 American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel and Tencent Pictures. Distributed by Sony Pictures Releasing, it is the first film in Sony's Marvel Universe."
    }
  ],
  searchInput: "",
  ratingInput: "0"
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };

    case EDIT_MOVIE:
      console.log("action.payload", action.payload);
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id ? { ...action.payload } : el
        )
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        searchInput: action.payload
      };
    case RATING_CHANGE:
      return {
        ...state,
        ratingInput: action.payload
      };
    default:
      return state;
  }
};
export default movieReducer;
