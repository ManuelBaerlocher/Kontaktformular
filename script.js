let endpoint = "https://developerakademie.com/Kontaktformular/send_mail.php";
/*submitReport: string;
submitComplete = false;
resultColor: string;*/

/* function onSubmit(myForm: NgForm) {
   if (myForm.valid) {
     this.sendForm(myForm);
   }
 }*/

function sendMail() {
  test();

  let formData = new FormData();
  formData.append('nameField', 'value')
  fetch("https://developerakademie.com/Kontaktformular/send_mail.php", {
    method: "POST",
    body: formData
  });

}

function test() {
  console.log('Email gesendet');

}

function sendForm(form) {
  this.progressBar.mode = "indeterminate";
  this.http.post(this.endpoint, form.value)
    .subscribe(
      response => this.handleResponse(response, form),
      error => this.handleError(error, form),
    );
}

function handleResponse(response, form) {
  console.log(response);
  this.resultColor = "#00ff88";
  this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
  this.submitComplete = true;
  form.reset();
}

function handleError(error, form) {
  console.error(error);
  this.resultColor = "#ff0077";
  this.submitReport = "Error occure while sending your message! You can contact me directly on E-mail: manuellbluewin.ch.";
  this.submitComplete = true;
  form.reset();
}

function closeCard() {
  this.submitComplete = false;
  this.submitReport = '';
  this.progressBar.mode = "determinate";
}



