

function invertir(numero) {
  //var numero ;
  var nstring = numero.toString();
        var res = nstring.split('');
        numero = res.reverse().join('');
      var  convertido = parseInt(numero);
  return convertido;
    }
