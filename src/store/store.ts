import { createStore } from "redux";
import rootReducer from "./root-reducer"
import { createWrapper, Context } from 'next-redux-wrapper';

// create a makeStore function
const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});

const store = createStore ( rootReducer )

export default store