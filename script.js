const newsText = document.getElementById("news-text");
const messages = [
    "Finance Shared Services Strategic Planning 2020-2030",
    "Annual Summary Report",
    "New Policy Updates",
    "Upcoming Employee Engagement Sessions"
];

let index = 0;

function updateNews() {
    index = (index + 1) % messages.length;
    newsText.innerText = messages[index];
}

setInterval(updateNews, 3000);
