// import action from '../action';
// import mockAxios from 'jest-mock-axios';

// describe('Test para el action del requestaVacationLider', () => {
//     it('Debe despachar el type LOAD_REQUEST_VACATION_SOLVERS y la lista con datos', () => {
//         mockAxios.get.m
//     })
// })

// ./test/UppercaseProxy.spec.js
import mockAxios from 'jest-mock-axios';
import UppercaseProxy from '../src/UppercaseProxy';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});