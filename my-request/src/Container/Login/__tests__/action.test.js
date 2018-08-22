import axios from 'axios'
jest.mock('axios')
import action from './../action';

describe('Testing action Login', () => {
    it('should login action resolve', async () => {
        const values = { username: 'user', password: 'pass' }
        const dispatch = jest.fn();
        axios.post.mockReturnValue(new Promise((resolve) => resolve(values)))

        await action.login(values)(dispatch);

        expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/login/get/person', values)
        expect(dispatch).toHaveBeenCalledWith({ type: 'LOGIN' })
    });
    it('should login action reject', async () => {
        const values = { username: 'user', password: 'pass' }
        const dispatch = jest.fn();
        const res = {
            response: { data: { message: 'a' } }
        }
        axios.post.mockReturnValue(new Promise((resolve, reject) => reject(res)))

        await action.login(values)(dispatch);

        expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/login/get/person', values)
    });
});