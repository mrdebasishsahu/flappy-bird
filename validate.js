const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const checks = {
    'Canvas element': html.includes('<canvas id="gameCanvas"'),
    'Gravity constant': html.includes('GRAVITY = 0.4'),
    'Jump strength': html.includes('JUMP_STRENGTH = -7'),
    'Pipe gap': html.includes('PIPE_GAP = 130'),
    'Pipe speed': html.includes('PIPE_SPEED = 2.5'),
    'Space key handler': html.includes("e.code === 'Space'"),
    'Mouse click handler': html.includes("'mousedown'"),
    'Touch handler': html.includes("'touchstart'"),
    'AABB collision': html.includes('aabbCollision'),
    'Ground collision': html.includes('Ground collision'),
    'Pipe collision': html.includes('Pipe collision'),
    'Score increment': html.includes('score++'),
    'Game over function': html.includes('function gameOver()'),
    'Game over state': html.includes('STATE_GAME_OVER'),
    'Restart button': html.includes('Restart'),
    'Reset game function': html.includes('function resetGame()'),
    'Ready screen': html.includes('drawReadyScreen'),
    'Game over screen': html.includes('drawGameOverScreen'),
    'Bird drawing': html.includes('drawBird'),
    'Pipe drawing': html.includes('drawPipe'),
    'Ground drawing': html.includes('drawGround'),
    'Background drawing': html.includes('drawBackground'),
    'Best score tracking': html.includes('bestScore'),
    'requestAnimationFrame': html.includes('requestAnimationFrame'),
    'Responsive scaling': html.includes('resizeCanvas'),
    'Wing animation': html.includes('wingFrame'),
    'Bird rotation': html.includes('bird.rotation'),
    'Pipe spawn interval': html.includes('PIPE_SPAWN_INTERVAL'),
    'Max fall speed': html.includes('MAX_FALL_SPEED'),
    'Game states (3)': html.includes('STATE_READY') && html.includes('STATE_PLAYING') && html.includes('STATE_GAME_OVER'),
};

console.log('=== Flappy Bird Feature Validation ===\n');
let passed = 0;
let failed = 0;
for (const [name, ok] of Object.entries(checks)) {
    const status = ok ? 'PASS' : 'FAIL';
    console.log((ok ? '[PASS]' : '[FAIL]') + ' ' + name);
    if (ok) passed++;
    else failed++;
}
console.log('\nTotal: ' + (passed + failed) + '  Passed: ' + passed + '  Failed: ' + failed);
console.log(failed === 0 ? '\nALL CHECKS PASSED!' : '\nSOME CHECKS FAILED');

