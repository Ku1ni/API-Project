import { csrfFetch } from "../csrf";


 const CREATE_SPOT = 'spots/create_spot'
 const GET_SPOTS = 'spots/get_spots'
 const GET_SPOT = 'spots/get_spot'
 const UPDATE_SPOT = 'spots/update'
 const DELETE_SPOT = 'spots/delete_spot'
 const GET_CURRENT_SPOT = 'spots/get_current_spot'
//  const GET_SPOT_IMAGES = 'spots/get_spot-images'

 const createSpot = (spot) => ({
        type: CREATE_SPOT,
        spot
});
 const getSpots = (spots) => ({
            type: GET_SPOTS,
            spots
})

 const getSpot = (spot) => ({
        type: GET_SPOT,
        spot
})

 const getCurrentSpot = (spots) => ({
    type: GET_CURRENT_SPOT,
    spots
})

 const updateSpot = (spot) => ({
    type: UPDATE_SPOT,
    spot
})

 const deleteSpot = (spot) => ({
    type: DELETE_SPOT,
    spot
})



export const createASpot = (spot, images) => async (dispatch) => {

      const imgURLs = Object.values(images);

      const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(spot)
      })

      if (response.ok) {
        const newSpot = await response.json()



      for (const image of imgURLs) {
        await csrfFetch(`/api/spots/${newSpot.id}/images`, {
            method: "POST",
            body: JSON.stringify({
                url: image.url,
                preview: true
            })
        });
    }


      await dispatch(createSpot(newSpot))


      return newSpot
      } else {
        throw new Error("Spot could not be created")
      }
  };


export const getAllSpots = (page) => async(dispatch) => {
    let response = await csrfFetch(`/api/spots?page=${parseInt(page)}`)
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
//

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
          const newState = {
            ...state,
            [action.spot.id]: action.spot,
          };
          return newState;

        }
        case GET_CURRENT_SPOT: {
          return { ...state, ...action.spots.Spots };
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
