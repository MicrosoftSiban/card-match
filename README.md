# Design
## Shuffle, Anwser, Check
set | description     | values
----|-----------------|---------------------
 a  | order           | 1,2,3,4,5,6,7,8,9,10
 b  | position        | 8,1,4,10,3,2,7,9,6,5
 c  | (even) answer   | 2,4,6,8,10
 d  | (odd)  question | 1,3,5,7,9
 e  | d               | 6,3,9,1,4
 f  | choice          | 6,3,9,2,4
 g  | result          | y,y,y,n,y 

# Organization
## Sequence
![typescript-application (1)](https://user-images.githubusercontent.com/58202540/116008166-adbe3000-a602-11eb-8e83-5a3c2ff2d042.png)


## Task Management
Data       | Title
-----------|------------
executable | Function
folders    | Project     
folder     | Assignment  
file       | Task
head       | Note
block      | Step
line       | Instruction

### Card Match
* card-match/           
  * html/               
    * index.html        
  * css/               
    * style.css         
  * js/                
    * app.js            
    * flashcards/       
      * deal.js          
      * cards.js         
    * configuration.js 
  * ts/                
    * main.ts              
      * convert/          
        * split.ts         
        * process.ts

# Setup
language   | ends      | purpose
-----------|-----------|----------
browser    | client    | explore - google
html       | front     | structure
xml        | front     | rule
latex      | front     | document
css        | front     | style
sql        | user      | query
perl       | user      | search
js         | user      | script
clisp      | back      | think (lisp) - nasa
ts         | back      | program (c#) - microsoft
c#         | back      | hack - microsoft
php        | server    | serve
node       | server    | run - google
powershell | shell     | configure - microsoft
platform   | system    | operate - microsoft
z80        | processor | assemble
binary     | computer  | act
physics    | universe  | interact
