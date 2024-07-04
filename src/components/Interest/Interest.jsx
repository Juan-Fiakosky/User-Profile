"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Interest.module.css";

const Interest = () => {
	const [expanded, setExpanded] = useState(false);
	const listRef = useRef(null);
	const [listHeight, setListHeight] = useState("0px");

	useEffect(() => {
		if (expanded) {
			setListHeight(`${listRef.current.scrollHeight}px`);
		} else {
			setListHeight("0px");
		}
	}, [expanded]);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<section className={styles.section}>
			<h2 onClick={toggleExpand} className={styles.title}>
				Interests
			</h2>
			<ul
				ref={listRef}
				className={`${styles.list} ${expanded ? styles.expanded : ""}`}
				style={{ maxHeight: listHeight }}
				data-testid="interest-list"
			>
				<li className={styles.listItem}>E-commerce y Marketplaces</li>
				<li className={styles.listItem}>
					Continuous Integration and Continuous Deployment (CI/CD)
				</li>
				<li className={styles.listItem}>Agile methodologies</li>
				<li className={styles.listItem}>Blockchain y Cryptocurrencies</li>
				<li className={styles.listItem}>Proyectos Open Source</li>
				<li className={styles.listItem}>Cybersecurity</li>
			</ul>
		</section>
	);
};

export default Interest;
