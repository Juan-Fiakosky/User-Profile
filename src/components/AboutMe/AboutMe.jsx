"use client";
import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
	return (
		<section className={`${styles.section} ${styles.expanded}`}>
			<div className={styles.content}>
				<h2 className={styles.title}>About Me</h2>
				<p className={styles.description}>
					I consider myself passionate about programming, committed to
					continuous learning and professional development in the world of
					technology. Eager to contribute to challenging projects and
					collaborate with innovative teams.
					<br />
					Outside of work, I enjoy contributing to open-source projects and
					staying updated with the latest trends in technology. I am currently
					learning about cloud computing and serverless architectures to expand
					my skillset.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
