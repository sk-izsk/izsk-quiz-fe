import { AccountResponse } from '../api/response';
import account, { Account, addUser, removeUser } from './accountSlice';

const initialState: Account = {
  isLoggedIn: false,
};

interface Payload {
  user: AccountResponse;
}

describe('account reducer', () => {
  it('should handle initial state', () => {
    expect(account(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle add user', () => {
    expect(
      account(initialState, {
        type: addUser.type,
        payload: {
          email: 'mock email',
          nickName: 'mock nick name',
          quizHistory: [
            {
              correctAnswer: 2,
              totalQuestion: 4,
              title: 'mock title',
              type: 'mock type',
              date: new Date(2017, 10, 6),
            },
          ],
        } as Payload['user'],
      }),
    ).toEqual({
      isLoggedIn: true,
      user: {
        email: 'mock email',
        nickName: 'mock nick name',
        quizHistory: [
          {
            correctAnswer: 2,
            totalQuestion: 4,
            title: 'mock title',
            type: 'mock type',
            date: new Date(2017, 10, 6),
          },
        ],
      },
    });
  });

  it('should handle remove user', () => {
    expect(
      account(
        {
          isLoggedIn: true,
          user: {
            email: 'mock email',
            nickName: 'mock nick name',
            quizHistory: [
              {
                correctAnswer: 2,
                totalQuestion: 4,
                title: 'mock title',
                type: 'mock type',
                date: new Date(2017, 10, 6),
              },
            ],
          },
        },
        {
          type: removeUser.type,
          payload: {},
        },
      ),
    ).toEqual(initialState);
  });
});
