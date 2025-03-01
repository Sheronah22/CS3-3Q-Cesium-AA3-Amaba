function checkMessage() {
    let message = prompt("Enter your message:");
    
    if (!message) {
        document.getElementById("result").innerText = "No message entered.";
        return;
    }

    if ((message.includes("FR") || message.includes("fr")) && 
        (message.includes("AI") || message.includes("ai"))) {
        document.getElementById("result").innerText = "The message is legitimate.";
    } else if (message.includes("FR") || message.includes("fr")) {
        document.getElementById("result").innerText = "The message is legitimate.";
    } else if (message.includes("AI")) {
        document.getElementById("result").innerText = "The message is tampered with.";
    } else if (message.includes("aI") || message.includes("Ai")) {
        document.getElementById("result").innerText = "The message is tampered with.";
    } else {
        document.getElementById("result").innerText = "The message is yet to be encoded.";
    }
}
