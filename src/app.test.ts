import * as services from "./service"
import * as actions from './app'

export const asJestMock = <T extends (...args: any) => any>(thing: T) =>
    (thing as unknown) as jest.Mock<ReturnType<T>, Parameters<T>>

jest.mock('./service')
const getUserMock = asJestMock(services.getUsers);

describe('check isFullUser', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })
    it('check is full user with user length > 1', async () => {
        getUserMock.mockResolvedValue(Array.from(Array(10).keys()))
        const result = await actions.isFullUser()
        expect(result).toBe(true);
    })

    it('check is full user with user length <= 1', async () => {
        getUserMock.mockResolvedValue(Array.from(Array(1).keys()))
        const result = await actions.isFullUser()
        expect(result).toBe(false);
    })
})