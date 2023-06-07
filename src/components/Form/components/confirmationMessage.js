import React from "react";
import useDisplaySize from "../../../hooks/useDisplaySize";

import { ReactComponent as ThankYouIcon } from "../../../assets/img/icon-thank-you.svg";

function ConfirmationMessage() {
	const isMobile = useDisplaySize();
	const imageSize = isMobile ? 40 : 80;

	return (
		<div className="confirmation-message">
			<ThankYouIcon width={imageSize} height={imageSize} />
			<h1 className="confirmation-title"> Thank you!</h1>
			<div className="confirmation-details">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</div>
		</div>
	);
}

export default React.memo(ConfirmationMessage);
