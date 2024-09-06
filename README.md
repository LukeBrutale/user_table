## Approach

In the **User Table** project, the key components include state management, filtering, and asynchronous data fetching. The project uses **Redux Toolkit** for managing global state, enabling efficient user filtering based on criteria like name, email, phone, and username. Data is fetched from an external API using **Axios**, and React hooks like `useEffect` and `useState` handle data loading and state updates.

### Key Steps:

1. **API Integration**:  
   Axios is used to fetch user data from an external API.

2. **Global State Management**:  
   Redux is used to store user data and filter states.

3. **Filtering Mechanism**:  
   Filter inputs trigger Redux actions to update filters in the global state.

4. **Table Rendering**:  
   Filtered data is displayed in a table component, which updates dynamically based on user input.
