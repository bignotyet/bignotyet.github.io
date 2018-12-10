var randomIndexUsed = [];
var counter = 0;
var numberOfPosts = 5;

import { postsURL } from './random_header.js'
import { postsTitle } from './random_header.js'

while (counter < numberOfPosts)
{
    var randomIndex;
    var postURL;
    var postTitle;

    randomIndex = Math.floor(Math.random() * postsURL.length);

    if (randomIndexUsed.indexOf(randomIndex) == "-1")
    {

        document.write(postsURL)
        postURL = postsURL[randomIndex];
        postTitle = postsTitle[randomIndex];

        if (counter == (numberOfPosts - 1))
        {
            document.write('<p><a href="' + postURL + '">' + postTitle + '</a></p>');
        }
        else
        {
            document.write('<p><a href="' + postURL + '">' + postTitle + '</a></p><hr />');
        }

        randomIndexUsed.push(randomIndex);

        counter++;
    }
}