const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

function hitLikes1() {
   let totalLikes1 = parseInt(countLikes1.value) + 1
   countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitdisLikes1() {
   let totaldisLikes1 = parseInt(countdisLikes1.value) + 1
   countdisLikes1.textContent = totaldisLikes1.toString()
}
btndisLike1.addEventListener("click",hitdisLikes1)


function hitLikes2() {
   let totalLikes2 = parseInt(countLikes2.value) + 1
   countLikes2.textContent = totalLikes2.toString()
}
btnLike2.addEventListener("click",hitLikes2)
