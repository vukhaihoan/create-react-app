import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [date, setDate] = useState(null);
    useEffect(() => {
        async function getDate() {
            const res = await fetch("/api/date");
            const newDate = await res.text();
            setDate(newDate);
        }
        getDate();
    }, []);
    return (
        <main>
            <p>{date ? date : "Loading date..."}</p>
        </main>
    );
}

export default App;
