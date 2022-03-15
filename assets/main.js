// Get the output element from the DOM
const outputEl = document.querySelector(".output");

// A function to get the inputs from the DOM
function getInputs() {
  let inputs = document.querySelectorAll("input");
  return inputs;
}

function generateTemplate() {
  getInputs();
  let template = `This story is about a ${getInputs()[0].value}. A ${
    getInputs()[0].value
  } that is very ${getInputs()[1].value} and ${getInputs()[2].value}. The ${
    getInputs()[0].value
  } likes to ${getInputs()[3].value}.`;
  outputEl.innerHTML = template;
}
