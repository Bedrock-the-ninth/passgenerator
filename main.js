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

  checkboxCheck = () => {
    // These few statments are to remove the number input selectors from the DOM if the checkbox is not checked
    document.getElementById("upCase").addEventListener("change", () => {
      document.getElementById("upsNumber").disabled =
        !document.getElementById("upCase").checked;
    });

    document.getElementById("number").addEventListener("change", () => {
      document.getElementById("numsNumber").disabled =
        !document.getElementById("number").checked;
    });

    document.getElementById("specChar").addEventListener("change", () => {
      document.getElementById("specsNumber").disabled =
        !document.getElementById("specChar").checked;
    });
  };

  // contentCheck = () => {
  //   document.getElementById("password").addEventListener("change", () => {
  //     document.getElementById("copyPass").disabled = !;
  //   });
  // };

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
    navigator.clipboard
      .writeText(document.getElementById("password").value)
      .then(() => {
        alert("Successfully copied to clipboard!");
      })
      .catch(() => {
        alert("Not succesful!");
      });
  };
}

const passwordGenerator = new PasswordGenerator();

passwordGenerator.checkboxCheck();

const createBtn = document.getElementById("createPass");
createBtn.addEventListener("click", () => {
  passwordGenerator.generatePassword();
});

const copyBtn = document.getElementById("copyPass");
copyBtn.addEventListener("click", () => {
  passwordGenerator.copyToClipboard();
});
