function calculateThirdValue(value1, value2) {
    return Math.max(0, Math.min(100, 200 - value1 - value2));
}

function determineControlledSliders(prevControlled, changedSlider) {
    if (!prevControlled.includes(changedSlider)) {
        if (prevControlled.length >= 2) {
            return [prevControlled[1], changedSlider];
        }
        return [...prevControlled, changedSlider];
    }
    return prevControlled;
}
