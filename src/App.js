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
            <h1>Create React App + Go API</h1>
            <h1>Oke em tới đây đi em yêu</h1>
        </main>
    );
}

export default App;
