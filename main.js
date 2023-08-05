// Checkboxes checker functionality
$("#upCase").on("change", () => {
  if ($("#upsNumber").hasClass("disabled")) {
    $("#upsNumber").removeClass("disabled");
  } else {
    $("#upsNumber").addClass("disabled");
  }
});

$("#number").on("change", () => {
  if ($("#numsNumber").hasClass("disabled")) {
    $("#numsNumber").removeClass("disabled");
  } else {
    $("#numsNumber").addClass("disabled");
  }
});

$("#specChar").on("change", () => {
  if ($("#specsNumber").hasClass("disabled")) {
    $("#specsNumber").removeClass("disabled");
  } else {
    $("#specsNumber").addClass("disabled");
  }
});

// Password generator OBJ
class PasswordGenerator {
  constructor() {
    this.nums = "0123456789";
    this.alphabetLow = "abcdefghijklmnopqrstuvwxyz";
    this.alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.specChars = "!@#$%^&*()";
  }

  getRandomChars = (charSet, numberOfChars) => {
    const chars = [];
    for (let i = 0; i < numberOfChars; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      chars.push(charSet[randomIndex]);
    }
    return chars.join("");
  };

  generatePassword = () => {
    const passLength = parseInt(document.getElementById("passLength").value);
    const includeUpperCase = document.getElementById("upCase").checked;
    const numUpperCase = parseInt(document.getElementById("upsNumber").value);
    const includeNumbers = document.getElementById("number").checked;
    const numNumbers = parseInt(document.getElementById("numsNumber").value);
    const includeSpecialChars = document.getElementById("specChar").checked;
    const numSpecialChars = parseInt(
      document.getElementById("specsNumber").value
    );

    let password = "";

    if (includeUpperCase) {
      password += this.getRandomChars(this.alphabetUp, numUpperCase);
    }

    if (includeNumbers) {
      password += this.getRandomChars(this.nums, numNumbers);
    }

    if (includeSpecialChars) {
      password += this.getRandomChars(this.specChars, numSpecialChars);
    }

    const remainingLength = passLength - password.length;
    if (remainingLength > 0) {
      password += this.getRandomChars(this.alphabetLow, remainingLength);
    }

    const shuffledPassword = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    if (shuffledPassword.length > passLength) {
      alert("Wrong inputs");
    } else {
      console.log(shuffledPassword);
      document.getElementById("password").value = shuffledPassword;
    }
  };

  copyToClipboard = () => {
    if (document.getElementById("password").value.length >= 4) {
      navigator.clipboard.writeText(document.getElementById("password").value);
      alert("Password has been successfully copied to your clipboard");
    } else {
      alert("Nothing can come of nothing! First try creating the password");
    }
  };
}

// OBJ creation
const passwordGenerator = new PasswordGenerator();

// Pass creation and copy-to-clipboard functionality
$("#createPass").click(() => {
  passwordGenerator.generatePassword();
});

$("#copyPass").click(() => {
  passwordGenerator.copyToClipboard();
});
