const { emailTemplet } = require("./emailTemplet");

function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '....' : str;
  };

async function telegramRefactorReport(report){
    const {
        id,
        currency,
        total,
        date_created,
        billing,
        shipping,
        payment_method,
        payment_method_title,
        line_items,
      } = report;

    itemarray ="Items: \n"; 
    line_items.forEach((item,index) => {itemarray = itemarray + (index+1) + ". " + item.name+"\nQuantity :-("+item.quantity+") Price :- "+item.price+"\n\n";});  
    
    const billingdata ="\nBilling\n"+ billing["first_name"] +" " + billing["last_name"] +"\n"+billing["address_1"] +"\n"+ billing["address_2"] +"\n"+ billing["city"]+"\n"+ billing["state"] +"\n"+ billing["phone"];
    const shippingdata = "\nShipping\n"+ shipping["first_name"] +" " + shipping["last_name"] +"\n"+shipping["address_1"] +"\n"+ shipping["address_2"]+"\n"+ shipping["city"]+"\n"+ shipping["state"] +"\n"+ shipping["phone"];
    const payment= "\nPayment Details\n"+currency+" "+total+"\nPayment Method\n"+ payment_method +"\n"+ payment_method_title;

    //telegram Report
    telegramreport = "New Order : "+id+"\n"+date_created+"\n"+ billingdata+"\n"+ shippingdata +"\n"+ payment +"\n\n" +itemarray;
    return truncate(telegramreport, 4000);//telegram message limit is 4096
}

async function smtpRefactorReport(report){
        // smtpreport = report
    
    return emailTemplet(report);;
}

module.exports = {telegramRefactorReport, smtpRefactorReport}