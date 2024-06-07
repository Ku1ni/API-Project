import { csrfFetch } from "../csrf";

const GET_SPOT_REVIEWS = 'spots/get-spot-reviews'

const getReviews = (reviews, spotId) => ({
    type: GET_SPOT_REVIEWS,
    reviews,
    spotId
})

export const getSpotReviews = (spotId, reviews) => {
    return async (dispatch) => {
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
        if(response.ok){
        const data = await response.json(reviews)
        dispatch(getReviews(data, spotId));
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
            if (reviews.length === 0) {
                return {
                    ...state,
                    [spotId]: 'new'
                };
            } else {
                return {
                    ...state,
                    [spotId]: reviews
                };
            }

            }

        default:
            return state
    }
}


export default reviewsReducer
