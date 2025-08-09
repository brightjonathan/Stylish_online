    // Predefined Q&A for Stylish Shoes Store
const chatbotQA = {
    "what are your latest arrivals": "Our latest arrivals include stylish sneakers, ankle boots, and summer sandals!",
    "do you offer free shipping": "Yes! We offer free shipping on orders over 50k.",
    "what sizes are available": "We stock sizes from US 5 to US 12 for most models.",
    "do you have men's shoes": "Yes, we offer a wide range of men's sneakers, loafers, and formal shoes.",
    "how do i track my order": "You can track your order using the tracking link sent to your email after purchase.",
    "can i return my shoes": "Yes, returns are accepted within 30 days in original condition.",
    "do you have discounts": "We offer seasonal sales and exclusive discounts for newsletter subscribers.",
    "where are you located": "Our main store is online, but we ship worldwide from our warehouse in New York.",
    "do you sell kids shoes": "Yes! We have sneakers, sandals, and school shoes for kids of all ages.",
    "how can i contact customer service": "You can reach our support team via the contact form or WhatsApp link on our website.",
    "what payment methods do you accept": "We accept bank transfers, credit/debit cards, PayPal, and mobile payments.",
    "do you offer cash on delivery": "Yes, cash on delivery is available in selected locations.",
    "are your shoes authentic": "Absolutely! All our products are 100% authentic and sourced directly from trusted brands.",
    "how do i know my shoe size": "We have a size chart available on each product page to help you choose the right fit.",
    "do you have gift cards": "Yes, we offer digital gift cards so you can share the love of stylish shoes."
};


const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-text");
const chatbotSend = document.getElementById("chatbot-send");

// Toggle Chatbot
chatbotToggle.addEventListener("click", () => {
    chatbotContainer.style.display = chatbotContainer.style.display === "flex" ? "none" : "flex";
});

// Send Message
chatbotSend.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const userMessage = chatbotInput.value.trim().toLowerCase();
    if (!userMessage) return;

    addMessage("You", userMessage);
    chatbotInput.value = "";

    setTimeout(() => {
        const reply = chatbotQA[userMessage] || "Sorry, I don't have an answer to that. Please contact support.";
        addMessage("Bot", reply);
    }, 500);
}

function addMessage(sender, text) {
    const message = document.createElement("div");
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}