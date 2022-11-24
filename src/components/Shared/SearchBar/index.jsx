import React, { useState } from "react";
import {
	NavSearchBar,
	SearchInputs,
	InputName,
	TextInput,
	DataResult,
	Result,
	Search,
	IoClose,
} from "./style";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data, updateResult }) {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		updateResult(event.target.value)
		const newFilter = data.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});
		// console.log(newFilter);

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered("");
	};
	return (
		<NavSearchBar>
			<SearchInputs>
				<InputName
					type="text"
					placeholder={placeholder}
					value={wordEntered}
					onChange={handleFilter}
				/>
				<TextInput>
					{filteredData.length === 0 ? (
						<Search />
					) : (
						<IoClose id="clearBtn" onClick={clearInput} />
					)}
				</TextInput>
			</SearchInputs>

			{/* {filteredData.length !== 0 && (
				<DataResult>
					{filteredData.slice(0, 5).map((value, key) => {
						return (
							//to={`/search_result/${value.name}`}
							<Link className="dataItem" >
								<Result onClick={clearInput}> {value.name} </Result>
							</Link>
						);
					})}
				</DataResult>
			)} */}
		</NavSearchBar>
	);
}

export default SearchBar;
