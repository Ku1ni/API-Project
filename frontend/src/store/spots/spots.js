import { csrfFetch } from "../csrf";
import { createSpot, getSpots, getSpot, getCurrentSpot, updateSpot, deleteSpot } from "./spotActions";
import { CREATE_SPOT, GET_SPOTS, GET_SPOT, UPDATE_SPOT, DELETE_SPOT, GET_CURRENT_SPOT} from "./spotActions";
// import {getSpotReviews} from '../reviews/reviews'



export const createASpot = (spot, images) => async (dispatch) => {

      const imgURLs = Object.values(images);
      // const review = Object.values(reviews)
      const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(spot)
      })

      if (response.ok) {
        const newSpot = await response.json()
        // console.log("🚀 ~ createASpot ~ newSpot:", newSpot)


      for (const image of imgURLs) {
        await csrfFetch(`/api/spots/${newSpot.id}/images`, {
            method: "POST",
            body: JSON.stringify({
                url: image.url,
                preview: true
            })
        });
    }

  //   if (review.length > 0) {
  //     for (const r of review) {
  //         await csrfFetch(`/api/spots/${newSpot.id}/reviews`, {
  //             method: "POST",
  //             body: JSON.stringify(r)
  //         });
  //     }
  // }

      await dispatch(createSpot(newSpot))
      // await dispatch(getSpotReviews(newSpot.id))

      return newSpot
      } else {
        throw new Error("Spot could not be created")
      }
  };


export const getAllSpots = () => async(dispatch) => {
    let response = await csrfFetch('/api/spots')
    if(response.ok){
    let data = await response.json();
    dispatch(getSpots(data))
    return response
  }else {
    const error = await response.json()
    console.log('ERROR', error)
    return error
  }
}


export const getOneSpot = (spotId) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots/${spotId}`)

    if(response.ok){
    let data = await response.json()
    dispatch(getSpot(data))
    return response
  }else {
    const error = await response.json()
    console.log('ERROR', error)
    return error
  }
}

export const currentSpot = () => async(dispatch) => {
    let response = await csrfFetch('/api/spots/current')

    if(response.ok){
    let data = await response.json()
    dispatch(getCurrentSpot(data))
    return response
  }else {
    const error = await response.json()
    console.log('ERROR', error)
    return error
  }
}

export const updateCurrentSpot = (spot, spotId) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(spot)
    })
    if(response.ok){
    let update = await response.json()
    await dispatch(updateSpot(update))
    return update
  }else {
    const error = await response.json()
    console.log('ERROR', error)
    return error
  }
}

export const deleteCurrentSpot = (spotId) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots/${spotId}`,{
        method: 'DELETE',
    })
    if(response.ok){
    await dispatch(deleteSpot(spotId))
    response.json('Successfully Deleted')
  }else {
    const error = await response.json()
    console.log('ERROR', error)
    return error
  }
}

// export const getImages = (spotId) => async(dispatch) => {
//   const response = await csrfFetch(`/api/spots/${spotId}`);
//   if(response.ok){
//     const data = await response.json()
//     dispatch(getSpotImages(data))

//   }else {
//     const error = await response.json()
//     console.log('ERROR', error)
//     return error
//   }
// }


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
            let newState = { [action.spot.id]: action.spot}
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
        // case GET_SPOT_IMAGES: {
        //   const {spotId, images} = action
        //   return {
        //     ...state,
        //     [spotId]: {
        //       ...state[spotId],
        //       images:images
        //     }
        //   }
        // }
        default:
            return state
    }
}

export default spotsReducer
