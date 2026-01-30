
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Stop page reload

        const submitBtn = document.getElementById('submitBtn');
        const statusText = document.getElementById('formStatus');
        
        // 1. Change button to loading state
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

        // 2. Gather data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        console.log("Sending payload:", formData); 

        try {
            // 3. Send to Flask Backend (Adjust URL if hosted elsewhere)
            const response = await fetch('http://127.0.0.1:8080/web/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            // 4. Handle Response
            statusText.classList.remove('hidden');
            if (response.ok) {
                statusText.innerText = "Thanks! We've received your message.";
                statusText.className = "text-center font-bold text-green-600 mt-4";
                document.getElementById('contactForm').reset(); // Clear form
            } else {
                statusText.innerText = result.error || "Something went wrong.";
                statusText.className = "text-center font-bold text-red-600 mt-4";
            }

        } catch (error) {
            statusText.classList.remove('hidden');
            statusText.innerText = "Server error. Please try again later.";
            statusText.className = "text-center font-bold text-red-600 mt-4";
        } finally {
            // 5. Reset button
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Message";
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    });
