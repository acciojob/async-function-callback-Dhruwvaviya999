const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.getElementById("btn");

async function fetchDataAndProcess(callback) {
  const res = await fetch(url);
  const data = await res.json();
  callback(data.title);
}

function displayMessage(message) {
    document.getElementById("output").innerText = message;
}

btn.onclick = () => {
	fetchDataAndProcess(displayMessage);
};

