import { socket } from "../serverSocket";

const defaultState = {
    currentPage: 0
}

export const recordingReducerV2 = (state = defaultState, action) => {
    switch (action.type) {
        case 'MOVE_PAGE':
            state = {
                ...state,
                currentPage: action.payload
            }
            return state

        case 'DEVICE_META':

            let { deviceNumber, hardwareRecordingNumber } = action.payload

            state = {
                ...state,
                deviceNumber: deviceNumber,
                hardwareRecordingNumber: hardwareRecordingNumber
            }

            return state

        default:
            return state
    }
}