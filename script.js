// =========================================================================
// 🖼️ CUSTOM IMAGE ADDRESSES IN CODE
// Replace any image links below with your own!
// =========================================================================
const CUSTOM_IMAGES = {
  level1: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5Ekr5UqbyTlK7pA6rEdI-ceRnVtF4YE6gXG74EAcvQ&s=10", // Clicks 0–9
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzK0sXC1_R1w4SJjev3_UQT0a_PJcrWtWPy1MKq5bPA&s=10", // Clicks 10–19
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-0SvJzAp-ehqjLlf7DDpu68LOgZ3yccmNBP53RoMJQ&s=10", // Clicks 20–29
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPf2uf2n-_O6HX0z3YzdNmCdw6AqKB1kTDLnoqUbElQ&s=10", // Clicks 30–39
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwsaHidG7a3Ax3x90o3oJWs6A_bxMnzZaZxKkHyJRk-CNZTzMsGBQ3u21NOW-34B4kEvTX1SvbUSwD92_Lvv_Bmvnw3VhGwj1u-O7HwNmj-dj5uJ7Z_SOwtA&usqp=CAc"  // Clicks 40–49
  ],
  level2: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJp3AE4al1HFMzY26iZi5nd_Szsx9mhzQ9Q8XhHJbWyg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWysiU8tGxhDB6MRtG-c37JnqHQ3APMS5kvh9OlFpIlw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTNRD63e5hVXQZBFwF47j-JCQYQQS5Vb1j9_sYmIrRw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNkFa1-1lqUe_DfSzjrRe_dHDS567tRZSIBonIt9SdA&s=10",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTI1liD5pImJOvs9Mva_lvAPrNnunFMBr-kpDvwtmAZljy5lj-vzlcW2c1mRXN7CJ3wYdPko08s7BgMkLT4LKpU3_ojFSKBVQv_wTiBokUFfoq2ABHO5IeY&usqp=CAc"
  ],
  level3: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRwqC-45sXMRxjeW9saGK59Gg4fY1UGHeJ69Js5YOBg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Qiwfi1BeQCyqlkJPFiCyGjv4lQ4TwLGx8jnz-L4q1w&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvevK_ZXi_pRskBcXUjEvqVrkV7XG1tUUw4Y3o9mOXA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf9LiMkGsvexEmYd4QYlsCo1ML_edytQ64CIWjgQ5xg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsf2QAvTnz059PXuliCJ83rusYjV1CcVZ6VvhCZsZGw&s=10"
  ],
  level4: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZNqQh3yuyLzP08O2UfzL2ozatUFN-Y6kbC1MyWm7hA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3F1FKXo4SvNbJ63w1u1xz3X8yqhEgk3KsrXhnjn9Ug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhby6w-5ixyE34XPxqwcF0sTFc-f0zES1cJ4MS2aXKQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjr24z-7sTctgj8NFT_HpfcBRFlVcOgCtD4gROhgh5g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAPU8qgpJzJHrk3Slx_p1iwFEp8STpkrZ_0R3bXmnqA&s=10"
  ],
  level5: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gfz2KsSuE5ahfRh9kCGWhJipMTvvMokNpBSjvHdsMg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpgZyh4tQ3LCn-Cvd7kDv2ozPRWVsn_C_-icaTzFrFQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmb3cyQhOwkmdxKYvP3EmRejVYUddWdj9D8xk236rudQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuOt_wpid29zCjsb5vVIx8tnTZBq4v3EEFk4qSIKjTQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5F6oNiT1Lb8HWUwFyxEB386FDsjwrcUuoZAoRzdmkA&s=10"
  ]
};

// Config & State
const THEMES = [
  { name: "Cyber Neon", class: "theme-1" },
  { name: "Kaleidoscope", class: "theme-2" },
  { name: "Liquid Glass", class: "theme-3" },
  { name: "Retro Pixel", class: "theme-4" },
  { name: "Prism Heavy", class: "theme-5" }
];

const TARGET_CLICKS = 50;
let currentLevel = 0;
let levelClicks = 0;
let totalClicks = 0;

// DOM Elements
const gameBody = document.getElementById("gameBody");
const levelDisplay = document.getElementById("levelDisplay");
const themeDisplay = document.getElementById("themeDisplay");
const totalClicksDisplay = document.getElementById("totalClicksDisplay");
const clicksDisplay = document.getElementById("clicksDisplay");
const progressBar = document.getElementById("progressBar");
const phaseIndicator = document.getElementById("phaseIndicator");
const cardImage = document.getElementById("cardImage");
const mainCard = document.getElementById("mainCard");
const restartBtn = document.getElementById("restartBtn");
const nextBtn = document.getElementById("nextBtn");

function loadLevel(levelIndex) {
  currentLevel = levelIndex;
  levelClicks = 0;

  // Change Theme & Level Font Style
  gameBody.className = THEMES[currentLevel].class;
  themeDisplay.textContent = THEMES[currentLevel].name;
  levelDisplay.textContent = currentLevel + 1;

  updateUI(false);
  nextBtn.disabled = true;
}

function getCurrentImageUrl() {
  const levelKey = `level${currentLevel + 1}`;
  const levelImages = CUSTOM_IMAGES[levelKey] || CUSTOM_IMAGES.level1;
  const stage = Math.floor(levelClicks / 10);
  const imageIndex = Math.min(stage, levelImages.length - 1);
  return { url: levelImages[imageIndex], stageNumber: stage + 1 };
}

function updateUI(triggerSpin = false) {
  clicksDisplay.textContent = levelClicks;
  totalClicksDisplay.textContent = totalClicks;

  // Progress Bar
  const percentage = (levelClicks / TARGET_CLICKS) * 100;
  progressBar.style.width = `${percentage}%`;

  // Get current stage image
  const currentData = getCurrentImageUrl();

  if (cardImage.src !== currentData.url) {
    cardImage.src = currentData.url;

    // Trigger 3D Spin Swap Effect on Image Shift
    if (triggerSpin) {
      mainCard.classList.remove("spin-swap");
      void mainCard.offsetWidth; // Force Reflow
      mainCard.classList.add("spin-swap");
    }
  }

  const minClick = Math.floor(levelClicks / 10) * 10;
  const maxClick = minClick + 9;
  phaseIndicator.textContent = `Stage ${currentData.stageNumber}: Clicks ${minClick}–${maxClick}`;
}

// Sparkle Burst Effect Function
function createSparkles(e) {
  const rect = mainCard.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  // Create 10 sparkle particles
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    sparkle.style.left = `${clickX}px`;
    sparkle.style.top = `${clickY}px`;

    // Random velocity trajectory
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 20;
    const dx = `${Math.cos(angle) * distance}px`;
    const dy = `${Math.sin(angle) * distance}px`;

    sparkle.style.setProperty("--dx", dx);
    sparkle.style.setProperty("--dy", dy);

    mainCard.appendChild(sparkle);

    // Remove particle after animation
    setTimeout(() => sparkle.remove(), 600);
  }
}

// Handle Card Click
mainCard.addEventListener("click", (e) => {
  if (levelClicks >= TARGET_CLICKS) return;

  createSparkles(e);

  levelClicks++;
  totalClicks++;

  // Check if entering a new 10-click image stage
  const isImageShift = levelClicks % 10 === 0 && levelClicks < TARGET_CLICKS;

  updateUI(isImageShift);

  // Check Level Completion
  if (levelClicks >= TARGET_CLICKS) {
    if (currentLevel < THEMES.length - 1) {
      phaseIndicator.textContent = "🎉 Level Complete! Click 'Next Level' to advance.";
      nextBtn.disabled = false;
    } else {
      phaseIndicator.textContent = "🏆 Victory! You completed all 5 levels!";
    }
  }
});

// Controls
restartBtn.addEventListener("click", () => loadLevel(currentLevel));

nextBtn.addEventListener("click", () => {
  if (currentLevel < THEMES.length - 1) {
    loadLevel(currentLevel + 1);
  }
});

// Start Game
loadLevel(0);
