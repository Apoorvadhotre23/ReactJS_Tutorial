import { useState } from "react";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

function App2() {

    const[search, setSearch] = useState("");
  return (
    <div>
        <h3>Search Function</h3>
        <SearchBox search={search} setSearch={setSearch} />
        <UserList search={search} />
    </div>
  )
}

export default App2