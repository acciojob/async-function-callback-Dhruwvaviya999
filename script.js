const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.getElementById("btn");

async function fetchDataAndProcess(callback) {
      // Simulate a delay using a Promise (like fetching data from server)
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Data fetched successfully!");
        }, 2000); // 2 second delay
      });

      // Call the callback with the result
      callback(result);
    }

function displayMessage(message) {
      document.getElementById("output").innerText = message;
    }

btn.onclick = () => {};
fetchDataAndProcess(displayMessage);
