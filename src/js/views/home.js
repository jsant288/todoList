import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const [list, setList] = useState([]);
	const remove = eventRemove => {
		const afterDelete = list.filter((items, index) => {
			if (items !== eventRemove) {
				return items;
			}
		});
		setList(afterDelete);
	};
	const add = eventAdd => {
		if (eventAdd.key == "Enter") {
			setList([...list, eventAdd.target.value]);
			eventAdd.target.value = "";
		}
	};
	return (
		<>
			<input
				type="text"
				onKeyPress={e => {
					add(e);
				}}
				input
			/>
			<div className="d-flex">
				{list.map((item, index) => {
					return (
						<>
							<p key={index}>{item}</p>
							<button onClick={() => remove(item)}>
								<i className="fas fa-trash-alt" />
							</button>
						</>
					);
				})}
			</div>
		</>
	);
};
