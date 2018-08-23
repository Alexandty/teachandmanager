import axios from 'axios'
jest.mock('axios')
import action from './../action';

describe('Testing action SolicitudVacaciones', () => {
    it('should call Consultar action', async () => {
        const dispatch = jest.fn();
        const values = { startDate: new Date(1), endDate: new Date(1) }
        axios.post.mockReturnValue(new Promise((resolve) => resolve(values)))

        await action.consultar(values)(dispatch);

        expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/solicitud/vacaciones/disponibles', values)
        expect(dispatch).toHaveBeenCalledWith({ type: 'CHECK_SOLICITUD_VACACIONES' })
    });

    it('should call Consultar action and reject', async () => {
        const dispatch = jest.fn();
        const values = { startDate: new Date(1), endDate: new Date(1) }
        const res = {
            response: { data: { message: 'a' } }
        }
        axios.post.mockReturnValue(new Promise((resolve, reject) => reject(res)))

        await action.consultar(values)(dispatch);

        expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/solicitud/vacaciones/disponibles', values)
        expect(dispatch).toHaveBeenCalledWith({ "mensajeError": "a", type: 'ERROR_SOLICITUD_VACACIONES' })
    });

    it('should call Guardar action', async () => {
        const dispatch = jest.fn();
        const values = { startDate: "2002-01-01T00:00:00-05:00", endDate: "2002-01-01T00:00:00-05:00", user: 'JJ', estado: 'pendiente', motivo: "" }
        axios.post.mockReturnValue(new Promise((resolve) => resolve(values)))

        await action.guardar(values)(dispatch);

        // expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/solicitud/vacaciones/create/', values)
        expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_SOLICITUD_VACACIONES' })
    });

    it('should call Guardar action reject', async () => {
        const dispatch = jest.fn();
        const values = { startDate: "2002-01-01T00:00:00-05:00", endDate: "2002-01-01T00:00:00-05:00", user: 'JJ', estado: 'pendiente', motivo: "" }
        axios.post.mockReturnValue(new Promise((resolve) => resolve(values)))

        await action.guardar(values)(dispatch);

        // expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/solicitud/vacaciones/create/', values)
        expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_SOLICITUD_VACACIONES' })
    });

});