/*
import action , {loadAvailableDays}  from '../action';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

it('lISTA DE SOLICITUDES VACACIOONES', ( ) => {
    const name = 'alexandermarquez';
    const store = mockStore({ loadAvailableDays: [] })

    moxios.stubRequest('http://localhost:8081/solicitud/vacaciones/disponibles/', {
        status: 200,
        response: [
            { availableDaysData: 2 },
            { availableDaysData: 5 }
        ]
    });
    return store.dispatch(loadAvailableDays({name}))
        .then(() => {
            const actions = store.getActions();
            expect(actions.length).toBe(2);
            expect(actions[0].type).toBe("GET_AVAILABLE_DAYS");

        });

})
*/