const games = [
  { name: "Minecraft 1.8.8", path: "contents/minecraft/index.html" },
  { name: "Chrome Dino", path: "contents/dino/index.html" },
  { name: "2048", path: "contents/2048/index.html" },
  // Add more games here
];

function createGUI() {
  // Logo
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = 'https://i.imgur.com/GSJbXh5.png';
  document.body.appendChild(logo);

  // Warning
  if (/iPad|iPhone|Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    const warn = document.createElement('div');
    warn.id = 'warning';
    warn.innerText = '⚠️ Chrome only — Safari is not supported properly.';
    document.body.appendChild(warn);
  }

  // Game list container
  const gameList = document.createElement('div');
  gameList.id = 'game-list';

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';

    const title = document.createElement('div');
    title.className = 'game-title';
    title.innerText = game.name;

    const button = document.createElement('button');
    button.className = 'launch-button';
    button.innerText = 'Play Fullscreen';
    button.onclick = () => {
      const win = window.open("about:blank", "_blank");
      win.document.write(`
        <iframe src="${game.path}" style="width:100vw;height:100vh;border:none;"></iframe>
      `);
    };

    card.appendChild(title);
    card.appendChild(button);
    gameList.appendChild(card);
  });

  document.body.appendChild(gameList);
}

createGUI();
