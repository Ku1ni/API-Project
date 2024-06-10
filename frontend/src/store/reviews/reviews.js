import { csrfFetch } from "../csrf";

const GET_SPOT_REVIEWS = 'spots/get-spot-reviews'
const DELETE_REVIEWS = 'spots/delete-reviews'
const CREATE_REVIEWS = 'spots/create-reviews'

const getReviews = (reviews, spotId) => ({
    type: GET_SPOT_REVIEWS,
    reviews,
    spotId
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEWS,
    reviewId
})

const createReview = (review, spotId) => {
    return {
        type: CREATE_REVIEWS,
        review,
        spotId
    }
}

export const getSpotReviews = (spotId, reviews) => {
    return async (dispatch) => {
        try{
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
        if(response.ok){
        const data = await response.json(reviews)
            dispatch(getReviews(data, spotId));
            return data
        }else {
            return []
        }
    }catch (error){
        console.error('Failed to fetch spot reviews:', error);
      return [];
    }
    };
  };

  export const deleteSpotReview = (reviewId) => {
    return async (dispatch) => {
        await csrfFetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE'
        })
        await dispatch(deleteReview(reviewId))

    }
  }

  export const createSpotReview = (review, spotId) => {
    return async(dispatch) => {

        let response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        if(response.ok){
        const newReview = await response.json()
        await dispatch(createReview(newReview, spotId))
        return newReview
        } else {
            console.error('Failed to create review:', response.statusText);
            return null;
          }
    }
  }

const initialState = {}
function reviewsReducer(state = initialState, action){
    switch(action.type){
        case GET_SPOT_REVIEWS: {
            const { spotId, reviews } = action;
                return {
                    ...state,
                    [spotId]: reviews
                }
            }
            case DELETE_REVIEWS: {
                const { reviewId } = action;
                const updatedState = { ...state };
                const spotId = Object.keys(updatedState).find(
                  (spotId) => updatedState[spotId].some((review) => review.id === reviewId)
                );
                if (spotId) {
                  updatedState[spotId] = updatedState[spotId].filter((review) => review.id !== reviewId);
                }
                return updatedState;
              }
            case CREATE_REVIEWS: {
                let newState = { ...state, [action.review.id]: action.review };
                return newState;
            }

        default:
            return state
    }
}


export default reviewsReducer
