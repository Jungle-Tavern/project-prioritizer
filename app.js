function App() {
    try {
        const [selectedToggles, setSelectedToggles] = React.useState([]);

        const handleToggle = (toggleName) => {
            const updatedToggles = updateToggles(selectedToggles, toggleName);
            setSelectedToggles(updatedToggles);
        };

        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" data-name="app-container">
                <div className="max-w-md mx-auto" data-name="content-wrapper">
                    <div className="text-center mb-8" data-name="header">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2" data-name="title">
                            Pick Two Toggles
                        </h1>
                        <p className="text-gray-600" data-name="description">
                            You can only pick two. The third will be disabled automatically.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md" data-name="toggles-container">
                        <Toggle
                            label="Fast"
                            isChecked={selectedToggles.includes('fast')}
                            onChange={() => handleToggle('fast')}
                            icon="fas fa-bolt"
                        />
                        <Toggle
                            label="Cheap"
                            isChecked={selectedToggles.includes('cheap')}
                            onChange={() => handleToggle('cheap')}
                            icon="fas fa-piggy-bank"
                        />
                        <Toggle
                            label="Good"
                            isChecked={selectedToggles.includes('good')}
                            onChange={() => handleToggle('good')}
                            icon="fas fa-star"
                        />

                        <ResultMessage selectedToggles={selectedToggles} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
