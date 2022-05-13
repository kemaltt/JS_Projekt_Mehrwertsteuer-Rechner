const zuBrutto = document.getElementById('zu-brutto')
const zuNetto = document.getElementById('zu-netto')
const steuerSatz19 = document.getElementById('steuer-satz-19')
const steuerSatz7 = document.getElementById('steuer-satz-7')
const inputBetrag = document.getElementById('input-betrag')
const outputMwstbetrag = document.getElementById('output-betrag')
const outputEndpreis = document.getElementById('output-endpreis')
const labelMwstsatz = document.getElementById('label-mwstsatz')
const labelEndpreis = document.getElementById('label-endpreis')
let satz;
let preis;
let mvst;



const checkLabel = () => {
    if (zuBrutto.checked) {
        labelMwstsatz.innerHTML = 'Nettobetrag (Preis ohne Mehrsteuer) in Euro'
        labelEndpreis.innerHTML = 'Bruttobetrag(Endpreis)'
    } else {
        labelMwstsatz.innerHTML = 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro'
        labelEndpreis.innerHTML = 'Nettobetrag'
    }

}

const steuer = () => {
    if (steuerSatz19.checked) {
        return satz = 0.19;
    } else {
        return satz = 0.07;
    }
}

const bruttoTonetto = () => {
    let betrag = inputBetrag.value

    if (zuBrutto.checked) {
        preis = betrag * (1 + satz)
        mvst = betrag * satz
    } else {
        preis = betrag / (1 + satz)
        mvst = preis * satz
    }
}

const berechnen = () => {
    steuer();
    bruttoTonetto();
    outputMwstbetrag.innerHTML = mvst.toFixed(2) + ' €'
    outputEndpreis.innerHTML = preis.toFixed(2) + ' €'
}