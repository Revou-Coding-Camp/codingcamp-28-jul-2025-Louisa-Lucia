document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('result-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //mencegah reload form
        //To get current Time
        const CurrentTime = new Date().toLocaleString;
        //to show input data user
        const UserName = document.getElementById('fname').value;
        const BornDate = document.getElementById('ldate').value;
        const Gender = document.getElementById('gender').value;
        const UserMassage = document.getElementById('message').value;

        if (UserName && BornDate && Gender && UserMassage) {
            result.innerHTML = `
            <div class="space-y-2">
                <p><strong>Current time :</strong> ${CurrentTime}</p>
                <p>
                    <strong>
                        First Name:
                    </strong> ${UserName}
                </p>
                <p>
                    <strong>
                        Date Birth:
                    </strong> ${BornDate}
                </p>
                <p>
                    <strong>
                        Gender:
                    </strong> ${Gender}
                </p>
                <p>
                    <strong>
                        Message to US:
                    </strong> ${UserMassage}
                </p>
            </div>
            `;
        } else {
            result.innerHTML = '<p class="text-red-500">Please fill out all fields, before subbmit.</p>';
        }

    });
});