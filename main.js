function generarArrayBidimensional() {
  function generarArray() {
    for (i = 0; i - 1; i++)
      var azar = Math.floor(Math.random() * 10)
    if (azar > 7) {
      elSecreto = "Me mata este examen";
    } else if (azar >= 5) {
      elSecreto = "Si ya sabes como me pongo, ¿pa que me pones este examen?";
    } else {
      elSecreto = "A partir de aquí, suspenso fijo";
    }

    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  var array = [];
  for (var i = 0; i < 10; i++) {
    array.push(generarArray());
  }
  return array;
}

function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 50; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());
