//Search Players by Number
    function numFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("numInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
      
//Search Players by First Name      
        function firstFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("firstInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[1];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
          }
          
//Search Players by Last Name          
            function lastFunction() {
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("lastInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                  td = tr[i].getElementsByTagName("td")[2];
                  if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = "";
                    } else {
                      tr[i].style.display = "none";
                    }
                  }       
                }
              }
//Search Players by Position              
                function posFunction() {
                    var input, filter, table, tr, td, i, txtValue;
                    input = document.getElementById("posInput");
                    filter = input.value.toUpperCase();
                    table = document.getElementById("myTable");
                    tr = table.getElementsByTagName("tr");
                    for (i = 0; i < tr.length; i++) {
                      td = tr[i].getElementsByTagName("td")[3];
                      if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                          tr[i].style.display = "";
                        } else {
                          tr[i].style.display = "none";
                        }
                      }       
                    }
                  }

//Function to unhide Player Cards - which will appear to be adding them.
                  $("#button").on("click", function(e) {
                    if ($(".card-hidden").length > 0) {
                       $(".card-hidden").first().slideToggle(function() {
                         $(this).removeClass("card-hidden");
                       });
                    } else {
                      console.log("No more cards to show.");
                    }
                   });
                  