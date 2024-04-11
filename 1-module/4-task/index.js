function checkSpam(str) {
  let strToLower = str.toLowerCase();
  if (strToLower.includes('bet') || 
      strToLower.includes('xxxxx'))
      {
          return true;
      }
  return false;
}
