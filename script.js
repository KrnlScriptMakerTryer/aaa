const games = [
  { name: "Minecraft AboutBlank", path: "contents/minecraft-aboutblank.html" },
  { name: "Chrome Dino", path: "contents/dino/index.html" },
  { name: "2048", path: "contents/2048/index.html" },
  // Add more games here
];

function createGUI() {
  // Logo
  const logo = document.createElement("img");
  logo.id = "logo";
  logo.src = "https://i.imgur.com/GSJbXh5.png";
  document.body.appendChild(logo);

  // Chrome-only warning
  if (/iPad|iPhone|Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    const warn = document.createElement("div");
    warn.id = "warning";
    warn.innerText = "⚠️ Chrome only — Safari is not supported properly.";
    document.body.appendChild(warn);
  }

  // Game list container
  const gameList = document.createElement("div");
  gameList.id = "game-list";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";

    const title = document.createElement("div");
    title.className = "game-title";
    title.innerText = game.name;

    const button = document.createElement("button");
    button.className = "launch-button";
    button.innerText = "Play Fullscreen";
    button.onclick = () => {
      const win = window.open("about:blank", "_blank");
      if (!win) {
        alert("Popup blocked! Please allow popups for this site.");
        return;
      }
      win.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>${game.name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <style>
            html, body {
              margin: 0; padding: 0; height: 100%; overflow: hidden;
            }
            iframe {
              position: fixed;
              top: 0; left: 0; right: 0; bottom: 0;
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
        </head>
        <body>
          <iframe src="${game.path}" allowfullscreen></iframe>
        </body>
        </html>
      `);
      win.document.close();
    };

    card.appendChild(title);
    card.appendChild(button);
    gameList.appendChild(card);
  });

  document.body.appendChild(gameList);
}

createGUI();
