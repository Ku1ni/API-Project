import { csrfFetch } from "../csrf";
import { createSpot, getSpots, getSpot, getCurrentSpot, updateSpot, deleteSpot } from "./spotActions";
import { CREATE_SPOT, GET_SPOTS, GET_SPOT, UPDATE_SPOT, DELETE_SPOT, GET_CURRENT_SPOT } from "./spotActions";



export const createASpot = (spot, images) => async (dispatch) => {
    try {
      const imgURLs = Object.values(images);
      const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(spot)
      })

      if (response.status !== 201) {
        throw new Error("Spot could not be created")
      }

      const newSpot = await response.json()

      await Promise.all(
        imgURLs.map((image) =>
          csrfFetch(`/api/spots/${newSpot.id}/images`, {
            method: "POST",
            body: JSON.stringify({
              url: image.url,
              preview: true
            })
          })
        )
      )

      await dispatch(createSpot(newSpot))

      return newSpot
    } catch (error) {
      console.error("Error creating spot:", error)
      throw error
    }
  };


export const getAllSpots = () => async(dispatch) => {
    let response = await csrfFetch('/api/spots')
    let data = await response.json();
    dispatch(getSpots(data))
    return response
}


export const getOneSpot = (spotId) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots/${spotId}`)
    let data = await response.json()
    dispatch(getSpot(data))
    return response
}

export const currentSpot = () => async(dispatch) => {
    let response = await csrfFetch('/api/spots/current')
    let data = await response.json()
    dispatch(getCurrentSpot(data))
    return response
}

export const updateCurrentSpot = (spot, spotId) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(spot)
    })
    let update = await response.json()
    await dispatch(updateSpot(update))
    return update
}

export const deleteCurrentSpot = (spotId) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots/${spotId}`,{
        method: 'DELETE',
    })
    await dispatch(deleteSpot(spotId))
    response.json('Successfully Deleted')
}

function spotsReducer(state ={}, action){
    switch(action.type) {
        case CREATE_SPOT: {
            let newState= {...state, [action.spot.id]: action.spot}
            return newState
        }
        case GET_SPOTS: {
            let newState = {}
            action.spots.Spots.forEach((spot) => newState[spot.id] = spot)
            return newState
        }
        case GET_SPOT: {
            let newState = {[action.spot.id]: action.spot}
            return newState

        }
        case GET_CURRENT_SPOT: {
            let newState = {}
            action.spot.Spots.forEach((spot) => {
                newState[spot.id] = spot
            })
            return newState
        }
        case UPDATE_SPOT: {
            let newState = { ...state, [action.spot.id]: action.spot}
            return newState
        }
        case DELETE_SPOT: {
            let newState = {...state}
            delete newState[action.spotId]
            return newState
        }
        default:
            return state
    }
}

export default spotsReducer
