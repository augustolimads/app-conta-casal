export default function coupleCalculator(_partinerA, _partinerB, _bills){
    let partinerA = Number(_partinerA)
    let partinerB = Number(_partinerB)
    let bills = Number(_bills)

    let totalCouple = partinerA + partinerB
    let taxBills = (bills / totalCouple * 100).toFixed(2)

    let taxPartinerA = isNaN(partinerA / totalCouple) ? 0 : (partinerA / totalCouple)
    let taxPartinerB = isNaN(partinerB / totalCouple) ? 0 : (partinerB / totalCouple)

    let fractionPartinerA = bills * taxPartinerA
    let fractionPartinerB = bills * taxPartinerB 

    let restPartinerA = partinerA - fractionPartinerA
    let restPartinerB = partinerB - fractionPartinerB

    return {
        totalCouple: totalCouple,
        taxBills: isNaN(taxBills) ? 0 : taxBills,
        taxPartinerA:(taxPartinerA * 100).toFixed(2),
        taxPartinerB:(taxPartinerB * 100).toFixed(2),
        fractionPartinerA:fractionPartinerA.toFixed(2),
        fractionPartinerB:fractionPartinerB.toFixed(2),
        restPartinerA:restPartinerA.toFixed(2),
        restPartinerB:restPartinerB.toFixed(2)
    }
}