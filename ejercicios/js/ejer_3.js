/* Por medio de un menú dar al usuario la opción de seleccionar
 círculo o circunferencia si selecciona círculo calcular su área.
  A=PI*r^2, si selecciona circunferencia calcular su longitud.*/

  function calcular(radio) {
    const PI = 3.1419;
    var area = PI*(Math.pow(radio, 2));
    console.log(area);
    return area;
  }
