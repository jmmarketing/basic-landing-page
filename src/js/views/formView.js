class SignupFormView {
  _select;
  _dropdown;
  _option;
  _form;
  _submitBtn;
  _nameInput;
  _emailInput;

  _requiredState = {
    name: false,
    email: false,
  };

  _validationRules;

  _initFormBehavior() {
    this._setListeners();
    this._setValidationRules();
  }

  _setListeners() {
    this._select = document.querySelector(".form__select");
    this._dropdown = document.querySelector(".form__select-dropdown");
    this._option = document.querySelector(".form__select--option");
    this._form = document.querySelector("form");
    this._submitBtn = document.querySelector(".button--submit");
    this._nameInput = document.querySelector("#field_name");
    this._emailInput = document.querySelector("#field_email");

    //Custom Select
    if (document.body.classList.contains("signup")) {
      document.addEventListener("click", this._customSelectUI.bind(this));

      //Input Validation
      [this._nameInput, this._emailInput].forEach((input) =>
        input.addEventListener("change", this._checkInput.bind(this))
      );

      //Submit Form
      this._form.addEventListener("submit", this._submitForm.bind(this));
    }
  }

  _setValidationRules() {
    this._validationRules = new Map([
      [this._nameInput, { pattern: /^[A-Za-z\s]{3,}$/, stateKey: "name" }],
      [
        this._emailInput,
        {
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          stateKey: "email",
        },
      ],
    ]);
  }

  _checkInput(e) {
    const target = e.target || e;
    const rule = this._validationRules.get(target);
    console.log(`target = ${target}`);
    console.log(`rule = ${rule}`);

    if (rule) this._validateInputUpdateUI(target, rule.pattern, rule.stateKey);
  }
  _validateInputUpdateUI(input, pattern, stateProp) {
    const inputVal = input.value;
    const isValid = pattern.test(inputVal);

    if (isValid) {
      input.classList.add("pass");
      input.classList.remove("fail");
      this._requiredState[stateProp] = true;
    } else {
      input.classList.add("fail");
      input.classList.remove("pass");
      this._requiredState[stateProp] = false;
    }
  }

  _customSelectUI(e) {
    if (e.target == this._select) {
      // console.log("Select Clicked!");
      this._dropdown.classList.toggle("show");
    } else this._dropdown.classList.remove("show");

    if (e.target.className == "form__select--option") {
      this._select.innerHTML = e.target.innerHTML;
      console.dir(e.target);
    }
  }

  _submitForm(e) {
    e.preventDefault();
    const isValid = !Object.values(this._requiredState).includes(false);
    console.log(isValid);

    if (!isValid) {
      //Catch Errors / Empty Input
      [this._nameInput, this._emailInput].forEach((field) =>
        this._checkInput(field)
      );
      return;
    }

    // Continue with submission (Does not send anywhere currently)
    const data = new FormData(this._form, this._submitBtn);
    const dataObj = Object.fromEntries(data.entries());
    console.log(dataObj);
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
      input.classList.remove("pass");
    });
  }
}

export default new SignupFormView();
