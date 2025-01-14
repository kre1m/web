console.log("Загружен");
const contactBtn = document.getElementById('contactBtn');
        const contactModal = document.getElementById('contactModal');
        const closeBtn = document.getElementById('closeBtn');

        contactBtn.onclick = function() {
            contactModal.style.display = 'block';
        }

        closeBtn.onclick = function() {
            contactModal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target === contactModal) {
                contactModal.style.display = 'none';
            }
        }