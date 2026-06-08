document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#menu a');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', function(e) {

            const targetId = this.getAttribute('data-target');

            links.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            this.classList.add('active');

            document.getElementById(targetId).classList.add('active');
        });
    });
});