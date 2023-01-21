const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  exercises: ['19-01', '20-01', '21-01'],
  food: ['19-01', '21-01', '22-01', '22-03']
}

nlwSetup.setData(data)
nlwSetup.load()