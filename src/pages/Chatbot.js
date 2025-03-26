import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Hugging Face API Key (Replace with your key)
  const HF_API_KEY = "";

  // Hugging Face Model URL
  const HF_MODEL_URL = "";

  // Recommended Questions
  const recommendedQuestions = [
    "What is Sapiencia.AI?",
    "What services does Sapiencia.AI provide?",
    "How does Sapiencia.AI help in healthcare?",
    "How does Sapiencia.AI support defense & cybersecurity?",
    "What compliance standards does Sapiencia.AI follow?",
    "How can I contact Sapiencia.AI?",
    "What is the company name?",
    "Tell me about your AI technology?",
    "How to access request demo?"
  ];

  // Predefined Responses
  const responses = {
    "hello": "Hello! How can I assist you with Sapiencia.AI?",
    "hi": "Hi there! What do you need help with regarding Sapiencia.AI?",
    "hey": "Hey! Feel free to ask me about Sapiencia.AI.",
    "what is sapiencia.ai?": "Sapiencia.AI provides AI-driven security and intelligence solutions for healthcare and defense sectors.",
    "what services does sapiencia.ai provide?": "Sapiencia.AI specializes in AI-driven cybersecurity, identity & access management, and predictive analytics for healthcare & defense.",
    "how does sapiencia.ai help in healthcare?": "We offer AI-driven medical imaging, predictive hospital analytics, and secure data platforms.",
    "how does sapiencia.ai support defense & cybersecurity?": "Sapiencia.AI provides Zero Trust identity management, tactical edge deployment, and AI-driven threat detection.",
    "what compliance standards does sapiencia.ai follow?": "We follow NIST 800-53, DISA STIG, HIPAA, FDA, and CMMC security frameworks.",
    "how can i contact sapiencia.ai?": "You can reach us via our website’s 'Contact Us' page or at contact@sapiencia.ai.",
    "what is the company name?": "The company's name is Sapiencia.AI.",
    "tell me about your ai technology?": "We develop AI models for security, identity management, and predictive analytics in healthcare & defense.",
    "how to access request demo?": "You can request a demo on our website's 'Request Demo' page or contact us at demo@sapiencia.ai."
  };

  // Check if the query is AI-related
  const isAIQuestion = (message) => {
    const aiKeywords = ["ai", "machine learning", "deep learning", "neural network", "nlp", "artificial intelligence"];
    return aiKeywords.some(keyword => message.toLowerCase().includes(keyword));
  };

  // Fetch AI-related response from Hugging Face API
  const fetchAIResponse = async (message) => {
    try {
      const response = await axios.post(HF_MODEL_URL, { inputs: message }, {
        headers: {
          "Authorization": `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json"
        }
      });

      return response.data[0]?.generated_text || "Sorry, I couldn't fetch an answer right now.";
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, there was an issue retrieving the response.";
    }
  };

  // Handle User Messages
  const sendMessage = async (message) => {
    if (!message.trim()) return;
  
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);
    setInput("");
  
    const lowerMessage = message.toLowerCase().trim();
    let responseText = responses[lowerMessage];
  
    // If the message is not predefined, fetch a response from the Hugging Face API
    if (!responseText) {
      responseText = await fetchAIResponse(message);
    }
  
    setMessages([...newMessages, { text: responseText, sender: "bot" }]);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#3d5afe",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "50%",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      )}

      {/* Chat Box */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            backgroundColor: "#0a0a19",
            color: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Chat Header */}
          <div style={{ backgroundColor: "#3d5afe", padding: "10px", textAlign: "center" }}>
            Sapiencia.AI Chatbot
            <button
              onClick={() => setShowChat(false)}
              style={{
                float: "right",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Recommended Questions */}
          <div style={{ padding: "10px", borderBottom: "1px solid #5a7bfc" }}>
            {recommendedQuestions.slice(0, 3).map((q, index) => (
              <button
                key={index}
                onClick={() => sendMessage(q)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "8px",
                  border: "none",
                  backgroundColor: "#1e1e2f",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div style={{ maxHeight: "300px", overflowY: "auto", padding: "10px" }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", marginBottom: "8px" }}>
                <div style={{ display: "inline-block", padding: "8px 12px", borderRadius: "8px", backgroundColor: msg.sender === "user" ? "#3d5afe" : "#1e1e2f", color: "white" }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #5a7bfc" }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me something..." style={{ flex: 1, padding: "8px", backgroundColor: "#0a0a19", color: "white", border: "1px solid #5a7bfc" }} />
            <button onClick={() => sendMessage(input)} style={{ backgroundColor: "#3d5afe", color: "white", border: "none", padding: "8px 12px" }}>➡</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot ;