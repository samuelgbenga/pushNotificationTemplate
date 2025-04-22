import React, { useState } from "react";
import axios from "axios";

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    topic: "",
    token: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/post/notification", formData);
      alert("Notification sent successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error sending notification:", error);
      alert("Failed to send notification.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Send Push Notification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={formData.body} onChange={handleChange} required />
        </div>
        <div>
          <label>Topic (optional):</label>
          <input type="text" name="topic" value={formData.topic} onChange={handleChange} />
        </div>
        <div>
          <label>Token (optional if topic is used):</label>
          <input type="text" name="token" value={formData.token} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Send Notification</button>
      </form>
    </div>
  );
};

export default NotificationForm;
