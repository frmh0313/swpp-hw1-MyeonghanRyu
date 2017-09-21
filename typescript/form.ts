class Form {
    constructor(
        public email: string,
        public password: string,
        public password_confirmation: string,
        public website: string,
        public phone_number: string,
        public fname: string,
        public lname: string,
        public age: number,
        public birth_month: string,
        public birth_day: number,
        public birth_year: number) {
        this.email = email
        this.password = password
        this.password_confirmation = password_confirmation
        this.website = website
        this.phone_number = phone_number
        this.fname = fname
        this.lname = lname
        this.age = age
        this.birth_month = birth_month
        this.birth_day = birth_day
        this.birth_year = birth_year
    }
    // TODO: You may fill in functions in the class.

    reg = {'email': /^\S+@\S+\.\S{2,3}/,
        'website': /https?:\/\/\w+/,
        'phone_number':/\d{3}-\d{4}-\d{4}/,
        'name':/[A-Z][a-z]+/}

    check_pattern(pattern: RegExp, str: string) {
        return pattern.test(str)
    }

    check_password() {
        var longer_than_8_chars = this.password.length >= 8
        var has_at_least_one_lower_case = /[a-z]/.test(this.password)
        var has_at_least_one_upper_case = /[A-Z]/.test(this.password)
        var has_at_least_one_number = /[0-9]/.test(this.password)

        return longer_than_8_chars && has_at_least_one_lower_case &&
            has_at_least_one_upper_case && has_at_least_one_number
    }

    check_password_confirmation() {
        return this.password == this.password_confirmation
    }
    check_age() {
        return this.age >= 0 && this.age <= 200
    }

    check_birth_month() {
        var months = ["January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"]

        //return this.birth_month in months
        return months.includes(this.birth_month)
    }

    check_birth_day() {
        return this.birth_day >= 1 && this.birth_day <= 31
    }

    check_birth_year() {
        return this.birth_year >= 1800 && this.birth_year <= 2017
    }

    check_all() {
        var result = {}

        result['email'] = this.check_pattern(this.reg['email'], this.email)
        result['password'] = this.check_password()
        result['password_confirmation'] = this.check_password_confirmation()
        result['website'] = this.check_pattern(this.reg['website'], this.website)
        result['phone_number'] = this.check_pattern(this.reg['phone_number'], this.phone_number)
        result['first_name'] = this.check_pattern(this.reg['name'], this.fname)
        result['last_name'] = this.check_pattern(this.reg['name'], this.lname)
        result['age'] = this.check_age()
        result['birth_month'] = this.check_birth_month()
        result['birth_day'] = this.check_birth_day()
        result['birth_year'] = this.check_birth_year()

        return result

    }
}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email : string = document.forms["form"]["email"].value
    // TODO: Fill in the rest of the function. Use the Form class defined above
    var password : string = document.forms["form"]["password"].value
    var password_confirmation : string = document.forms["form"]["password_confirmation"].value
    var website : string = document.forms["form"]["website"].value
    var phone_number : string = document.forms["form"]["phone_number"].value
    var fname : string = document.forms["form"]["fname"].value
    var lname : string = document.forms["form"]["lname"].value
    var age : number = document.forms["form"]["age"].value
    var birth_month : string = document.forms["form"]["birth_month"].value
    var birth_day : number = document.forms["form"]["birth_day"].value
    var birth_year : number = document.forms["form"]["birth_year"].value

    var form : Form = new Form(email, password, password_confirmation,
        website, phone_number, fname, lname, age, birth_month, birth_day, birth_year)

    var fields = ['email', 'password', 'password_confirmation', 'website', 'phone_number',
        'first_name', 'last_name', 'age', 'birth_month', 'birth_day', 'birth_year']

    var check_result = form.check_all()


    /*
    for (let key in fields) {
        is_all_true_in_check_result = is_all_true_in_check_result && check_result[key]
    }
    */

    var wrong_fields = []

    for (let key of fields) {
       if (check_result[key] == false) {
           wrong_fields.push(key)
       }
    }

    var is_all_true_in_check_result = wrong_fields.length == 0
    var popup_message = ""

    if (is_all_true_in_check_result) {
        popup_message = "Successfully Submitted"
    } else {
       popup_message = "Please check following fields: \n ";
       for (let field_name of wrong_fields) {
           popup_message += field_name.replace("_", " ") +"\n"
       }
    }

    alert(popup_message)

    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: use the `alert` function for modals.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.

    for (let key of fields) {
        if (check_result[key] == true) {
            document.getElementById(key + "_o").style.display = 'inline'
            document.getElementById(key + "_x").style.display = 'none'
        } else {
            document.getElementById(key + "_o").style.display = 'none'
            document.getElementById(key + "_x").style.display = 'inline'
        }
    }
}
document.body.appendChild(but)
