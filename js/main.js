$(document).ready(function(){

    let totalPrice;
    let totalPriceHolder;
    totalPriceHolder = $('#totalPriceHolder')

    totalPrice = 0;

    function calculatePrice(){
        let numberRecruts = $('input[name=flexRadioDefault]:checked').val();
        let getRecrut = $('input[name=flexRadioDefault1]:checked').val();

        numberRecruts = parseInt(numberRecruts);
        getRecrut = parseInt(getRecrut);

        totalPrice = numberRecruts + getRecrut;
        totalPriceHolder.text(totalPrice + ' рублей');
        let link = (`https://qiwi.com/payment/form/99999?extra[%27accountType%27]=nickname&extra[%27account%27]=VREKRUTEOFFICIAL&amountInteger=${totalPrice}&amountFraction=0&currency=643`);
        $(".btnChangeLink").attr('href',link);
    };
    
    calculatePrice();
    
    $('input').on('change', function(){
        calculatePrice();
        
    });

    let link = (`https://qiwi.com/payment/form/99999?extra[%27accountType%27]=nickname&extra[%27account%27]=VREKRUTEOFFICIAL&amountInteger=${totalPrice}&amountFraction=0&currency=643`);
    $(".btnChangeLink").attr('href',link);
});
