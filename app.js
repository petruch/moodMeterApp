function logMood(mood) {
    const log = document.getElementById('log');
    const entry = document.createElement('div');
    entry.textContent = `${new Date().toLocaleTimeString()} - ${mood}`;
    log.prepend(entry);
}
