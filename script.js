const btnCalculate = document.querySelector('#btnCalculate');
btnCalculate.addEventListener('click', creditCalculate);

const btnDarlehensLaufzeit = document.querySelector('#btnDarlehensLaufzeit');
btnDarlehensLaufzeit.addEventListener('click', showRates);


function showRates(e) {
    e.preventDefault()
    document.querySelector('#selectOptions').style.display = 'block'
    
}

function creditCalculate(e) {
    e.preventDefault()

    const kaufpreis = document.querySelector('#kaufpreis').value;
    const eigenkapital = document.querySelector('#eigenkapital').value;
    const zinssatz = document.querySelector('#zinssatz').value;
    const tilgungSatz = document.querySelector('#selectOptionsDarlehen').value; 
    const selectOptions = document.querySelector('#selectOptions').value;


    if (!kaufpreis || !zinssatz || !tilgungSatz || !selectOptions) {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter your information!",
            
        });
        return;
    }

    let creditBody = kaufpreis - eigenkapital
    let zins = creditBody*zinssatz / 100
    let tilgung = creditBody*tilgungSatz / 100
    let monatlicheRate = (zins + tilgung) / 12
    let restSchuld = creditBody - tilgung*selectOptions;

    monatlicheRate = monatlicheRate.toFixed(2);
    restSchuld = restSchuld.toFixed(2);

    document.querySelector('#monatlicheRate').textContent = monatlicheRate;
    document.querySelector('#restSchuld').textContent = restSchuld;
}


gsap.from(".container", {opacity: 0, duration: 4, stagger: 1});

gsap.from('h1', {
    scale: -2, 
    duration: 3.5, 
    delay: 0.5, 
    
    rotation: 360, 
    opacity: 0,
        
})


gsap.from("#btnDarlehensLaufzeit", {
    opacity: 0,
    duration: 2,
    stagger: 1,
    repeat: -1,  
    yoyo: true  
});






