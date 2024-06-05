export const CREATE_SPOT = 'spots/create_spot'
export const GET_SPOTS = 'spots/get_spots'
export const GET_SPOT = 'spots/get_spot'
export const UPDATE_SPOT = 'spots/update'
export const DELETE_SPOT = 'spots/delete_spot'
export const GET_CURRENT_SPOT = 'spots/get_current_spot'


export const createSpot = (spot) => ({
        type: CREATE_SPOT,
        spot
});
export const getSpots = (spots) => ({
            type: GET_SPOTS,
            spots
})

export const getSpot = (spot) => ({
        type: GET_SPOT,
        spot
})

export const getCurrentSpot = (spots) => ({
    type: GET_CURRENT_SPOT,
    spots
})

export const updateSpot = (spot) => ({
    type: UPDATE_SPOT,
    spot
})

export const deleteSpot = (spot) => ({
    type: DELETE_SPOT,
    spot
})
