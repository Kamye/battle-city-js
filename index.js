import World from './src/world.js';
import View from './src/view.js';
import Game from './src/game.js'


new Game({
    world: new World(),
    view: new View()
});