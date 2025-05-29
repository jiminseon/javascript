const s1 = prompt("score1:")
const s2 = prompt("score2:")
const s3 = prompt("score3:")

const n1 = parseInt(s1)
const n2 = parseInt(s2)
const n3 = parseInt(s3)

if (n1 > 65 && n2 > 65 && n3 > 65) {
    console.log("합격")
} else if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
    console.log("잘못된 점수가 입력되었습니다")
}
else {
    console.log("불합격")
}