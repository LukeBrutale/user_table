import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/userService";

export interface CounterState {
  users: User[];
  filters: {
    phone: string;
    email: string;
    name: string;
    username: string;
  };
}

const initialState: CounterState = {
  users: [],
  filters: {
    phone: "",
    email: "",
    name: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setFilter: (state, action: PayloadAction<{ type: keyof CounterState["filters"]; value: string }>) => {
      const { type, value } = action.payload;
      state.filters[type] = value;
    },
  },
});

export const selectFilteredUsers = createSelector(
  (state: CounterState) => state.users,
  (state: CounterState) => state.filters,
  (users, filters) => {
    const { phone, email, name, username } = filters;
    return users.filter(user => user.phone.toLowerCase().includes(phone.toLowerCase()) && user.email.toLowerCase().includes(email.toLowerCase()) && user.name.toLowerCase().includes(name.toLowerCase()) && user.username.toLowerCase().includes(username.toLowerCase()));
  },
);

export const { setUsers, setFilter } = userSlice.actions;

export default userSlice.reducer;

export type FilterType = keyof CounterState["filters"];
