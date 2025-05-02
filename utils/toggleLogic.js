function updateToggles(currentToggles, toggleName) {
    const toggleSet = new Set(currentToggles);

    if (toggleSet.has(toggleName)) {
        toggleSet.delete(toggleName);
    } else {
        if (toggleSet.size >= 2) {
            toggleSet.delete([...toggleSet][0]);
        }
        toggleSet.add(toggleName);
    }

    return [...toggleSet];
}
