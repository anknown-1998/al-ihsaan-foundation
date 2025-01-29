// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Typing Animation for Hero Section
    let i = 0;
    const text = "Empowering the Youth, Inspiring the Future.";
    const speed = 100;
    const heroText = document.querySelector('.hero h2');

    function typeWriter() {
        if (i < text.length) {
            heroText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();

    // Scroll-triggered fade-in animation for sections
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Dynamic content rendering for core values
    const valuesList = [
        { title: 'Empowerment', description: 'We equip youth with tools and resources to realize their potential.' },
        { title: 'Integrity', description: 'We uphold honesty and transparency in all our interactions.' },
        { title: 'Compassion', description: 'We encourage youth to contribute positively to their communities.' },
        { title: 'Inclusivity', description: 'We celebrate diversity and create environments where all voices are heard.' },
        { title: 'Collaboration', description: 'We foster partnerships to support youth empowerment.' },
        { title: 'Lifelong Learning', description: 'We encourage continuous personal and professional development.' },
        { title: 'Spiritual Growth', description: 'We support the exploration of spiritual beliefs as part of personal development.' }
    ];

    const valuesSection = document.querySelector('.values ul');
    valuesList.forEach(value => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${value.title}:</strong> ${value.description}`;
        valuesSection.appendChild(li);
    });

    // Mobile-friendly collapsible navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Dynamic Programs Section
    const programs = [
        { title: 'Purpose Discovery Workshops', description: 'Helping youth discover their passions and set meaningful goals.' },
        { title: 'Career Development Programs', description: 'Equipping participants with the skills to secure stable employment.' },
        { title: 'Scholarship and Financial Aid Guidance', description: 'Offering resources and support for educational opportunities.' },
        { title: 'Spiritual Growth Initiatives', description: 'Promoting reflection and spiritual understanding.' },
        { title: 'Community Engagement Projects', description: 'Encouraging social responsibility through hands-on projects.' }
    ];

    const programsContainer = document.querySelector('.programs');
    programs.forEach(program => {
        const div = document.createElement('div');
        div.classList.add('program');
        div.innerHTML = `<h3>${program.title}</h3><p>${program.description}</p>`;
        programsContainer.appendChild(div);
    });

    // Form Validation with Feedback
    const form = document.querySelector("form");
    const emailField = document.getElementById("email");
    const nameField = document.getElementById("name");
    const messageField = document.getElementById("message");

    emailField.addEventListener('input', () => {
        validateEmail(emailField);
    });

    nameField.addEventListener('input', () => {
        validateField(nameField);
    });

    messageField.addEventListener('input', () => {
        validateField(messageField);
    });

    form.addEventListener("submit", function (event) {
        if (!validateField(nameField) || !validateEmail(emailField) || !validateField(messageField)) {
            event.preventDefault();
            alert("Please fill in all fields correctly.");
        }
    });

    function validateEmail(field) {
        const value = field.value.trim();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(value)) {
            field.style.borderColor = 'green';
            return true;
        } else {
            field.style.borderColor = 'red';
            return false;
        }
    }

    function validateField(field) {
        if (field.value.trim()) {
            field.style.borderColor = 'green';
            return true;
        } else {
            field.style.borderColor = 'red';
            return false;
        }
    }
});
