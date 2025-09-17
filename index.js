const btn = document.getElementById('btn');
const responseEl = document.getElementById('response');

async function getActivity() {
    const response = await fetch('./activities.json');
    const activities = await response.json();
    const { name } = generateRandom(activities);
    renderActivity(name);
}

function generateRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
}

function renderActivity(name) {
    responseEl.innerHTML = '';

    const p = document.createElement('p');
    const textEl = document.createTextNode(name);
    
    p.appendChild(textEl);
    responseEl.appendChild(p);
}

btn.addEventListener('click', getActivity);