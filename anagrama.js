function anagrama(string) {
  var anagramas = [];

  if (string.length == 1) {
    anagramas.push(string);
  } else {
    for (var i = 0; i < string.length; i++) {
      var anagramaDoResto = anagrama(obtemRestante(string, i));

      for (var j = 0; j < anagramaDoResto.length; j++) {
        var existe = anagramas.indexOf(string[i] + anagramaDoResto[j]) == -1;

        if (existe) {
          anagramas.push(string[i] + anagramaDoResto[j]);
        }
      }
    }
  }

  return anagramas.sort();
}

function obtemRestante(string, indice) {
  var retorno = "";

  for (var i = 0; i < string.length; i++) {
    if (indice != i) {
      retorno += string[i];
    }
  }

  return retorno;
}
