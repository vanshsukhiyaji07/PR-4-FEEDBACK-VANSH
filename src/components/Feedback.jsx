import { useState } from "react";
import { FaStar } from "react-icons/fa";
import  "../App.css";

const FeedbackRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && feedback.trim()) {
      const newFeedback = { id: Date.now(), rating, feedback };
      setFeedbackList([newFeedback, ...feedbackList]);
      setRating(null); // Reset rating
      setFeedback(""); // Reset feedback input
    } else {
      alert("Please provide both a rating and feedback!");
    }
  };

  return (
    <div>
      <h2>Leave Your Feedback</h2>
      <div>

        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt=""  style={{ width: "300px", height: "300px", borderRadius: "10px"}}/>
        <br />
        <br />

        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                style={{ display: "none" }}
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                size={30}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: "pointer" }}
              />
            </label>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <h3>Feedback :-</h3>
        <textarea
          rows="4"
          cols={"40"}
          placeholder="Enter Your FeddBack"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}

        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "balck",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            hover: "background-color: #555",
          }}
        >
          Submit
        </button>
      </form>
      <div style={{ marginTop: "30px" }}>
        <h3>Feedback Cards</h3>
        {feedbackList.map((entry) => (
          <div
            key={entry.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "10px",
              maxWidth: "400px",
              margin: "auto",
              textAlign: "left",
              backgroundColor : "black"
            }}
          >
            <div>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={20}
                  color={i < entry.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
            <p style={{ marginTop: "10px" , color: "white"}}>{entry.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackRating;
