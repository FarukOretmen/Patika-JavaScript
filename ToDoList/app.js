//bir kapatma düğmesi oluşturup bunu her liste ögesine ekledim
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//liste ögesini gizlemek için bir kapat düğmesine tıkla
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//bir liste ögesine tıkladığında işaretli sembol ekleyin
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// ekle düğmesine tıklandığında yeni bir liste oluştur
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.querySelector("#task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Bir Seyler Yazmalisin!");
  } else {
    document.querySelector("#list").appendChild(li);
  }
  document.querySelector("#task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
