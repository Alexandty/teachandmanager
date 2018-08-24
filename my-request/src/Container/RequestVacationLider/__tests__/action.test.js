import axios from 'axios'
jest.mock('axios')
import action from './../action';

describe('Testing action requestVacation', () => {
    it('should call obtenerListaSolicitudesSolvers action async - resolve', async () => {
        const dispatch = jest.fn()
        const res = { data: [] };
        axios.get.mockReturnValue(new Promise((resolve) => resolve(res)))

        await action.obtenerListaSolicitudesSolvers("ralzate")(dispatch);

        expect(axios.get).toHaveBeenCalledWith('http://localhost:8081/solicitudlider/vacaciones/consultar/ralzate')
        expect(dispatch).toHaveBeenCalledWith({ type: 'LOAD_REQUEST_VACATION_SOLVERS', list: [] })
    });

    it('should call obtenerListaSolicitudesSolvers action async - reject', async () => {
        const dispatch = jest.fn()
        const res = "Error";
        axios.get.mockReturnValue(new Promise((resolve, reject) => reject(res)))

        await action.obtenerListaSolicitudesSolvers("ralzate")(dispatch);

        expect(axios.get).toHaveBeenCalledWith('http://localhost:8081/solicitudlider/vacaciones/consultar/ralzate')
        expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR', error: "Error" })
    });

    it('should call cambiarEstado action and resolve', async () => {
        const dispatch = jest.fn()
        const res = { data: [] };
        const sol = { idRequest: 1 };
        axios.put.mockReturnValue(new Promise((resolve) => resolve(sol)))

        await action.cambiarEstado(sol)(dispatch);

        expect(axios.put).toHaveBeenCalledWith('http://localhost:8081/solicitudlider/vacaciones/actualizar/1', sol)
        expect(dispatch).toHaveBeenCalledWith({ type: 'UPTDATE_REQUEST_VACATION_SOLVERS' })
    });

    it('should call cambiarEstado action and reject', async () => {
        const dispatch = jest.fn()
        const res = "Error";
        const sol = { idRequest: 1 };
        axios.put.mockReturnValue(new Promise((resolve, reject) => reject(res)))

        await action.cambiarEstado(res)(dispatch);

        expect(axios.put).toHaveBeenCalledWith('http://localhost:8081/solicitudlider/vacaciones/actualizar/1', sol)
        expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR', error: "Error" })
    });
});