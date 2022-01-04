import { combineReducers } from "redux";

import healthReducer from "./healthReducer";
import techReducer from "./techReducer";
import scienceReducer from "./scienceReducer";
import sportsReducer from "./sportsReducer";
import businessReducer from "./businessreducer";
import homeReducer from "./homeReducer";
import worldReducer from "./worldReducer";

const rootReducer = combineReducers({
  business: businessReducer,
  health: healthReducer,
  home: homeReducer,
  science: scienceReducer,
  sport: sportsReducer,
  tech: techReducer,
  world: worldReducer,
});

export default rootReducer;
