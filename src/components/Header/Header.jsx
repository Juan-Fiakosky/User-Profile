"use client";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.profile}>
				<div className={styles.info}>
					<img
						src="/images/profile.jpeg"
						alt="Profile"
						className={styles.profileImage}
					/>
					<div className={styles.profileInfo}>
						<h1 className={styles.title}>Juan Nicolas Fiakosky</h1>
						<p className={styles.subtitle}>Full Stack Developer</p>
					</div>
				</div>
				<div className={styles.contactInfo}>
					<p>
						<strong>City:</strong> Córdoba, Argentina
					</p>
					<p>
						<strong>Email:</strong> jfiakosky@hotmail.com
					</p>
					<p>
						<strong>Phone:</strong> ###-#######
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
