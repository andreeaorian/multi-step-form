export function Step1Content() {
	return (
		<form className="step1">
			<div className="group">
				<label htmlFor="name">Name</label> <br />
				<input
					type="text"
					id="name"
					name="name"
					placeholder="e.g. Stephen King"
					required
				/>
			</div>

			<div className="group">
				<label htmlFor="email">Email Address</label> <br />
				<input
					type="email"
					id="email"
					name="email"
					placeholder="e.g. stephenking@lorem.com"
					required
				/>
			</div>

			<div className="group">
				<label htmlFor="phone">Phone Number</label> <br />
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="e.g. +1 234 567 890"
					required
				/>
			</div>
		</form>
	);
}
