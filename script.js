const roles = ['Community Founder', 'Bot Developer', 'Store Owner'];

let i = 0;
let j = 0;
let del = false;

const el = document.getElementById('typing');

setInterval(() => {
    let text = roles[i];

    el.textContent = text.slice(0, j);

    if (!del) {
        j++;

        if (j > text.length) {
            del = true;
        }
    } else {
        j--;

        if (j === 0) {
            del = false;
            i = (i + 1) % roles.length;
        }
    }
}, 120);
