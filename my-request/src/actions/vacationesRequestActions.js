import axios from '../axios/axios';

const _addVacationRequest = (book) => ({
    type: 'ADD_VACATION_REQUEST',
    book
});

export const addVacationRequest = (vacationRequestData = {
    title: '',
    description: '',
    author: '',
    published: 0
}) => {
    return (dispatch) => {
        const vacationRequest = {
            title: vacationRequestData.title,
            description: vacationRequestData.description,
            author: vacationRequestData.author,
            published: vacationRequestData.published
        };

        return axios.post('vacationesrequest/create', vacationRequest).then(result => {
            dispatch(_addVacationRequest(result.data));
        });
    };
};

const _removeVacationRequest = ({ id } = {}) => ({
    type: 'REMOVE_VACATION_REQUEST',
    id
});

export const removeVacationRequest = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`deletevacationrequest/${id}`).then(() => {
            dispatch(_removeVacationRequest({ id }));
        })
    }
};

const _editVacationRequest = (id, updates) => ({
    type: 'EDIT_VACATION_REQUEST',
    id,
    updates
});

export const editVacationRequest = (id, updates) => {
    return (dispatch) => {
        return axios.put(`updatevacationrequest/${id}`, updates).then(() => {
            dispatch(_editVacationRequest(id, updates));
        });
    }
};

const _getVacationRequest = (vacatioRequest) => ({
    type: 'GET_VACATION_REQUEST',
    vacatioRequest
});

export const getVacationRequest = () => {
    return (dispatch) => {
        return axios.get('vacationesRequest').then(result => {
            const vacationesRequest = [];

            result.data.forEach(item => {
                vacationesRequest.push(item);
            });

            dispatch(_getVacationRequest(vacationesRequest));
        });
    };
};