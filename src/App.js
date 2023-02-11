import React from "react";
import Login from "./components/Login";

function App() {
    const user = "";

    if (!user) {
        return <Login />;
    }

    return (
        <div>
            App
        </div>
    )
}

export default App;