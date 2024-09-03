import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setFilter, FilterType } from "../../store/userSlice";

export default function Filters() {
  const dispatch = useAppDispatch();
  const { phone, email, name, username } = useAppSelector(state => state.user.filters);

  const handleFilterChange = (type: FilterType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ type, value: e.target.value }));
  };

  return (
    <div className="filters_container">
      <input type="text" className="filter" placeholder="Search by name" value={name} onChange={handleFilterChange("name")} />
      <input type="text" className="filter" placeholder="Search by email" value={email} onChange={handleFilterChange("email")} />
      <input type="text" className="filter" placeholder="Search by username" value={username} onChange={handleFilterChange("username")} />
      <input type="text" className="filter" placeholder="Search by phone" value={phone} onChange={handleFilterChange("phone")} />
    </div>
  );
}
