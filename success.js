var transactions = [];
document.addEventListener('DOMContentLoaded', function(){
    var plan = localStorage.getItem('packageData'); 
    if(plan){
        transactions = JSON.parse(plan);
      }
        console.log(transactions);
        getting_order_number();
        display_payment_details();
    });

  

function display_payment_details(){
    var Name_of_user, Cardnumber_of_user, PurchasedDate, MailOfUser;
    Name_of_user = document.getElementById("name_of_card");
    Cardnumber_of_user = document.getElementById("cardnum_of_user");
    PurchasedDate = document.getElementById('date_with_time');
    MailOfUser = document.getElementById('mail_to');
    transaction_date=new Date();

    Name_of_user.innerHTML = transactions[transactions.length-1].cardholder_name;  
    Cardnumber_of_user.innerHTML = transactions[transactions.length-1].card_number;
    PurchasedDate.innerHTML = transaction_date.getDate() + "/" +  transaction_date.getMonth()+1 + "/" +  transaction_date.getFullYear();
    MailOfUser.innerHTML = transactions[transactions.length-1].receipient_mail;
}      


function getting_order_number(){
    order_number = Math.floor((Math.random() * 10e9));
    document.getElementById('o-number').innerHTML = "Receipt Id: " + order_number; 
}
