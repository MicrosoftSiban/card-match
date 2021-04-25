# card-match
Make flashcards wth PPT for a memory game by PPT to IMG.

1. Save as PDF (Microsoft Powerpoint)
2. Convert to PNG (https://www.npmjs.com/package/pdf2jpg)
3. Open folder with PNG
4. Create set by file
5. Select amount of days
6. Show progress by days completed
7. Select set to study
8. Continue memorizing

For math or logic, just need to make sure you abstract and prove with steps defined. Always full understanding with drawing. (text, abstract, proof, drawing).

1. Button to upload PDF
2. Show images of cards 
3. Display set by 30 cards
4. Start a timer for 5 minutes
5. Allow user to match
5. State if win or lose
6. Start next set by 30 cards
7. Report results and start over

# As of 04/24/2021
* Created anwser box
* Created display
* Created shuffle
* Created answer key
* Bootstrap 5 added
* Checked anwser
* Working on next set
## Waiting for with node
* Score
* Start over
* Converted to pdf2png
* Load into folder

# Shuffle, Anwser, Check
set | description     | values
----|-----------------|---------------------
 a  | order           | 1,2,3,4,5,6,7,8,9,10
 b  | position        | 8,1,4,10,3,2,7,9,6,5
 c  | (even) answer   | 2,4,6,8,10
 d  | (odd)  question | 1,3,5,7,9
 e  | d               | 6,3,9,1,4
 f  | choice          | 6,3,9,2,4
 g  | result          | y,y,y,n,y 

# Setup
language | ends   | purpose
---------|--------|----------
browser  | client | explore
html     | front  | structure
css      | front  | style
sql      | user   | query
perl     | user   | search
clisp    | user   | think
js       | user   | script
ts       | back   | program
node     | server | run

browser --> index.html --> style.css --> index.js (browser) --> app.js (client)
                                                                deal.js
                                                                cards.js
                                                                configuration.js
work                |
--------------------|
card-match/         |  
 html/              | 
  index.html        |
 css/               |
  style.css         |
 js/                |
  app.js            |
  flashcards/       |
   deal.js          |
   cards.js         |
   configuration.js |
 ts/                |
  ?.ts              |
  convert/          |
   split.ts         |
   process.ts       |
