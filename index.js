module.exports = (tcno) => {
  let total, totalStr;
  total =
    Number(tcno.substring(0, 1)) +
    Number(tcno.substring(1, 2)) +
    Number(tcno.substring(2, 3)) +
    Number(tcno.substring(3, 4)) +
    Number(tcno.substring(4, 5)) +
    Number(tcno.substring(5, 6)) +
    Number(tcno.substring(6, 7)) +
    Number(tcno.substring(7, 8)) +
    Number(tcno.substring(8, 9)) +
    Number(tcno.substring(9, 10));

    totalStr = String(total);

  const lastNumber = totalStr.substring(totalStr.length, totalStr.length - 1);

  if (lastNumber == tcno.substring(10, 11)) {
    return true
  } else {
    return false
  }
};
