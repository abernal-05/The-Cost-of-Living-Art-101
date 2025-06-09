$("#oatmilk").click(function(){
        console.log("User chose oatmilk.")

        str = "I'll go with some Oat milk"

        $("#chosen-product").append('<p>' + str + '</p>')
        
        const button = "<button id = oatmilk> buy oatmilk </button>";
        $("#chosen-milk").append(button);
        $("#oatmilk").click(function() {
            window.location.href = "INSERT LINK HERE"; //still need link to next page
        })
         });

         $("#wholemilk").click(function(){
        console.log("User chose wholemilk.")

        str = "I'll go with some WHole milk"

        $("#chosen-product").append('<p>' + str + '</p>')
        
        const button = "<button id = wholemilk> buy wholemilk </button>";
        $("#chosen-milk").append(button);
        $("#wholemilk").click(function() {
            window.location.href = "INSERT LINK HERE"; //still need link to next page
        })
         });


         