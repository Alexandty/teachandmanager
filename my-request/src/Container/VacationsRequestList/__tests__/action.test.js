import axios from 'axios'
jest.mock('axios')
import { loadRequestVacation } from './../action';

describe('Testing VacationRequestList action', () => {
    it('should call loadRequestVacation and resolve', async () => {
        const dispatch = jest.fn();
        const user = 'JJ';
        axios.get.mockReturnValue(new Promise((resolve) => resolve(user)))

        await loadRequestVacation(user)(dispatch);

        expect(axios.get).toHaveBeenCalledWith("http://localhost:8081/solicitud/vacaciones/consultar/" + user)
        expect(dispatch).toHaveBeenCalledWith({ type: 'REPLACE_PRODUCTS' })
    });
});