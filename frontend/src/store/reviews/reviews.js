import { csrfFetch } from "../csrf";

const GET_SPOT_REVIEWS = 'spots/get-spot-reviews'

const getReviews = (reviews, spotId) => ({
    type: GET_SPOT_REVIEWS,
    reviews,
    spotId
})

export const getSpotReviews = (spotId, reviews) => {
    return async (dispatch) => {
        // if (reviews === undefined) {
        //     reviews = [];
        // }
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
        if(response.ok){
        const data = await response.json(reviews)

            dispatch(getReviews(data, spotId));
            console.log("🚀 ~ return ~ reviews:", data)
            return data


        }else {
            return 'New'
        }
    };
    // return (dispatch) => {
    //     if (reviews && reviews.length > 0) {
    //         // If reviews are provided, dispatch an action to update the store with these reviews
    //         dispatch(getReviews(reviews, spotId));
    //         console.log("Received reviews for spot ID:", spotId, reviews);
    //         return reviews;
    //     } else {
    //         // If no reviews provided, return 'New' or any other appropriate value
    //         console.log("No reviews received for spot ID:", spotId);
    //         return 'New';
    //     }
    // };
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
