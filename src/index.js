import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Big O Notation</h1> 
<h3> Find Notes.txt for the explaination of Big 0 </h3>
<hr/>
<pre>function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
</pre>
addUpTo(16) Result : ${addUpTo(16)} <hr/>
Big O Notation : O(n)

`;

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
