import { saveScoreCard, getScoreCard, resetLocalStorage } from './Services';

const testScoreCard = {
    tie: 8,
    players: [
        { points: 4, name: 'Player 1', mark: 'O', key: 'playerOne' },
        { points: 10, name: 'Player TWO', mark: 'X', key: 'playerTwo' },
    ],
};

beforeEach(() => {
    resetLocalStorage();
});

describe('The save service', () => {
    it('can save and retrieve a score card without mutation', () => {
        const localStorageId = 'test-score-card';
        saveScoreCard(testScoreCard, localStorageId);
        const scoreCardFromService = getScoreCard(localStorageId);
        expect(scoreCardFromService).toEqual(testScoreCard);
    });
});
