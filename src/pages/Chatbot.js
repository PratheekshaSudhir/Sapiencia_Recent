import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);

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
    "How to access request demo?",
    "What industries does Sapiencia.AI serve?",
    "Does Sapiencia.AI offer AI-powered threat detection?",
    "Is Sapiencia.AI compliant with federal regulations?",
  ];

  // Predefined Responses
  const responses = {
    hello: "Hello! How can I assist you with Sapiencia.AI?",
    hi: "Hi there! What do you need help with regarding Sapiencia.AI?",
    hey: "Hey! Feel free to ask me about Sapiencia.AI.",
    "what is sapiencia.ai?": "Sapiencia.AI provides AI-driven security and intelligence solutions for healthcare and defense sectors.",
    "what services does sapiencia.ai provide?":
      "Sapiencia.AI specializes in AI-driven cybersecurity, identity & access management, and predictive analytics for healthcare & defense.",
    "how does sapiencia.ai help in healthcare?":
      "We offer AI-driven medical imaging, predictive hospital analytics, and secure data platforms.",
    "how does sapiencia.ai support defense & cybersecurity?":
      "Sapiencia.AI provides Zero Trust identity management, tactical edge deployment, and AI-driven threat detection.",
    "what compliance standards does sapiencia.ai follow?":
      "We follow NIST 800-53, DISA STIG, HIPAA, FDA, and CMMC security frameworks.",
    "how can i contact sapiencia.ai?":
      "You can reach us via our website’s 'Contact Us' page or at contact@sapiencia.ai.",
    "what is the company name?": "The company's name is Sapiencia.AI.",
    "tell me about your ai technology?":
      "We develop AI models for security, identity management, and predictive analytics in healthcare & defense.",
    "how to access request demo?":
      "You can request a demo on our website's 'Request Demo' page.",
  };

  // Handle User Messages
  const sendMessage = (message) => {
    if (!message.trim()) return;

    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    const lowerMessage = message.toLowerCase().trim();
    let responseText =
      responses[lowerMessage] || "Sorry, I don't have an answer for that.";

    setMessages([...newMessages, { text: responseText, sender: "bot" }]);
  };

  // Function to select random questions
  const getRandomQuestions = () => {
    const shuffled = recommendedQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  return (
    <div>
      {!showChat && (
        <button
          onClick={() => {
            setShowChat(true);
            setDisplayedQuestions(getRandomQuestions());
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#3d5afe",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "50%",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      )}

      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "15px",
            maxWidth: "90vw",
            width: "280px",
            backgroundColor: "#0a0a19",
            color: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Chatbot Header */}
          <div
            style={{
              backgroundColor: "#3d5afe",
              padding: "12px",
              textAlign: "center",
              position: "relative",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Sapiencia.AI Chatbot
            <button
              onClick={() => {
                setShowChat(false);
                setMessages([]); // Clears chat history when closed
              }}
              style={{
                position: "absolute",
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "12px",
                cursor: "pointer",
                padding: "5px",
                width: "24px",
                height: "24px",
                textAlign: "center",
              }}
            >
              ✖
            </button>
          </div>

          {/* Suggested Questions */}
          <div style={{ padding: "10px", borderBottom: "1px solid #5a7bfc" }}>
            {displayedQuestions.map((q, index) => (
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

          {/* Chat Messages */}
          <div style={{ maxHeight: "300px", overflowY: "auto", padding: "10px" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    backgroundColor: msg.sender === "user" ? "#3d5afe" : "#1e1e2f",
                    color: "white",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #5a7bfc" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") sendMessage(input);
              }}
              placeholder="Ask me something..."
              style={{
                flex: 1,
                padding: "8px",
                backgroundColor: "#0a0a19",
                color: "white",
                border: "1px solid #5a7bfc",
                marginRight: "8px",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              style={{
                backgroundColor: "#3d5afe",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              ➡
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
