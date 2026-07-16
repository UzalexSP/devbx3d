document.getElementById('copy-email-btn').addEventListener('click', function() {
    const btn = this;
    const email = btn.getAttribute('data-email');

    navigator.clipboard.writeText(email).then(() => {
        btn.classList.add('opacity-0');

        setTimeout(() => {
            btn.textContent = 'СКОПИРОВАНО!';
            btn.classList.remove('opacity-0');
        }, 150);

        setTimeout(() => {
            btn.classList.add('opacity-0');

            setTimeout(() => {
                btn.textContent = email;
                btn.classList.remove('opacity-0');
            }, 150);
            
        }, 2000);
        
    }).catch(err => {
        console.error('Не удалось скопировать: ', err);
    });
});