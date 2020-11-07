const ftoc = function(fahr) {
  const celc = (fahr - 32) * (5 / 9);
  return Math.round(celc * 10) / 10;
}

const ctof = function(celc) {
  const fahr = celc * (9 / 5) + 32;
  return Math.round(fahr * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
