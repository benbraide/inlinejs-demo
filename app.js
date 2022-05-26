const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

// app.use(express.static('.'));

app.get('/', function (req, res){
    return res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/json/apps', function (req, res){
    return res.send([{ path: 'calculator', name: 'Calculator' }]);
});

app.get('/json/games', function (req, res){
    return res.send([
        { path: 'hangman', name: 'Hangman Classic' },
        { path: 'tictactoe', name: 'Tic Tac Toe' },
        { path: 'snake', name: 'Snake Original' },
    ]);
});

app.get('/json/record', function (req, res){
    return res.send(`{
        players: [{ name: 'Player 1', tag: 0, wins: 0, losses: 0 }],
        currentPlayer: 0,
        addPlayer(name, tag){
            (name = name.trim()) && this.players.push({ name, tag, wins: 0, losses: 0 });
        },
        updatePlayer(index, name, tag){
            if (index < this.players.length){
                this.players[index].name = (name || this.players[index].name);
                this.players[index].tag = tag;
            }
        },
        removePlayer(index){
            this.players.splice(index, 1);
            if (++this.currentPlayer >= this.players.length){
                this.currentPlayer = 0;
            }
        },
        endPlayerTurn(won){
            if (won){
                ++this.players[this.currentPlayer].wins;
            }
            else{
                ++this.players[this.currentPlayer].losses;
            }

            if (++this.currentPlayer >= this.players.length){
                this.currentPlayer = 0;
            }
        }
    }`);
});

app.get('/json/words', function (req, res){
    return res.send({
        animal: ['dog', 'fish', 'elephant', 'cat', 'tiger', 'lion', 'monkey', 'gorilla', 'hipopotamus', 'cheetah', 'hyena', 'bear', 'panda', 'jaguar', 'whale', 'octopus',
            'zebra', 'horse', 'leopard', 'porcupine', 'antelope', 'fox', 'wolf', 'flamingo', 'penguin', 'giraffe', 'tortoise', 'shark', 'dolphin', 'crocodile', 'eagle'],
        fruit: ['mango', 'orange', 'apple', 'banana', 'pineapple', 'strawberry', 'guava', 'plum', 'pear', 'avocado', 'cantelope', 'lemon', 'strawberry', 'pear',
            'avocado', 'cucumber', 'watermelon', 'guava', 'blackberry', 'paw-paw', 'lime', 'plum', 'sour sop', 'grape'],
        place: ['rivers', 'lagos', 'abuja', 'usa', 'canada', 'nigeria', 'sweden', 'europe', 'africa', 'spain', 'bedroom', 'kitchen', 'school', 'abuja', 'france', 'england',
            'scotland', 'russia', 'germany', 'egypt', 'port-harcourt', 'airport', 'bayelsa', 'dubai', 'australia', 'rumuosi', 'ukraine', 'china'],
        food: ['beans', 'rice', 'banga', 'eba', 'yam', 'plantain', 'sausage', 'spaghetti', 'pizza', 'burger', 'salad', 'pancake', 'cocoyam', 'potato', 'spaghetti',
            'soup', 'chicken', 'hot dog', 'meat pie', 'biscuits', 'custard', 'bread', 'moi-moi', 'noodles'],
    });
});

app.get(/^.+$/, function (req, res){
    let resPath = path.join(__dirname, req.path);
    if (fs.existsSync(resPath) && !fs.lstatSync(resPath).isDirectory()){
        return res.sendFile(resPath);
    }

    if (!req.path.startsWith('/pages/') && !req.path.startsWith('pages/')){
        return res.sendFile(path.join(__dirname, '/index.html'));
    }

    if (fs.existsSync(`${resPath}.html`)){
        return res.sendFile(`${resPath}.html`);
    }

    if (fs.existsSync(`${resPath}/index.html`)){
        return res.sendFile(`${resPath}/index.html`);
    }

    if (fs.existsSync(`${resPath}/home.html`)){
        return res.sendFile(`${resPath}/home.html`);
    }

    return res.sendStatus(404);
});

// app.get('/goodbye', function (req, res){
//     res.send('Goodbye World');
// });

// app.get('/wow', function (req, res){
//     res.send('You would be amazed how easy it is to fetch data');
// });

// const searchableItems = [
//     'Bread',
//     'Butter',
//     'Peanut',
//     'Margerine',
//     'Pineapple',
//     'Chocolate',
//     'Coconut',
//     'Tea',
// ];

// app.get('/search', async function (req, res){
//     let query = req.query['q'];
//     let regex = new RegExp(query, 'i');
//     let matchedItems = searchableItems.filter(item => regex.test(item));
//     await new Promise((resolve) => {
//         setTimeout(() => resolve(), 7000);
//     });
//     res.send(matchedItems);
// });

// app.get('/location', async function (req, res){
//     let long = req.query['long'], lat = req.query['lat'];
//     res.send({
//         long: long + 10,
//         lat: lat + 80,
//     });
// });

const port = 3000;

app.listen(port).addListener('listening', () => console.log(`Local server listening on http://localhost:${port}`));
