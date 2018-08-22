import axios from 'axios'
jest.mock('axios')
import action from './../action';

describe('Testing VacationRequestList action', () => {
    it('should call loadRequestVacation resolve', async () => {
        const dispatch = jest.fn();
        const user = 'JJ';
        axios.get.mockReturnValue(new Promise((resolve) => resolve(values)))

        await action.consultar(values)(dispatch);

        expect(axios.get).toHaveBeenCalledWith("http://localhost:8081/solicitud/vacaciones/consultar/"
        , values)

    });
});