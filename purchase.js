function generate_receipt(){
    purchase();
}

var package = [];
let currdata;
var cardholder_name, card_number, transaction_date, mail_to, surname, amount, receipient_mail;

function purchase(event){
    cardholder_name = document.getElementById('cr_name').value; 
    card_number = document.getElementById('cr_no').value;
    transaction_date = new Date();
    mail_to = document.getElementById('mail_to').value;
    surname = document.getElementById('surname').value;
    receipient_mail = document.getElementById('recipient_mail').value;
    amount = document.getElementById('amount').value;   
    let data={ 
        cardholder_name,
        card_number,
        transaction_date,
        mail_to,
        surname,
        receipient_mail,
        amount
    }
    currdata=data;
    package.push(data);
    localStorage.setItem('packageData', JSON.stringify(package));
    console.log(package);
}
