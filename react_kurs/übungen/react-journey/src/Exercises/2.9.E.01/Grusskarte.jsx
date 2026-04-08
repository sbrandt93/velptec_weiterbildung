import React from 'react';

// Die Komponente nimmt "props" als Argument entgegen
function Grusskarte(props) {
  return (
    // Wir greifen auf die Props Anrede und Name zu
    <h1>{props.Anrede} {props.Name}!</h1>
  );
}

export default Grusskarte;