const sendMessage = (event) => {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const product_id = document.getElementById('product_id').value;

    const response = await fetch('api/messages', {
        method: 'POST',
        body: JSON.stringify({ message, product_id }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Message not sent');
    }
};

document.getElementById('send-message'),addEventListener('submit', sendMessage);