import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
    const [user, setUser] = React.useState("ann");

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login";
    }, [user]);

    if (!user) {
        return <Login setUser={setUser} />;
    }

    return (
        <div>
            <Header user={user} setUser={setUser}/>
        </div>
    )
}

export default App;