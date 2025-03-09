// gameObject function
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 22,
                    steals: 0,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
console.log(gameObject());

// homeTeamName function

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());



//  numPointsScored function 

function numPointsScored(playerName) {
    const game = gameObject(); // Get the game object

    // Check the home team players
    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player].points;
        }
    }

    // Check the away team players
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player].points;
        }
    }

    // If the player is not found, return null or an appropriate message
    return null;
}


// shoeSize function
function shoeSize(playerName) {
    const game = gameObject(); // Get the game object

    // Check the home team players
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    }

    // Check the away team players
    if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }

    // If the player is not found, return null or an appropriate message
    return null;
}
console.log(shoeSize("Ben Gordon")); // Output: 15
console.log(shoeSize("Brook Lopez")); // Output: 17
console.log(shoeSize("Unknown Player")); // Output: null

// teamColors function

function teamColors(teamName) {
    const game = gameObject(); // Get the game object

    // Check if the team name matches the home team
    if (game.home.teamName === teamName) {
        return game.home.colors;
    }

    // Check if the team name matches the away team
    if (game.away.teamName === teamName) {
        return game.away.colors;
    }

    // If the team is not found, return null or an appropriate message
    return null;
}
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]
console.log(teamColors("Charlotte Hornets")); // Output: ["Turquoise", "Purple"]
console.log(teamColors("Unknown Team")); // Output: null

// teamNames function
function teamNames() {
    const game = gameObject(); // Get the game object

    // Return an array of the team names
    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]

// playerNumbers function

function playerNumbers(teamName) {
    const game = gameObject(); // Get the game object

    // Find the team object based on the team name
    let team;
    if (game.home.teamName === teamName) {
        team = game.home;
    } else if (game.away.teamName === teamName) {
        team = game.away;
    } else {
        return null; // Team not found
    }

    // Extract the jersey numbers of all players on the team
    const jerseyNumbers = [];
    for (const player in team.players) {
        jerseyNumbers.push(team.players[player].number);
    }

    return jerseyNumbers;
}
console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 30, 11, 1, 31]
console.log(playerNumbers("Charlotte Hornets")); // Output: [4, 0, 2, 8, 33]
console.log(playerNumbers("Unknown Team")); // Output: null

// playerStats function

function playerStats(playerName) {
    const game = gameObject(); // Get the game object

    // Check the home team players
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }

    // Check the away team players
    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }

    // If the player is not found, return null or an appropriate message
    return null;
}
console.log(playerStats("Alan Anderson"));

// bigShoeRebounds function
function bigShoeRebounds() {
    const game = gameObject(); // Get the game object
    let largestShoeSize = 0; // Track the largest shoe size
    let playerWithLargestShoe = null; // Track the player with the largest shoe size

    // Iterate through both teams
    for (const team of [game.home, game.away]) {
        // Iterate through each player on the team
        for (const playerName in team.players) {
            const player = team.players[playerName];
            // Check if this player has a larger shoe size
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe; // Update the largest shoe size
                playerWithLargestShoe = player; // Update the player with the largest shoe size
            }
        }
    }

    // Return the rebounds of the player with the largest shoe size
    return playerWithLargestShoe.rebounds;
}
console.log(bigShoeRebounds()); // Output: 12

// bonus-mostPointsScored
function mostPointsScored() {
    const game = gameObject(); // Get the game object
    let maxPoints = 0; // Track the highest points
    let playerWithMostPoints = null; // Track the player with the most points

    // Iterate through both teams
    for (const team of [game.home, game.away]) {
        // Iterate through each player on the team
        for (const playerName in team.players) {
            const player = team.players[playerName];
            // Check if this player has more points
            if (player.points > maxPoints) {
                maxPoints = player.points; // Update the highest points
                playerWithMostPoints = playerName; // Update the player with the most points
            }
        }
    }

    return playerWithMostPoints; // Return the player's name
}
console.log(mostPointsScored()); // Output: "Ben Gordon"

// bonus-winningTeam
function winningTeam() {
    const game = gameObject(); // Get the game object
    let homePoints = 0; // Track total points for the home team
    let awayPoints = 0; // Track total points for the away team

    // Calculate total points for the home team
    for (const playerName in game.home.players) {
        homePoints += game.home.players[playerName].points;
    }

    // Calculate total points for the away team
    for (const playerName in game.away.players) {
        awayPoints += game.away.players[playerName].points;
    }

    // Determine the winning team
    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}
console.log(winningTeam()); // Output: "Brooklyn Nets" (or the team with the most points)

// bonus-playerWithLongestName
function playerWithLongestName() {
    const game = gameObject(); // Get the game object
    let longestNameLength = 0; // Track the length of the longest name
    let playerWithLongestName = null; // Track the player with the longest name

    // Iterate through both teams
    for (const team of [game.home, game.away]) {
        // Iterate through each player on the team
        for (const playerName in team.players) {
            // Check if this player's name is longer
            if (playerName.length > longestNameLength) {
                longestNameLength = playerName.length; // Update the longest name length
                playerWithLongestName = playerName; // Update the player with the longest name
            }
        }
    }

    return playerWithLongestName; // Return the player's name
}
console.log(playerWithLongestName()); // Output: "Brendan Haywood"

// superbonus-doesLongNameStealATon
function doesLongNameStealATon() {
    const game = gameObject(); // Get the game object

    // Step 1: Find the player with the longest name
    const longestNamePlayer = playerWithLongestName();

    // Step 2: Find the player with the most steals
    let mostSteals = 0; // Track the highest number of steals
    let playerWithMostSteals = null; // Track the player with the most steals

    // Iterate through both teams
    for (const team of [game.home, game.away]) {
        // Iterate through each player on the team
        for (const playerName in team.players) {
            const player = team.players[playerName];
            // Check if this player has more steals
            if (player.steals > mostSteals) {
                mostSteals = player.steals; // Update the highest steals
                playerWithMostSteals = playerName; // Update the player with the most steals
            }
        }
    }

    // Step 3: Compare the two players
    return longestNamePlayer === playerWithMostSteals;
}
console.log(doesLongNameStealATon()); // Output: true or false
