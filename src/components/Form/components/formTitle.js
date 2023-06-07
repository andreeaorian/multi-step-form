import React from "react";

function FormTitle({ title, subtitle }) {
	return (
		<div className="form-title">
			<h1>{title}</h1>
			<span>{subtitle}</span>
		</div>
	);
}

export default React.memo(FormTitle);
