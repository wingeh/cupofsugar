const goToPantry = () => {
    const response = await fetch('api/products/pantry', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
};

const goToMessages = () => {
    const response = await fetch('api/messsages', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
};



document.getElementById('pantry').addEventListener('click', goToPantry);
document.getElementById('messages').addEventListener('click', goToMessages);
document.getElementById('pantry').addEventListener('click', goToPantry);