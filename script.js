const roles = [
"Building Communities",
"Creating Automation",
"Growing Digital Projects",
"Turning Ideas Into Systems"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

const currentRole = roles[roleIndex];

if (!deleting) {

    typingElement.textContent =
        currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {

        deleting = true;

        setTimeout(typeEffect, 1800);

        return;
    }

} else {

    typingElement.textContent =
        currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }
}

setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

    if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform =
            "translateY(0)";
    }

});

}, {
threshold: 0.1
});

document
.querySelectorAll(
".project-card, .skill-card, .intro-card, .contact-box"
)
.forEach((element) => {

element.style.opacity = "0";

element.style.transform =
    "translateY(30px)";

element.style.transition =
    "all .6s ease";

observer.observe(element);

});
