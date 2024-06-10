import './DeleteReview.css'

export default function DeleteReview  ({ handleDeleteReview, setReviewToDelete })  {

    const confirmDelete = () => {
        handleDeleteReview();
        setReviewToDelete(null);
      };

      return (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Confirm Delete</h2>
              <p>Are you sure you want to delete this review?</p>
              <div className="modal-buttons">
                <button onClick={confirmDelete} className="delete-button">
                  Yes (Delete Review)
                </button>
                <button onClick={() => setReviewToDelete(null)} className="cancel-button">
                  No (Keep Review)
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
