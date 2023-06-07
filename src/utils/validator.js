const fieldRequiredMessage = "This field is required";

export const validateForm = (name, email, phone) => {
	let errors = {};

	if (!name) {
		errors.name = fieldRequiredMessage;
	}

	if (!email) {
		errors.email = fieldRequiredMessage;
	} else {
		if (
			!email.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			)
		) {
			errors.email = "Email is invalid";
		}
	}

	if (!phone) {
		errors.phone = fieldRequiredMessage;
	} else {
		if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
			errors.phone = "This phone number is invalid";
		}
	}

	return errors;
};
