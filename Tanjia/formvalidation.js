class SurveyForm{
    genderItem ="";
    skillsItem ="";

    constructor(FormName){
        this.form = document.querySelector(FormName);
        this.form.addEventListener("submit", e => this.handelSubmit(e));
    }
    
    handelSubmit(event){
        event.preventDefault();

        let nameValid = this.checkName(),
          emailValid = this.checkEmail(),
          commentsValid = this.checkComments(),
          genderValid = this.CheckGender(),
          skillsValid = this. CheckSkills(),
          passwordValid = this.  checkPassword(),
          confirmpasswordValid = this.   checkConfirmassword()


        if(nameValid && emailValid && commentsValid && genderValid && skillsValid && passwordValid && confirmpasswordValid){
            let newWindow = window.open("","","height=500,width=500");
            newWindow.document.writeln("Name:" + this.form.name.value + "<br>");
            newWindow.document.writeln("Email:" + this.form.email.value + "<br>");
            newWindow.document.writeln("Comments:" + this.form.comments.value + "<br>");
            newWindow.document.writeln("Gender:" + this.genderItem + "<br>");
            newWindow.document.writeln("Skills:" + this.skillsItem + "<br>");
            this.skillsItem ="";
            newWindow.document.writeln("Membership:" + this.form.membership.value + "<br>");
        
        }
    }

  checkName(){
    if(this.form.name.value ===""){
        this.form.name.nextElementSibling.innerText = "This field is required";
        return false;
    }

    else {
        this.form.name.nextElementSibling.innerText = "";
        return true;
    }
  }


  checkEmail(){

    let regExp = /^[A-Za-z0-9_.]{1,}[@]{1}[A-Za-z0-9-.]{3,63}[.]{1}[a-z]{2,3}$/;

    if(this.form.email.value ===""){
        this.form.email.nextElementSibling.innerText = "This field is required";
        return false;
    }

    else if(regExp.test(this.form.email.value) === false){
        this.form.email.nextElementSibling.innerText = "This email is invalid";
        return false;
    }

    else {
        this.form.email.nextElementSibling.innerText = "";
        return true;
    }
  }


  checkComments(){
    if(this.form.comments.value ===""){
        this.form.comments.nextElementSibling.innerText = "This field is required";
        return false;
    }

    else {
        this.form.comments.nextElementSibling.innerText = "";
        return true;
    }
  }


  CheckGender(){
    for(let g of this.form.gender){
        if(g.checked){
            this.genderItem = g.value;
            break;
        }
    }

    if(this.genderItem === ""){
        this.form.querySelector(".gender-error").innerText ="This field is required";
        return false;
    }
    else {
        this.form.querySelector(".gender-error").innerText ="";
        return true;
    }
  }


   CheckSkills(){
    for(let s of this.form.skills){
        if(s.checked){
            this.skillsItem += s.value  + ",";
        }
    }

    if(this.skillsItem === ""){
        this.form.querySelector(".skills-error").innerText ="This field is required";
        return false;
    }
    else {
        this.form.querySelector(".skills-error").innerText ="";
        return true;
    }
  }



  checkPassword(){
    if(this.form.password.value ===""){
        this.form.password.nextElementSibling.innerText = "This field is required";
        return false;
    }

    else {
        this.form.password.nextElementSibling.innerText = "";
        return true;
    }
  }


   checkConfirmassword(){
    if(this.form.confirmpassword.value ===""){
        this.form.confirmpassword.nextElementSibling.innerText = "This field is required";
        return false;
    }

     if(this.form.confirmpassword.value !== this.form.password.value ){
        this.form.confirmpassword.nextElementSibling.innerText = "Password doesnt match";
        return false;
    }

    else {
        this.form.confirmpassword.nextElementSibling.innerText = "";
        return true;
    }
  }


}