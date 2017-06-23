module.exports = main
function main(email, sss) {
  var mail = email.split("@")[1];
  if(mail == sss)
  return true;
  else return false;
};
