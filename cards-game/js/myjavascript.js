       function cardBack(){   
       for(var i = 0; i < 6; i++)
          document.getElementById("demo3").innerHTML += `<img src = "images/back.png" style = "width: 100px; heigth: 150px">`;
       for(var i = 6; i < 12; i++)
          document.getElementById("demo4").innerHTML += `<img src = 'images/back.png' style = "width: 100px; heigth: 150px">`;
           
   }
cardBack();
    
    class Card{
        constructor(type, number, img){
            this._type = type;
            this._number = number;
            this._img = img;

        }

        set type(value) {
            this._type = value;
        }

        set number(value) {
            this._number = value;
        }

        set img(value) {
            this._img = value;
        }

        get type() {
            return this._type;
        }

        get number() {
            return this._number;
        }

        get img() {
            return this._img;
        }
    }

    class CardList {

        constructor() {
            this.cards = [];
        }

        fillCards() {

            var types = ["C", "H", "S", "D"];
            var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
            for (let i = 0; i < types.length; i++) {
                for (let j = 0; j < numbers.length; j++) {
                    this.cards.push(new Card(types[i], numbers[j], "images/" + numbers[j] + types[i] + ".png"));
                   
                }
                 
            }   

        }
        
        shuffle() {
            
                    for (let i = 0; i < 50; i++)
                { 
                    var x = parseInt(0 + Math.random() * 52);
                    var y = parseInt(0 + Math.random() * 52);
                    
                    var temp = this.cards[x].img;
                    this.cards[x].img = this.cards[y].img;
                    this.cards[y].img = temp;
                
                }
        }

        getCards() {
           
         return this.cards;
            
        }

       printCards() {
                      for (let i = 0; i < 6; i++) {
              //  document.write(`<img src = "${this.cards[i].img}" style = "width: 50px; heigth: 100px"> `)
         document.getElementById("demo1").innerHTML += `<img src = "${this.cards[i].img}" style = "width: 100px; heigth: 150px">`
                      
            }
               for (let i = 6; i < 12; i++) {
         document.getElementById("demo2").innerHTML += `<img src = "${this.cards[i].img}" style = "width: 100px; heigth: 150px">`
                      
            }
        }
      result()
        {
         var point = 0;
            
            for(let i = 0; i < 6; i++)
            {
                if(this.cards[i].img.charAt(7) == "2")
                {
                    point += 2;
                }
                if(this.cards[i].img.charAt(7) == "3")
                {
                    point += 3;
                }
                if(this.cards[i].img.charAt(7) == "4")
                {
                    point += 4;
                }
                if(this.cards[i].img.charAt(7) == "5")
                {
                    point += 5;
                }
                if(this.cards[i].img.charAt(7) == "6")
                {
                    point += 6;
                }
                if(this.cards[i].img.charAt(7) == "7")
                {
                    point += 7;
                }
                if(this.cards[i].img.charAt(7) == "8")
                {
                    point += 8;
                }
                if(this.cards[i].img.charAt(7) == "9")
                {
                    point += 9;
                }
                if(this.cards[i].img.charAt(7) == "1")
                {
                    point += 10;
                }
                if(this.cards[i].img.charAt(7) == "J")
                {
                    point += 12;
                }
                if(this.cards[i].img.charAt(7) == "Q")
                {
                    point += 14;
                }
                if(this.cards[i].img.charAt(7) == "K")
                {
                    point += 17;
                }
                if(this.cards[i].img.charAt(7) == "A")
                {
                    point += 21;
                }
            }
            
                // POINT 2
            
                var point2 = 0;
            
            for(let i = 6; i < 12; i++)
            {
                if(this.cards[i].img.charAt(7) == "2")
                {
                    point2 += 2;
                }
                if(this.cards[i].img.charAt(7) == "3")
                {
                    point2 += 3;
                }
                if(this.cards[i].img.charAt(7) == "4")
                {
                    point2 += 4;
                }
                if(this.cards[i].img.charAt(7) == "5")
                {
                    point2 += 5;
                }
                if(this.cards[i].img.charAt(7) == "6")
                {
                    point2 += 6;
                }
                if(this.cards[i].img.charAt(7) == "7")
                {
                    point2 += 7;
                }
                if(this.cards[i].img.charAt(7) == "8")
                {
                    point2 += 8;
                }
                if(this.cards[i].img.charAt(7) == "9")
                {
                    point2 += 9;
                }
                if(this.cards[i].img.charAt(7) == "1")
                {
                    point2 += 10;
                }
                if(this.cards[i].img.charAt(7) == "J")
                {
                    point2+=12;
                }
                if(this.cards[i].img.charAt(7) == "Q")
                {
                    point2 += 14;
                }
                if(this.cards[i].img.charAt(7) == "K")
                {
                    point2 += 17;
                }
                if(this.cards[i].img.charAt(7) == "A")
                {
                    point2 += 21;
                }
             }
            
            
            //  compare points
            
               if(point > point2){
                document.getElementById("player1").innerHTML = `<img src="images/winner.gif" style = "width: 100px; heigth: 100px">`;
                document.getElementById("player2").innerHTML = `<img src="images/loser.gif" style = "width: 100px; heigth: 100px">`;
            }
               if(point < point2){
                document.getElementById("player1").innerHTML = `<img src="images/loser.gif" style = "width: 100px; heigth: 100px">`;
                document.getElementById("player2").innerHTML = `<img src="images/winner.gif" style = "width: 100px; heigth: 100px">`;
            }
            point = point2;
            if(point == point2){
                document.getElementById("both-winners-row").innerHTML = "You are both winners!";
            
            }
           
         }
        }
   