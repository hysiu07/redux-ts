import { combineReducers } from "@reduxjs/toolkit";

import { reducerAmount } from "./amount/redux";
import { reducerCount } from "./counter/redux";
import { reducerPosts } from "./posts/containers/redux";
import { reducerUsers } from "./users/containers/redux";

export const rootReducers = combineReducers({
    amount: reducerAmount,
    count: reducerCount,
    posts: reducerPosts,
    users: reducerUsers
})
