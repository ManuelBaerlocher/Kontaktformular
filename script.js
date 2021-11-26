let endpoint = "https://mihai-andrei-neacsu.developerakademie.com/assets/sendMail.php";
  submitReport: string;
  submitComplete = false;
  resultColor: string;

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form) {
    this.progressBar.mode = "indeterminate";
    this.http.post(this.endpoint, form.value)
      .subscribe(
        response => this.handleResponse(response, form),
        error => this.handleError(error, form),
      );
  }

  handleResponse(response, form) {
    console.log(response);
    this.resultColor = "#00ff88";
    this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
    this.submitComplete = true;
    form.reset();
  }

  handleError(error, form) {
    console.error(error);
    this.resultColor = "#ff0077";
    this.submitReport = "Error occure while sending your message! You can contact me directly on E-mail: crunck78@googlemail.com.";
    this.submitComplete = true;
    form.reset();
  }

  closeCard() {
    this.submitComplete = false;
    this.submitReport = '';
    this.progressBar.mode = "determinate";
  }
}