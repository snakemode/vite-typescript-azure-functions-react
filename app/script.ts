console.log("Oh hai! 🖤");

const result = await fetch("/api/hello")
const data = await result.json()
console.log(data)

document.getElementById("response").innerText = JSON.stringify(data);

export { };