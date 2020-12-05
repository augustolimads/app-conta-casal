export default function coupleCalculator(_partinerA, _partinerB, _bills){
    let partinerA = Number(_partinerA)
    let partinerB = Number(_partinerB)
    let bills = Number(_bills)

    let totalCouple = partinerA + partinerB

    let taxPartinerA = partinerA / totalCouple
    let taxPartinerB = partinerB / totalCouple

    let fractionPartinerA = bills * taxPartinerA
    let fractionPartinerB = bills * taxPartinerB 

    let restPartinerA = partinerA - fractionPartinerA
    let restPartinerB = partinerB - fractionPartinerB

    return {
        totalCouple: totalCouple,
        taxPartinerA:(taxPartinerA * 100).toFixed(2),
        taxPartinerB:(taxPartinerB * 100).toFixed(2),
        fractionPartinerA:fractionPartinerA.toFixed(2),
        fractionPartinerB:fractionPartinerB.toFixed(2),
        restPartinerA:restPartinerA.toFixed(2),
        restPartinerB:restPartinerB.toFixed(2)
    }
}