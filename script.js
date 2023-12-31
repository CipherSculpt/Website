// Load the YouTube API script asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an array to store video IDs
var videoIds = ['VIDEO_ID_1']; // Add more video IDs as needed

// Array to store YouTube player instances
var players = [];

// Callback function called when the API is ready
function onYouTubeIframeAPIReady() {
    // Create YouTube video players dynamically
    for (var i = 0; i < videoIds.length; i++) {
        players[i] = new YT.Player('blog' + (i + 1), {
            height: '200',
            width: '300',
            videoId: videoIds[i],
            playerVars: {
                'autoplay': 0, // Set to 1 for autoplay
                'controls': 1,
                'rel': 0,
                'showinfo': 0,
                'modestbranding': 1
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        sendEmail();
        resetForm();
    });

    function sendEmail() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const bodyMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ciphersculpt@outlook.com",
            Password: "D6A69A012B0F582558AA741AD3E1D5040E4B",
            To: 'ciphersculpt@outlook.com',
            From: "ciphersculpt@outlook.com",
            Subject: "Work discussing from",
            Body: bodyMessage
        }).then((message) => handleEmailResponse(message));
    }

    function handleEmailResponse(message) {
        console.log("Email.send promise resolved:", message);
        const title = (message === "OK") ? "Success!" : "Error!";
        const text = (message === "OK") ? "Message sent successfully!" : "Failed to send message. Please try again later.";
        const icon = (message === "OK") ? "success" : "error";

        Swal.fire({
            title: title,
            text: text,
            icon: icon
        });
    }

    function resetForm() {
        form.reset();
    }
});

window.addEventListener("scroll", function() {
    var header = document.getElementById("main-header");
    if (window.scrollY > 0) {
        header.classList.add("sticky-nav");
    } else {
        header.classList.remove("sticky-nav");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeIcon = document.querySelector('.close-icon');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        hamburgerMenu.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        nav.classList.remove('active');
        closeIcon.style.display = 'none';
        hamburgerMenu.style.display = 'block';
    });
});
