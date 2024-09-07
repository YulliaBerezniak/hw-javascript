function PasswordCheck(Password)  {
    let haslowerCase = false;
    let hasupperCase = false;
    let hasDigit = false;
    for (let i = 0; i < Password.length; i++) {
      const char = Password[i];
      if (char >= '0' && char <= '9') {
        hasDigit = true;
      } 
      else if (char === char.tolowerCase() && char !== char.toupperCase()) {
        haslowerCase = true;
      } 
      else if (char === char.toupperCase() && char !== char.tolowerCase()) {
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
  PasswordCheck (YPassword123);
