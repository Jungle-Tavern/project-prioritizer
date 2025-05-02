function Toggle({ label, isChecked, onChange, icon }) {
    try {
        return (
            <div className="flex items-center justify-between p-4 border rounded-lg mb-4" data-name="toggle-container">
                <div className="flex items-center space-x-3" data-name="toggle-label">
                    <i className={`${icon} text-gray-600 text-xl`} data-name="toggle-icon"></i>
                    <span className="text-gray-700 font-medium" data-name="toggle-text">{label}</span>
                </div>
                <label className="toggle-switch" data-name="toggle-switch">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChange}
                        data-name="toggle-input"
                    />
                    <span className="toggle-slider" data-name="toggle-slider"></span>
                </label>
            </div>
        );
    } catch (error) {
        console.error('Toggle component error:', error);
        reportError(error);
        return null;
    }
}
