import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      setResponse({ error: "Network error or server not running." });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {response && (
        <div style={{ marginTop: "10px" }}>
          {response.error ? (
            <p style={{ color: "red" }}>{response.error}</p>
          ) : (
            <p style={{ color: "green" }}>{response.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
