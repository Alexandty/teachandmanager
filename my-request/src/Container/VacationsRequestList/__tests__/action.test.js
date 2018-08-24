import axios from 'axios'
jest.mock('axios')
import { loadRequestVacation, cambiarEstado } from './../action';

describe('Testing VacationRequestList action', () => {
    it('should call loadRequestVacation and resolve', async () => {
        const dispatch = jest.fn();
        const user = 'JJ';
        axios.get.mockReturnValue(new Promise((resolve) => resolve(user)))

        await loadRequestVacation(user)(dispatch);

        expect(axios.get).toHaveBeenCalledWith("http://localhost:8081/solicitud/vacaciones/consultar/" + user)
        expect(dispatch).toHaveBeenCalledWith({ type: 'REPLACE_PRODUCTS' })
    });

    it('should call cambiarEstado action and resolve', async () => {
        const dispatch = jest.fn()
        const res = { data: [] };
        const sol = { idRequest: 1 };
        axios.put.mockReturnValue(new Promise((resolve) => resolve(sol)))

        await cambiarEstado(sol)(dispatch);

        expect(axios.put).toHaveBeenCalledWith('http://localhost:8081/solicitud/vacaciones/1', sol)
        expect(dispatch).toHaveBeenCalledWith({ type: 'UPTDATE_REQUEST_VACATION_SOLVERS' })
    });

    it('should call cambiarEstado action and reject', async () => {
        const dispatch = jest.fn()
        const res = "Error";
        const sol = { idRequest: 1 };
        axios.put.mockReturnValue(new Promise((resolve, reject) => reject(res)))

        await cambiarEstado(res)(dispatch);

        expect(axios.put).toHaveBeenCalledWith('http://localhost:8081/solicitud/vacaciones/1', sol)
        expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR', error: "Error" })
    });
});