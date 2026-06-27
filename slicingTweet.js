var tweet=prompt("compose ur tweet");
var newTweet=tweet.slice(0,150);
alert("you have written "+ newTweet.length +" characters , you still have "+(150-newTweet.length)+" characters remaining");
alert(newTweet);

