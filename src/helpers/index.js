let display = false;
let display2 = false;
const states = [
  ["&equiv;", "-500px", "0", "", "black", "0", "ASK", "-140px", "none", "none",'none','450px','0','0',''],
  [
    "&times",
    "0",
    "240px",
    "What do you want to ask?",
    "white",
    "100%",
    "Cancel",
    "165px",
    "solid",
    "block",
    'inline',
    '300px',
    '100px',
    '15px',
    ""
  ]
];

export let toggleVisibility = () => {
  let select = elem => document.getElementById(elem);
  display = !display;
  select("more-button").innerHTML = states[+display][0];
  select("sidebar").style.left = states[+display][1];
  select("more-button").style.color = states[+display][4];
  select("grey-overlay").style.width = states[+display][5];
};

export let toggleAskBar = async () => {
  let select = elem => document.getElementById(elem);
  display2 = !display2;
  select("askbar").style.height = states[+display2][2];
  select('askbox-details').style.height = '0'
  select('askbox-details').value = ''
    select('askbox-details').style.padding = '0'
  if (select('askbox-details').style.display === 'block') select('askbox-details').style.display = 'none';
  setTimeout(() => {
    select("askbox").style.display = states[+display2][9];
    select("askbox").placeholder = states[+display2][3];
    select("askbox").style.borderBottomStyle = states[+display2][8];
    select("askbox").value = "";
    select("ask-button").innerHTML = states[+display2][6];
    select('pick-a-category').style.display = states[+display2][9];
    select("submit-question").style.right = states[+display2][7];
    var elems = document.getElementsByClassName("category-chooser-button")
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = states[+display2][10];
    }
  },500)
};

export let extendAskBar = (value) => {
  let select = elem => document.getElementById(elem);
  select("askbar").style.height = states[+value][11];
  select('askbox-details').style.height = states[+!value][12]
  select('askbox-details').style.padding = states[+!value][13]
}
