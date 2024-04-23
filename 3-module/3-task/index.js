function camelize(str) {
  return str
    .split('-') // @0718205< AB@>:C ?> 45D8A0<
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join(''); 
}
