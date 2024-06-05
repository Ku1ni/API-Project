import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllSpots } from "../../store/spots/spots";
import './SpotDetails.css'

export default function SpotsDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spots);
  const selectedSpot = spots[spotId]
    console.log("🚀 ~ SpotsDetails ~ selectedSpot:", selectedSpot)

  useEffect(() => {
    if(spotId){
        dispatch(getAllSpots(spotId));
    }


  }, [dispatch, spotId]);

  const spotImages = {
    1: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/416ff6ae-63cb-4886-8379-219fed4b9f0d.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/ee6c44df-4356-45cd-b980-3300f26fba45.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/fbf79c5c-8127-4730-9a50-c8b9da1c68c7.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/7a06ca10-8914-4d02-858a-8fea69539b6a.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-663069238504457532/original/41a25e20-de1c-42f0-8e30-e56b1fb16383.jpeg?im_w=1200"
    ],
    2: [
        
    ]
  };

  if (!spots) return null;

  const images = spotImages[spotId] || [];
console.log('IMAGES', images[1])
  return (
    <>
        <div className="page-container">

            {selectedSpot && (
            <div className="details-container" key={selectedSpot.id}>
                    <header className="header">
                        <h2>{selectedSpot.name}</h2>
                        <h3>{`${selectedSpot.city}, ${selectedSpot.state}, ${selectedSpot.country}`}</h3>
                    </header>
                    <div className="large-image">
                        <img
                            className="large-spot-image"
                            src={selectedSpot?.previewImage}
                            alt={`Preview for ${selectedSpot.name}`}
                        />
                    </div>
                    <div className="small-image">
                    {/* {images.map((url, index) => (
                <img
                  key={index}
                  className="spot-image"
                  src={url}
                  alt={`Image ${index + 1} for ${selectedSpot.name}`}
                />
              ))} */}
                    <img
                        className="small-spot-image"
                        src={images[1]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={images[2]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={images[3]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={images[4]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    </div>
                        <div className="price-info">
                            <h3>${selectedSpot.price} Night</h3>
                            <h4>New</h4>
                            {sessionUser && sessionUser.id !== selectedSpot.ownerId && (
                                <button
                                    onClick={() => window.alert("Feature coming soon...")}
                                    className="reserveButton"
                                >
                                    Reserve
                                </button>
                            )}
                    </div>
                </div>
            )}
        </div>
    </>
  );
}
