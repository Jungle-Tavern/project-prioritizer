function Slider({ label, value, onChange, disabled }) {
    try {
        return (
            <div className="mb-6" data-name="slider-wrapper">
                <div className="flex justify-between mb-2" data-name="slider-header">
                    <label className="text-sm font-medium text-gray-700" data-name="slider-label">
                        {label}
                    </label>
                    <span className="text-sm text-gray-500" data-name="slider-value">
                        {Math.round(value)}%
                    </span>
                </div>
                <div className="relative pt-1" data-name="slider-input-wrapper">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        disabled={disabled}
                        className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:slider-track [&::-webkit-slider-thumb]:slider-handle [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:-mt-2 relative z-10"
                        data-name="slider-input"
                    />
                    <div className="slider-track absolute w-full top-1/2 -translate-y-1/2" data-name="slider-track">
                        <div 
                            className="slider-track-filled" 
                            style={{ width: `${value}%` }}
                            data-name="slider-track-filled"
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Slider component error:', error);
        reportError(error);
        return null;
    }
}
