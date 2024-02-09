'use strict'

document.getElementById('yesBtn').addEventListener('click', function() {
    const responseElement = document.getElementById('response');
    responseElement.innerHTML = '<img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MjAxNDg3OTQxODQxNzI1MDQ5/reasons-not-to-have-a-pet-hamster.webp" alt="A cute hamster" />';
});

document.getElementById('noBtn').addEventListener('click', function() {
    const responseElement = document.getElementById('response');
    responseElement.textContent = `Too bad, it's very cute!`;
});
