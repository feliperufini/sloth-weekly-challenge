function formatPhoneNumber(phone) {
	function checkIsValidDigit(digit) {
		if (typeof digit !== "number" || digit < 0 || digit > 9) {
			return false;
		}
		return true;
	}

	if (phone.length !== 10) {
		return console.log("Phone number length is invalid!");
	}

	if (!phone.every((digit) => checkIsValidDigit(digit))) {
		return console.log("Phone number digit is invalid!");
	}

	const stringPhone = phone.join("");
	return console.log(
		`(${stringPhone.substring(0, 3)}) ${stringPhone.substring(3, 6)}-${stringPhone.substring(6, 10)}`,
	);
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// output = "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]);
// output = "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);
// output = "(345) 501-2527"
