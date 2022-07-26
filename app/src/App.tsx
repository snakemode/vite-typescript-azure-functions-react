import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
    const [apiData, setApiData] = useState({});

    useEffect(() => {
        (async () => {
            const result = await fetch('/api/hello');
            const data = await result.json();
            setApiData(data);
        })();
    }, []);

    return (
        <div className="App">
            <header role="header" className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    API Data: {JSON.stringify(apiData)};
                </p>
            </header>
        </div>
    )
}
