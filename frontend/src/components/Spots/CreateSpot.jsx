import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createASpot, getOneSpot } from "../../store/spots/spots";
import './CreateSpot.css';

function CreateSpot() {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState(90);
    const [lng, setLng] = useState(180);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [previewImage, setPreviewImage] = useState({ url: "", preview: true });
    const [image2, setImage2] = useState({ url: "", preview: true });
    const [image3, setImage3] = useState({ url: "", preview: true });
    const [image4, setImage4] = useState({ url: "", preview: true });
    const [image5, setImage5] = useState({ url: "", preview: true });


    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        let validation = {};
        if (name.length < 5) validation.name = "Name is required (Must be at least 5 characters)";
        if (name.length > 50) validation.name = "Name must be less than 50 characters";
        if (address.length < 5) validation.address = "Street address is required";
        if (city.length < 1) validation.city = "City is required";
        if (state.length < 1) validation.state = "State is required";
        if (country.length < 1) validation.country = "Country is required";
        if (lat < -90 || lat > 90) validation.lat = "Latitude must be within -90 and 90";
        if (lng < -180 || lng > 180) validation.lng = "Longitude must be within -180 and 180";
        if (description.length < 30) validation.description = "Description needs 30 or more characters";
        if (price < 1) validation.price = "Price per night is required";
        if (!previewImage.url) validation.previewImage = "Preview image URL is required";
        setError(validation);
    }, [
        name,
        address,
        city,
        state,
        country,
        lat,
        lng,
        description,
        price,
        previewImage.url
    ]);

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

        const images = { previewImage, image2, image3, image4, image5 };
        let spot = {
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


        let newSpot = await dispatch(createASpot(spot, images));
        await dispatch(getOneSpot(newSpot.id));
        navigate(`/spots/${newSpot.id}`);
    };

    const handleImageChange = (setter) => (e) => {
        setter({ url: e.target.value, preview: true });
    };


    return (
        <div className="container">
            <div className="new-spot-container">
                <h2>Create a New Spot</h2>
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

                        <label htmlFor="address">Street Address:
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
                            placeholder="Name of your spot"
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

                    <div className="image-section">
                        <h3>Liven up your spot with photos.</h3>
                        <p>Submit a link to at least one photo to publish your spot.</p>
                        <label htmlFor="previewImage">
                            <input
                                type="text"
                                id="previewImage"
                                placeholder="Preview Image URL"
                                value={previewImage.url}
                                onChange={(e) => setPreviewImage({ url: e.target.value, preview: true })}
                            />
                            {hasSubmitted && error.previewImage && <span>{error.previewImage}</span>}
                        </label>

                        <label htmlFor="image2">
                            <input
                                type="text"
                                id="image2"
                                placeholder="Image URL"
                                value={image2.url}
                                onChange={handleImageChange(setImage2)}
                            />
                            {image2.preview && image2.url && <img src={image2.url} alt="Preview" />}
                        </label>

                        <label htmlFor="image3">
                            <input
                                type="text"
                                id="image3"
                                placeholder="Image URL"
                                value={image3.url}
                                onChange={handleImageChange(setImage3)}
                            />
                            {image3.preview && image3.url && <img src={image3.url} alt="Preview" />}
                        </label>

                        <label htmlFor="image4">
                            <input
                                type="text"
                                id="image4"
                                placeholder="Image URL"
                                value={image4.url}
                                onChange={handleImageChange(setImage4)}
                            />
                            {image4.preview && image4.url && <img src={image4.url} alt="Preview" />}
                        </label>

                        <label htmlFor="image5">
                            <input
                                type="text"
                                id="image5"
                                placeholder="Image URL"
                                value={image5.url}
                                onChange={handleImageChange(setImage5)}
                            />
                            {image5.preview && image5.url && <img src={image5.url} alt="Preview" />}
                        </label>
                    </div>

                    <button
                        className='submit-button'
                        disabled={Object.values(error).length !== 0}
                        type="submit"
                    >Create Spot</button>
                </form>
            </div>
        </div>
    );
}

export default CreateSpot;
