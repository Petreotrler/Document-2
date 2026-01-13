class FormsValidator {

selector = {
    form: '[data-js-form]',
    fieldErrors: '[data-js-form-field-errors]',
}


errorMessages = {
     valueMissing: () => 'Это поле обязательно для заполнения.',
        typeMismatch: () => 'Пожалуйста, введите корректное значение.',
        patternMismatch: ({title}) => title || `Пожалуйста, введите значение в правильном формате. ${title}`,
        tooShort: () => 'Пожалуйста, введите более длинное значение.',
        tooLong: () => 'Пожалуйста, введите более короткое значение.',
        rangeUnderflow: () => 'Значение слишком мало.',
        rangeOverflow: () => 'Значение слишком велико.',
        stepMismatch: () => 'Пожалуйста, введите допустимое значение.',
        badInput: () => 'Пожалуйста, введите корректное значение.',
    }
    constructor() {
        this.bindEvents()
    }

    validateField(fieldConttrolElement) {
        const errors = fieldConttrolElement.validity
        const errorMessages = []


        Object.entries(this.errorMessages).forEach((errorType, getErrorMessage) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldConttrolElement))
            }
        })

        console.log(errorMessages)
}

    oneBlur(event) {
    const {target} = event  
    const isFormField = target.closest(this.selector.form)
    const isRequired = target.required

    if (isFormField && isRequired) {
        this.validateField(event.target)
    }

    }

bindEvents() {
    document.addEventListener('blur', (event) => {

      this.oneBlur(event)

    }, { capture: true } )

    }


}

new FormsValidator()
