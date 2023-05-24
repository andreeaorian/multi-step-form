import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";

import { ReactComponent as ThankYouIcon } from "../../assets/img/icon-thank-you.svg";

export default function ConfirmationMessage() {
	const { isConfirmed } = useContext(FormDataContext);

	return (
		<div className={`confirmation-message ${isConfirmed ? "" : "hidden"}`}>
			<ThankYouIcon width={80} height={80} />
			<h1 className="confirmation-title"> Thank you!</h1>
			<div className="confirmation-details">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</div>
		</div>
	);
}
