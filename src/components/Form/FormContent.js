export function FormContent() {
	return (
		<form className="form-content">
			<div>
				<label htmlFor="name">Name</label> <br />
				<input type="text" id="name" name="name" />
			</div>

			<div>
				<label htmlFor="email">Email Address</label> <br />
				<input type="email" id="email" name="email" />
			</div>

			<div>
				<label htmlFor="phone">Phone Number</label> <br />
				<input type="text" id="phone" name="phone" />
			</div>
		</form>
	);
}
