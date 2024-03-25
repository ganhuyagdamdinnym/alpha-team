const dk = "hello";

const div = dk.split("");

const map = div.map((e, index) => {
  if (e == "o") {
    return index;
  }
});

console.log(map);
