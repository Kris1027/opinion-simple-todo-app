export const addDate = new Date().toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

export const addTime = new Date().toLocaleTimeString('pl-PL', {
    hour: '2-digit',
    minute: '2-digit',
});

export const getDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
