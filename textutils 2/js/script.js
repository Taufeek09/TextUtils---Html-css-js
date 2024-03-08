window.alert = function (message, timeout = null) {
  const alertBox = document.createElement("div");
  alertBox.classList.add("alert");
  alertBox.style.position = "fixed";
  alertBox.style.top = "12%";
  alertBox.style.left = "35%";
  alertBox.style.width = "50%";
  alertBox.style.transform = "translate(-50%, -56%)";
  alertBox.style.padding = "20px 40px";
  alertBox.style.backgroundColor = "lightgray";
  alertBox.style.border = "1px solid black";
  alertBox.style.borderRadius = "5px";
  alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  alertBox.style.zIndex = "9999";
  alertBox.innerHTML = message;
  document.body.appendChild(alertBox);
  if (timeout !== null && !isNaN(timeout) && timeout > 0) {
    setTimeout(function () {
      alertBox.remove();
    }, timeout);
  }
};

function darklightmode() {
  let a = document.body.style.backgroundColor;
  let b = document.getElementById("darktolight");
  if (a != "black") {
    a = document.body.style.backgroundColor = "black";
    b = document.getElementById("darktolight").innerHTML = "Enable Light Mode";
    let textcolor = document.getElementById("text-dark");
    let element = document.getElementById("textrep");
    let box = document.getElementById("mybox");
    let con1 = document.getElementById("con1");
    element.classList.remove("navbar-light");
    element.classList.remove("bg-light");
    box.classList.remove("bg-light");
    box.classList.add("bg-dark");
    box.classList.remove("text-dark");
    box.classList.add("text-light");
    textcolor.classList.remove("text-dark");
    textcolor.classList.add("text-light");
    element.classList.add("navbar-dark");
    element.classList.add("bg-dark");
    con1.classList.remove("text-dark");
    con1.classList.add("text-light");
    alert("Dark Mode Enabled", "1500");
  } else {
    a = document.body.style.backgroundColor = "white";
    b = document.getElementById("darktolight").innerHTML = "Enable Dark Mode";
    let textcolor = document.getElementById("text-dark");
    let element = document.getElementById("textrep");
    let box = document.getElementById("mybox");
    element.classList.remove("navbar-dark");
    element.classList.remove("bg-dark");
    box.classList.remove("bg-dark");
    box.classList.add("bg-light");
    box.classList.remove("text-light");
    box.classList.add("text-dark");
    element.classList.add("navbar-light");
    element.classList.add("bg-light");
    textcolor.classList.add("text-dark");
    textcolor.classList.remove("text-light");
    con1.classList.remove("text-light");
    con1.classList.add("text-dark");

    alert("Light Mode Enabled", "1500");
  }
}

let box = document.querySelector("#mybox");
let previewElement = document.querySelector("#preview");
let wordCountElement = document.querySelector("#wordcar");
let sentenceCountElement = document.querySelector("#sent");
let minReadElement = document.querySelector("#minread");
let questionCountElement = document.querySelector("#questionCount");

function dis() {
  let text = box.value.trim();
  previewElement.textContent = text;
  let wordCount = text.split(/\s+/).filter((word) => word !== "").length;
  let charCount = text.length;
  wordCountElement.textContent =
    charCount + " Characters and " + wordCount + " Words";
  let paragraphCount = text
    .split(/\n\s*\n/)
    .filter((paragraph) => paragraph.trim() !== "").length;
  let sentenceCount = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim() !== "").length;
  sentenceCountElement.textContent =
    sentenceCount + " Sentences and " + paragraphCount + " Paragraphs";
  let questionCount = (text.match(/\?/g) || []).length;
  let exclamationCount = (text.match(/\!/g) || []).length;
  questionCountElement.textContent =
    questionCount + " Questions and " + exclamationCount + " Exclamations";
  let wordsPerMinute = 100;
  let estimatedMinutes = Math.ceil(wordCount / wordsPerMinute);
  minReadElement.textContent =
    "Estimated Reading Time: " + estimatedMinutes + " min";
}

box.addEventListener("input", dis);
dis();
setInterval(dis, 500);
window.onload = function () {
  let textarea = document.getElementById("mybox");
  textarea.value = "";
};

function ConvertUpCase() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.toUpperCase();
  alert("Text Converted to UpperCase", "1500");
}

function ConvertLowerCase() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.toLowerCase();
  alert("Text Converted to LowerCase", "1500");
}

function ConvertCapitalize() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
  alert("Text Converted to Capitalize", "1500");
}

function Clear() {
  let textBox = document.getElementById("mybox");
  textBox.value = "";
  alert("Text Cleared", "1500");
}

function Copy() {
  let textBox = document.getElementById("mybox");
  navigator.clipboard.writeText(textBox.value);
  alert("Text Copied Successfull", "1500");
}

function Paste() {
  setTimeout(async () => {
    let textBox = document.getElementById("mybox");
    const text2 = await navigator.clipboard.readText();
    const newText = textBox.value + " " + text2;
    textBox.value = newText;
  }, 500);
}
function RemoveExtraSpace() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.replace(/\s+/g, " ").trim();
  alert("All ExtraSpaces Removed", "1500");
}

function Print() {
  let textBox = document.getElementById("mybox");
  window.print(textBox.value);
  alert("Print Successfull", "1500");
}

function Speech() {
  let textBox = document.getElementById("mybox");
  let utterance = new SpeechSynthesisUtterance(textBox.value);
  speechSynthesis.speak(utterance);
  alert("Speech Successfull", "1500");
}

function stopSpeechText() {
  speechSynthesis.cancel();
  alert("Speech Stop Successfull", "1500");
}

function Reverse() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.split("").reverse().join("");
  alert("Text Reversed Successfull", "1500");
}

function TextUnicode() {
  let textBox = document.getElementById("mybox");
  textBox.value = [...textBox.value]
    .map((c) => c.charCodeAt(0).toString(16))
    .join(" ");
  alert("Text Converted to Unicode", "1500");
}

function textToSentenceCase() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (char) {
      return char.toUpperCase();
    });
  alert("Text Converted to SentenceCase", "1500");
}

function RemoveSpecialCharacters() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.replace(/[^\w\s]/gi, "");
  alert("All SpecialCharacters Removed", "1500");
}

function RemoveNumbers() {
  let textBox = document.getElementById("mybox");
  textBox.value = textBox.value.replace(/[0-9]/g, "");
  alert("All Numbers Removed", "1500");
}

function DownloadText() {
  let textBox = document.getElementById("mybox");
  let text = textBox.value;
  let filename = "text.txt";
  let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  saveAs(blob, filename);
  alert("Text Downloaded Successfull", "1500");
}

function ExtractLink() {
  let textBoxValue = document.getElementById("mybox").value;
  let urlPattern = /(https?:\/\/[^\s]+)/g;
  let links = textBoxValue.match(urlPattern);
  let displayBox = document.getElementById("mybox");
  displayBox.value = "";
  if (links) {
    displayBox.value = links.join("\n");
    alert("Links extracted successfully.", "1500");
  } else {
    alert("No links found.", "1500");
  }
}

function searchGoogle() {
  let searchQuery = document.getElementById("mybox").value;
  let searchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
  window.open(searchUrl, "_blank");
  alert("Google Search Successfull", "1500");
}
var textarea = document.getElementById("mybox");
var buttons = document.querySelectorAll("button");

function toggleButtons() {
  var isEmpty = textarea.value.trim() === "";
  buttons.forEach(function (button) {
    button.disabled = isEmpty;
  });
}

textarea.addEventListener("input", toggleButtons);
toggleButtons();
