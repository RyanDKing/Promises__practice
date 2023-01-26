// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"));

/*
const emailRef = document.querySelector(".email");
console.log(emailRef);

// Then

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   });

// Async/Await
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  emailRef.innerHTML = data.email;
}

main();

const statusRef = document.querySelector(".status");

// Creating a Promise
function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

//. Then
getSubscriptionStatus().then((response) => {
  console.log(response);
});

//2.Async/Await

async function main2() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

main2();
*/

// Challenge

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  } catch (e) {
    console.log(e);
    videoRef.innerHTML = e;
  }
}

main();
