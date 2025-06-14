import React, { useState } from "react";
import "./Sixsteps.css";

const stepsData = [
	{
		title: "Physical activity",
		tag: "💓 121/81mmHg", // Heart rate emoji
		image: require("../assets/images/i1.jpg"),
		description:
			"Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
	},
	{
		title: "Restorative sleep",
		tag: "❤️ 32 minutes", // Heart emoji
		image: require("../assets/images/i2.jpg"),
		description:
			"Consistent, quality sleep is essential for cognitive function and physical health.",
	},
	{
		title: "Stress management",
		tag: "🌙 8 hours", // Moon with stars emoji
		image: require("../assets/images/i3.jpg"),
		description:
			"Effective stress management techniques are crucial for mental well-being and overall health.",
	},
	{
		title: "Social connection",
		tag: "💙 60 bpm", // Blue heart emoji
		image: require("../assets/images/i4.jpg"),
		description:
			"Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
	},
	{
		title: "Substance abuse",
		tag: "❤️ Feeling better", // Red heart emoji
		image: require("../assets/images/i5.jpg"),
		description:
			"Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
	},
	{
		title: "Nutrition",
		tag: "⏰ 62 days", // Clock emoji
		image: require("../assets/images/i6.jpg"),
		description:
			"Emphasis on whole food, plant-based nutrition to prevent, treat, and reverse chronic illness.",
	},
];

const Sixsteps = () => {
	const [activeStep, setActiveStep] = useState(null);

	const handlePillClick = (stepTitle) => {
		setActiveStep(activeStep === stepTitle ? null : stepTitle);
	};

	// Add the handleNavigation function
	const handleNavigation = (direction) => {
		const currentIndex = stepsData.findIndex(
			(step) => step.title === activeStep
		);
		let newIndex;

		if (direction === "next") {
			newIndex = currentIndex === stepsData.length - 1 ? 0 : currentIndex + 1;
		} else {
			newIndex = currentIndex <= 0 ? stepsData.length - 1 : currentIndex - 1;
		}

		setActiveStep(stepsData[newIndex].title);
	};

	return (
		<section className="six-steps-section">
			<div className="six-steps-header">
				<div className="text-content">
					<h2 className="section-title">
						<span className="highlight">How it works</span>
					</h2>
					<p className="section-subtitle">
						<span className="italic">Lifestyle as medicine:</span> The six pillars
					</p>
				</div>
				<div className="navigation-buttons">
					<button
						className="nav-button"
						onClick={() => handleNavigation("prev")}
					>
						&larr;
					</button>
					<button
						className="nav-button"
						onClick={() => handleNavigation("next")}
					>
						&rarr;
					</button>
				</div>
			</div>
			<div className="pill-navigation">
				{stepsData.map((step) => (
					<button
						key={step.title}
						className={`pill ${
							activeStep === step.title ? "active" : ""
						}`}
						onClick={() => handlePillClick(step.title)}
					>
						{step.title}
					</button>
				))}
			</div>
			<div className="steps-scroll-container">
				<div className="steps-horizontal-scroll">
					{stepsData.map((step, index) => (
						<div
							key={index}
							className={`step-card ${
								activeStep === step.title ? "active" : ""
							}`}
						>
							<div className="image-wrapper">
								<img src={step.image} alt={step.title} />
								<span className="step-tag">{step.tag}</span>
							</div>
							<div className="step-content">
								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sixsteps;
