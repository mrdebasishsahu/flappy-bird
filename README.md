# 🐦 Flappy Bird Clone

A faithful, zero-dependency Flappy Bird clone built with HTML5 Canvas 2D and Vanilla JavaScript.

## 🚀 Features

1. **Dual Controls**: Jump using **Mouse Click**, **Touch / Tap**, or the **Spacebar**.
2. **Obstacle Pipes**: Procedurally generated top and bottom pipe pairs with randomized gap heights.
3. **Scoring System**: Real-time score counter with persistent best-score tracking and medal rewards (Bronze, Silver, Gold).
4. **Collision Detection**: Precise AABB (Axis-Aligned Bounding Box) collisions with fairness offsets for pipes, ground, and ceiling.
5. **Game Over & Restart**: Polished Game Over screen with score card, medal, and interactive **Restart** button (also restartable via Spacebar).
6. **Procedural Graphics & Audio**:
   - 100% vector/canvas-drawn sprites (yellow bird with animated wings, pipes with 3D-effect gradients, clouds, scrolling ground).
   - Built-in sound effects using Web Audio API (flap, point scored, hit) without external MP3/WAV files.
7. **Responsive & Mobile Ready**: Auto-scales to fit desktop monitors, tablets, and mobile screens while maintaining the classic 9:16 aspect ratio.

---

## 🛠️ How to Play / Run

### Method 1: Direct File Opening
Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local HTTP Server
Using Python:
```bash
python -m http.server 8080
```
Or using Node.js:
```bash
npx serve .
```
Then navigate to `http://localhost:8080` in your browser.

---

## 🎮 Game Controls

- **Spacebar**: Flap / Start / Restart
- **Left Mouse Click**: Flap / Start / Restart
- **Tap (Mobile / Touchscreen)**: Flap / Start / Restart

