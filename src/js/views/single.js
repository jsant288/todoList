import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const namesArray = ["joel", "brandon"];
	return (
		<div>
			{namesArray.map((name, index) => {
				return <p key={index}>{name}</p>;
			})}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
