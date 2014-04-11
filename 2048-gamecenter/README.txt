MATT LONG
2048 GAMECENTER
ASSIGNMENT 4

The app, located at:

http://still-ridge-1681.herokuapp.com/

seems to be fully functional, despite atrocious lack of formatting
or style. It takes the scores from my copy of the 2048 file that
has the post command written in and keeps all the scores stored,
descending by score order.

I worked with Elaine Chestler, Walton Lee, and Skyler Tom when I got
incredibly stuck with CORS problems. Eventually, I came to office hours,
where Ming was able to sort out my issue.

I spent approximately eight hours on this assignment.

The GameManager stores most of the data involved in the game. It contains
a 'score' object that contains the current score, as well as a 'grid'
object that has a lot of sub-objects that store each cell and ultimately
make up the entire grid.

In the GameManager.prototype.actuate() function, which gets called whenever
the grid gets updated, I added code in the part that determines that the
game is over. I declared an object called PostData with three objects - a
score, a username, and a grid that contains the JSON-stringified grid.
There's also a jQuery.post function that sends the username, score, and
grid to the heroku app.