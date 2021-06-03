const goToPantry = () => {
    const response = await fetch('api/products/pantry', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
};


document.getElementById('pantry').addEventListener('click', goToPantry);
