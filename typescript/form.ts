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

	check_email() {
		var reg = /^\S+@\S+\.\S{2,3}/
		if (reg.test(this.email)) {
			return 'correct'
		} else {
			return 'incorrect'
		}
	}

	check_password() {
	    /*
	    longer than 8 characters
	    contains at least a number
	    contains at least a lower case
	    contains at least an upper case
	     */
	    var longer_than_8_chars = this.password.length >= 8
        var has_one_lower_case = /[a-z]/.test(this.password)
        var has_one_upper_case = /[A-Z]/.test(this.password)
        var has_one_number = /[0-9]/.test(this.password)

        if (longer_than_8_chars &&
        has_one_lower_case &&
        has_one_upper_case &&
        has_one_number) {
	        return 'correct'
        } else {
	        return 'incorrect'
        }
    }

    check_password_confirmation() {
	    if (this.password == this.password_confirmation) {
	        return 'correct'
        } else {
	        return 'incorrect'
        }
    }

    check_website() {
	    var reg = /http:\/\/\w+/
        if (reg.test(this.website)) {
	        return 'correct'
        } else {
	        return 'incorrect'
        }
    }

    check_phone_number() {
	    var reg = /\d{3}\-\d{4}\-\d{r}/
        if (reg.test(this.phone_number)) {
	        return 'correct'
        } else {
	        return 'incorrect'
        }
    }

    //TODO
    // field에 dictionary추가해도 괜찮은지?
    // 괜찮을 경우 reg dictionary에 {'field':'regex'}로 regex 저장.
    // email, website, phone_number, first_name, last_name는 하나의 함수로 처리 가능


    check_first_name() {
	    var reg = /[A-Z][a-z]+/
        if (reg.test(this.fname)) {
	        return 'correct'
        } else {
	        return 'incorrect'
        }
    }

    check_last_name() {
	    var reg = /[A-Z][a-z]+/
        if (reg.test(this.lname)) {
	        return 'correct'
        } else {
	        return 'incorrect'
        }
    }

    check_age() {
	    return this.age >= 0 && this.age <= 200
    }

    check_birth_month() {
	    var months = ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"]

	    return this.birth_month in months
    }

    // TODO
    // 그냥 1-31로 처리해도 괜찮은지?
    check_birth_day() {
	    return this.birth_day >= 1 && this.birth_day <= 31
    }

    check_birth_year() {
	    return this.birth_year >= 1800 && this.birth_year <= 2017
    }

    check_all() {
	    var result = {}
	    result['email'] = this.check_email()
        result['password'] = this.check_password()
        result['password_confirmation'] = this.check_password_confirmation()
        result['website'] = this.check_website()
        result['phone_number'] = this.check_phone_number()
        result['first_name'] = this.check_first_name()
        result['last_name'] = this.check_last_name()
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

    // regex
	/*
	email: /\S+\@[^ \s\@]+\.[a-z]{2,3}
	password:
	password_confirmation
	website:/http\:\/\/\w+
	phone_number : /\d{3}\-\d{4}\-\d{4}
	first name: /[A-Z][a-z]+/
	last name: /[A-Z][a-z]+/
	age: 0 to 200 -- comparison
	birth_month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	birth_day: 1 to 31 -- comparison
	birth_year: 1800 to 2017 -- comparison
	 */
	/*
	check_ 함수 -> 'correct' 또는 'incorrect' 출력.
	출력값은 dictionary에 저장.
	 */


    var form : Form = new Form(email, password, password_confirmation,
		website, phone_number, fname, lname, age, birth_month, birth_day, birth_year)


    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: use the `alert` function for modals.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)
