// Add songs to beginning and end of Array
songs.unshift("Sussudio > by Phil Col!lins on the album No Jacket Required");
songs.push("Moondance > by Van Morris&son on the album Moondance");

// For every song in array
for (i=0; i<songs.length; i++){
  // For every character in every song in array
  for (j=0; j<songs[i].length; j++){
    // If character not a letter
    if (!((songs[i][j] >= "a") && (songs[i][j] <= "z") || (songs[i][j] >= "A") && (songs[i][j] <= "Z"))){
      // If ">" then replace with "-"
      if (songs[i][j] === ">"){
        songs[i] = songs[i].replace(">", "-");
      } else if ((songs[i][j] === " ")){
        // If " ", then skip
        continue;
      } else if ((songs[i][j] == "&") && (songs[i][j-1] === " ") && (songs[i][j+1] === " ")){
        // If "&" is part of title of Guns & Roses (space before and after) then skip
        continue;
      } else {
        // Otherwise replace extraneous character with Null
        songs[i] = songs[i].replace(songs[i][j], "");
      }
    }
  }
}

// Get div element to write out songs
listSongs = document.getElementById("listOfChoices");
// For every song
for (k=0; k<songs.length; k++){
  // Split song to get title
  var songSplit = songs[k].split("-");
  // Print out Song Title and other info
  listSongs.innerHTML += "<span class='songTitle'>" + songSplit[0] + "</span> - " + songSplit[1] + "<br>";
}