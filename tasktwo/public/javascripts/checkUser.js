function userPresent() {
  const url = `http://localhost:3000/users`;
  const res = document.getElementById("result");
  const signout = document.getElementById("signout");
  const button = document.getElementById("myButton");
  fetch(url).then((data) => {
    data.json().then((jsonData) => {
      console.log(jsonData);
      res.innerText = jsonData.message;
      if (jsonData.message) {
        signout.innerText = "Sign out";
        button.innerText = "My Profile";
      }
    });
  });
}
