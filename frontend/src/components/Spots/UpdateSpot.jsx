import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateCurrentSpot, getOneSpot } from "../../store/spots/spots"

export default function UpdateSpot(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { spotId } = useParams()
    const user = useSelector((state) => state.session.user)
    const spot = useSelector((state) => state.spots[spotId])

    const [address, setAddress] = useState(spot?.address)
    const [city, setCity] = useState(spot?.city)
    const [state, setState] = useState(spot?.state)
    const [country, setCountry] = useState(spot?.country)
    const [lat, setLat] = useState(spot?.lat)
    const [lng, setLng] = useState(spot?.lng)
    const [description, setDescription] = useState(spot?.description)
    const [name, setName] = useState(spot?.name)
    const [price, setPrice] = useState(spot?.price)
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState({})

    useEffect(() => {
        let validation = {}
        if(!address) validation.address = 'Address is required'
        if(!city) validation.city = 'City is required'
        if(!state) validation.state = 'State is required'
        if(!country) validation.country = 'Country is required'
        if(!description) validation.description = 'Description is required'
        if(!name) validation.name = 'Name is required'
        if(!price) validation.price = 'Price is required'

        setError(validation)

    }, [
        name,
        address,
        city,
        state,
        country,
        description,
        price,
        ]
    )
    const onSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (Object.values(error).length) {
            return alert(`These errors have been found:
                ${error.name ? "* " + error.name : ""}
                ${error.address ? "* " + error.address : ""}
                ${error.city ? "* " + error.city : ""}
                ${error.state ? "* " + error.state : ""}
                ${error.country ? "* " + error.country : ""}
                ${error.lat ? "* " + error.lat : ""}
                ${error.lng ? "* " + error.lng : ""}
                ${error.description ? "* " + error.description : ""}
                ${error.price ? "* " + error.price : ""}
                ${error.previewImage ? "* " + error.previewImage : ""}
            `);
        }


        let newSpot = {
            ownerId: user.id,
            name,
            address,
            city,
            state,
            country,
            lat,
            lng,
            description,
            price
        };
        let updatedSpot = await dispatch(updateCurrentSpot(newSpot, spotId));
        await dispatch(getOneSpot(updatedSpot));
        navigate(`/spots/${updatedSpot.id}`);
    };

    return(
        <div>
            <h1>Update your spot</h1>
            <form className="create-form" onSubmit={onSubmit}>
                    <div className="location-section">
                        <h3>Where&apos;s your place located?</h3>
                        <p>Guests will only get your exact address once they booked a reservation.</p>
                        <label htmlFor="country">Country:
                            <input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </label>
                        {hasSubmitted && error.country && <span>{error.country}</span>}

                        <label htmlFor="address">Address:
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                        {hasSubmitted && error.address && <span>{error.address}</span>}

                        <label htmlFor="city">City:
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                        {hasSubmitted && error.city && <span>{error.city}</span>}

                        <label htmlFor="state">State:
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </label>
                        {hasSubmitted && error.state && <span>{error.state}</span>}

                        <label htmlFor="lat">Latitude (Optional):
                            <input
                                type="number"
                                id="lat"
                                name="lat"
                                placeholder="lat"
                                value={lat}
                                onChange={(e) => setLat(e.target.value)}
                            />
                        </label>
                        {hasSubmitted && error.lat && <span>{error.lat}</span>}

                        <label htmlFor="lng">Longitude (Optional):
                            <input
                                type="number"
                                id="lng"
                                name="lng"
                                placeholder="lng"
                                value={lng}
                                onChange={(e) => setLng(e.target.value)}
                            />
                        </label>
                        {hasSubmitted && error.lng && <span>{error.lng}</span>}
                    </div>

                    <div className="description-section">
                        <h3>Describe your place to guests</h3>
                        <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Please write at least 30 characters."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {hasSubmitted && error.description && <span>{error.description}</span>}
                    </div>

                    <div className="title-section">
                        <h3>Create a title for your spot.</h3>
                        <p>Catch guests&apos; attention with a spot title that highlights what makes your place special.</p>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name your spot"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {hasSubmitted && error.name && <span>{error.name}</span>}
                    </div>

                    <div className="price-section">
                        <h3>Set a base price for your spot</h3>
                        <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price per night (USD)"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {hasSubmitted && error.price && <span>{error.price}</span>}
                    </div>

                    <button
                        className='submit-button'
                        disabled={Object.values(error).length !== 0}
                        type="submit"
                    >Update Spot</button>
                </form>
        </div>
    )
}
