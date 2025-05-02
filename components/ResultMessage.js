function ResultMessage({ selectedToggles }) {
    try {
        const getMessage = () => {
            const toggleSet = new Set(selectedToggles);
            
            if (toggleSet.has('fast') && toggleSet.has('cheap')) {
                return {
                    icon: 'fa-triangle-exclamation',
                    message: 'Fast and Cheap, but not Good',
                    color: 'text-yellow-500'
                };
            } else if (toggleSet.has('fast') && toggleSet.has('good')) {
                return {
                    icon: 'fa-money-bill-wave',
                    message: 'Fast and Good, but not Cheap',
                    color: 'text-green-500'
                };
            } else if (toggleSet.has('cheap') && toggleSet.has('good')) {
                return {
                    icon: 'fa-clock',
                    message: 'Good and Cheap, but not Fast',
                    color: 'text-blue-500'
                };
            }
            
            return {
                icon: 'fa-circle-info',
                message: 'Select any two options',
                color: 'text-gray-400'
            };
        };

        const result = getMessage();

        return (
            <div className="text-center mt-8" data-name="result-container">
                <i className={`fas ${result.icon} text-4xl ${result.color} result-icon mb-4`} data-name="result-icon"></i>
                <p className="text-lg font-medium result-message" data-name="result-text">{result.message}</p>
            </div>
        );
    } catch (error) {
        console.error('ResultMessage component error:', error);
        reportError(error);
        return null;
    }
}
