export default function HandleDebug() {
  fetch("http://localhost:8002/getChocolatedata")
    .then((e) => e.json())
    .then((data) => console.log(data));
}
