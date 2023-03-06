const inputs = document.querySelectorAll("input")

let scores = 0

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", (e) => {
    const input = e.target
    const all = document.getElementsByName(input.name)

    const parent = e.target.parentElement

    if (input.checked && input.value == "true") {
      parent.classList.add("correctAns")
      scores += 2
      for (let item of all) {
        if (item.value == "false") {
          item.disabled = "true"
        }
      }
    }

    // falsy
    if (input.checked && input.value == "false") {
      parent.classList.add("wrongAns")
      for (let item of all) {
        if (item.value == "true") {
          item.disabled = "true"
        }
      }
    }
  })
}

const firstName = document.querySelector("#firstName")
const submit = document.querySelector("#submit")
submit.disabled = "true"

firstName.addEventListener("change", () => {
  if (document.querySelector("#firstName").value === "") {
    submit.disabled = true
  } else {
    submit.disabled = false
  }
})

submit.addEventListener("click", () => {
  firstName.value = ""

  const score = `
               <div class="score">
                 <img id="done" src="./img/done.gif" />
                 <h2>Scores = ${scores}/10</h2>
                 <img id="clap" src="./img/clap.gif" />
               </div>
             `

  document.querySelector(".scores").innerHTML = score
})
