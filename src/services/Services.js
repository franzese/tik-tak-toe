export function saveScoreCard(scoreCard, key = 'scoreCard') {
    return localStorage.setItem(key, JSON.stringify(scoreCard));
}

export function getScoreCard(key = 'scoreCard') {
    const ls = JSON.parse(localStorage.getItem(key));
    if (ls) return ls;
    return false;
}

export function resetLocalStorage() {
    localStorage.clear();
}
