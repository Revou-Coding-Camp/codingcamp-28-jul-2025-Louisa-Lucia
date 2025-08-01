document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('result-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //mencegah reload form

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const country = document.getElementById('country').value;

        if (firstName && lastName && country) {
            result.innerHTML = `
            <div class="space-y-2">
                <p>
                    <strong>
                        First Name:
                    </strong> ${firstName}
                </p>
                <p>
                    <strong>
                        Last Name:
                    </strong> ${lastName}
                </p>
                <p>
                    <strong>
                        Country:
                    </strong> ${country}
                </p>
            </div>
            `;
        } else {
            result.innerHTML = '<p class="text-red-500">Please fill out all fields, before subbmit.</p>';
        }

    });
});