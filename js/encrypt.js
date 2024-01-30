const map1 = new Map();
map1.set("a", "ai");
map1.set("e", "enter");
map1.set("i", "imes");
map1.set("o", "ober");
map1.set("u", "ufat");

let text = "";

const getNormalText = (e) => {
  text = e.value;
};

const mountPhrase = (prhase, cipherMap) => {
  let resultPhrase = "";

  prhase.split("").map((element) => {
    if (mapWord.has(element)) {
      resultPhrase += cipherMap.get(element);
    } else {
      resultPhrase += element;
    }
  });

  return resultPhrase;
};

const cryptFunction = () => {
  return mountPhrase(text, map1);
};

const showTextFunc = () => {
  const showText = document.getElementById("text-result");
  showText.innerHTML = cryptFunction();
};
