import React from "react";
import { PlanBox } from "./planBox";
import { ReactComponent as ArcadeIcon } from "../../assets/img/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/img/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/img/icon-pro.svg";

export function Step2Content() {
	return (
		<div className="step2">
			<PlanBox icon={ArcadeIcon} title="Arcade" price={90} isYearly={true} />
			<PlanBox
				icon={AdvancedIcon}
				title="Advanced"
				price={120}
				isYearly={true}
			/>
			<PlanBox icon={ProIcon} title="Pro" price={150} isYearly={true} />
		</div>
	);
}
