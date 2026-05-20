import { useState, useEffect } from 'react';

function App() {
    const [inputName, setInputName] = useState('');
    const [savedName, setSavedName] = useState('');

    // Check local storage when the app loads
    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setSavedName(storedName);
        }
    }, []);

    const handleSave = () => {
        if (!inputName.trim()) return;
        localStorage.setItem('userName', inputName);
        setSavedName(inputName);
    };

    const handleDelete = () => {
        localStorage.removeItem('userName');
        setSavedName('');
        setInputName('');
    };

    return (
        <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
            <h1>{savedName ? `Hello, ${savedName}!` : 'Hello, Stranger!'}</h1>

            <div style={{ margin: '20px' }}>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
            </div>

            <button onClick={handleSave} style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>
                Save Name
            </button>

            <button onClick={handleDelete} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white', border: 'none' }}>
                Delete Name
            </button>
        </div>
    );
}

export default App;