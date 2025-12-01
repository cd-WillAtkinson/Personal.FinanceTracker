import { useState } from "react";
import TransactionList from "./components/TransactionList.jsx";

function App() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Personal Finance Tracker</h1>
            <TransactionList />
        </div>
    );
}

export default App;

