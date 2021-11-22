// first task

function word(str) {
    const result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  
  // second task
  
  function sayHello(name) {
    name === undefined
      ? console.log("Hello user")
      : name === "Mark"
      ? console.log(`Hi ${name} <3`)
      : console.log(`Hello ${name}`);
  }
  
  // third task
  
  function filterStrings(array, stringLength) {
    return array.filter((item) => item.length <= stringLength);
  }
  