// Step 3 write code. 

// // 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function find_longest_word(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  find_longest_word("The quick brown fox jumped over the lazy dog");

  // i believe the run time would be around O(1)being it can take some time to find the longest word and its constant time to find it. O(n) didnt make sense being the amount of time 
  //linear with the size of the sheet its small for statment so it shouldnt take long? 