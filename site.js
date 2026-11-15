// Site settings. Turn things on here when they're ready.
var SETTINGS = {
  // Paste your Substack address here (e.g. "https://write.xoleigh.com") to show the sign-up box and Subscribe button.
  substackUrl: "https://leighwetzel.substack.com/subscribe",
  // Set to true once there's at least one post, to show the Writing link.
  showWriting: false,
  // How many updates to show on the home page.
  updatesToShow: 6
};

var APP_ICONS = {
  "Wiki Walk": "images/wiki-walk-icon.png?v=3",
  "TV Rex": "images/tv-rex-icon.png?v=3"
};

(function () {
  var today = document.getElementById("today");
  if (today) {
    today.textContent = new Date().toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric"
    });
  }

  if (SETTINGS.substackUrl) {
    var top = document.getElementById("subscribe-top");
    var link = document.getElementById("signup-link");
    top.href = SETTINGS.substackUrl;
    link.href = SETTINGS.substackUrl;
    top.hidden = false;
    document.getElementById("signup").hidden = false;
    document.getElementById("side").hidden = false;
    document.querySelector(".lower").classList.add("has-side");
  }

  if (SETTINGS.showWriting) {
    document.getElementById("nav-writing").hidden = false;
  }

  var list = document.getElementById("update-list");
  var items = (window.UPDATES || []).slice(0, SETTINGS.updatesToShow);
  items.forEach(function (u) {
    var li = document.createElement("li");
    li.className = "update";

    var icon = document.createElement("img");
    icon.src = APP_ICONS[u.app] || "";
    icon.alt = "";
    icon.width = 52;
    icon.height = 52;

    var body = document.createElement("div");
    var meta = document.createElement("span");
    meta.className = "update-meta";
    var name = document.createElement("b");
    name.textContent = u.app;
    meta.appendChild(name);
    meta.appendChild(document.createTextNode(" · " + formatDate(u.date)));

    var text = document.createElement("span");
    text.className = "update-text";
    text.textContent = u.text;

    body.appendChild(meta);
    body.appendChild(text);
    li.appendChild(icon);
    li.appendChild(body);
    list.appendChild(li);
  });

  function formatDate(iso) {
    var p = iso.split("-");
    var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
})();
