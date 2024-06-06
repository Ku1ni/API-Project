import { csrfFetch } from "../csrf";

const GET_SPOT_REVIEWS = 'spots/get-spot-reviews'

const getReviews = (reviews, spotId) => ({
    type: GET_SPOT_REVIEWS,
    reviews,
    spotId
})

export const getSpotReviews = (spotId) => {
    return async (dispatch) => {
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
        if(response.ok){
        const data = await response.json()
        dispatch(getReviews(data));
        return data
        }else {
            const error = await response.json()
            console.log('ERROR', error)
            return error
        }
    };
  };
const initialState = {}
function reviewsReducer(state = initialState, action){
    switch(action.type){
        case GET_SPOT_REVIEWS: {
            const { spotId, reviews } = action;
            return {
                ...state,
                [spotId]: reviews
            };

            }

        default:
            return state
    }
}


export default reviewsReducer
