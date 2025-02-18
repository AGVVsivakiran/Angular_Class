export class YourComponent {
    activeForm: number = 1; // By default, show Form 1
  
    showForm(formNumber: number) {
      this.activeForm = formNumber;
    }
  }
  