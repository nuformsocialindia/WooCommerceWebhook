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

    
     items = line_items.map((item) => {});
    const billingdata ="\nBilling\n"+ billing["first_name"] +" " + billing["last_name"] +"\n"+billing["address_1"] +"\n"+ billing["address_2"] +"\n"+ billing["city"]+"\n"+ billing["state"] +"\n"+ billing["phone"];
    const shippingdata = "\nShipping\n"+ shipping["first_name"] +" " + shipping["last_name"] +"\n"+shipping["address_1"] +"\n"+ shipping["address_2"]+"\n"+ shipping["city"]+"\n"+ shipping["state"] +"\n"+ shipping["phone"];
    const payment= "\nPayment Details\n"+currency+" "+total+"\nPayment Method\n"+ payment_method +"\n"+ payment_method_title;

    //telegram Report
    telegramreport = "New Order : "+id+"\n"+date_created+"\n"+ billingdata+"\n"+ shippingdata +"\n"+ payment +"\n" ;
    return telegramreport;
}

async function smtpRefactorReport(report){
    return report;
}

module.exports = {telegramRefactorReport, smtpRefactorReport}