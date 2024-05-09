openModalButton = document.getElementById('open-modal');
closeModalButton = document.getElementById('close-modal');

overlay = document.getElementById('overlay')

openModalButton.addEventListener('click', () => {
    console.log('cliked')
    overlay.style.display = 'grid';
})

closeModalButton.addEventListener('click', () => {
    overlay.style.display = 'none';
})