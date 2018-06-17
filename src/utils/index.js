export const _generateDateStr = (dateStr) => {
  // https://qiita.com/t-ohtake/items/7a1c05d6735d5a0ad483

  if (dateStr === undefined) {
    return ''
  }

  const myTbl     = new Array("日","月","火","水","木","金","土");
  const myD       = new Date(dateStr);

  const myYear    = myD.getYear()
  const myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
  const myMonth   = myD.getMonth() + 1;
  const myDate    = myD.getDate();
  const myDay     = myD.getDay();
  const myHours   = myD.getHours();
  const myMinutes = myD.getMinutes();
  const mySeconds = myD.getSeconds();

  const myMess1   = myYear4 + "/" + myMonth + "/" + myDate + "/";
  const myMess2   = `(${myTbl[myDay]})`;
  const myMess3   = myHours + ":" + myMinutes;
  return myMess1 + " " + myMess2 + " " + myMess3;
}
