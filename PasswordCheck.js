function PasswordCheck(Password)  {
    let haslowerCase = false;
    let hasupperCase = false;
    let hasDigit = false;
    for (let i = 0; i < Password.length; i++) {
      const char = Password[i];
      if (char >= '0' && char <= '9') {
        hasDigit = true;
      } 
      else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        haslowerCase = true;
      } 
      else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasupperCase = true;
      }
      if (haslowerCase && hasupperCase && hasDigit) {
        break;
      }
    }
    if (Password.length >= 8 && haslowerCase && hasupperCase && hasDigit) {
      return "Strong";
    } else {
      return "Weak";
    }
  }
  
  const result = PasswordCheck("YPassword123");
  console.log(result);
