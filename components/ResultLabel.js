function ResultLabel({ quality, speed, cost }) {
    try {
        const getDescription = () => {
            const highThreshold = 70;
            const lowThreshold = 30;
            
            const high = [];
            const low = [];
            
            if (quality >= highThreshold) high.push('High Quality');
            if (speed >= highThreshold) high.push('Fast');
            if (cost >= highThreshold) high.push('Expensive');
            
            if (quality <= lowThreshold) low.push('Low Quality');
            if (speed <= lowThreshold) low.push('Slow');
            if (cost <= lowThreshold) low.push('Cheap');
            
            if (high.length >= 2) {
                return `You chose ${high.join(' + ')} → ${low[0] || 'Compromised Value'}`;
            } else if (low.length >= 2) {
                return `You chose ${low.join(' + ')} → ${high[0] || 'Improved Value'}`;
            }
            return 'Adjust any two sliders to see the result';
        };

        return (
            <div 
                className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-700 text-center font-medium result-label"
                data-name="result-label"
            >
                {getDescription()}
            </div>
        );
    } catch (error) {
        console.error('ResultLabel component error:', error);
        reportError(error);
        return null;
    }
}
