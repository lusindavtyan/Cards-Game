    $(document).ready(function(){
        
        $("#bt").click(function(){
            
        $("#bt").attr("disabled", true);
            
        $("#demo3").hide();
            
        $("#demo4").hide();
            
    var card1 = new CardList();
            
    card1.fillCards();
            
    card1.shuffle();
            
    card1.printCards();
            
        $("#bt2").click(function(){
            
         card1.result();
            
        $("#bt2").attr("disabled", true);

             }); 
        })
    })
