import React from 'react';
import './Pagination.css'

const Index = ({ length, onPageChange, currentPage }) => {

	const getPages = length => {
		let content = [];
		let pageCount = Math.ceil(length / 12);

		for (let i = 1; i <= pageCount; i++) {
			if (i === currentPage) {
				content.push(
					<button key={i} onClick={() => onPageChange(i)} className="pagination_btn page_numbers active"
					>{i}</button>
				)
			} 
			else {
				content.push(
					<button key={i} onClick={() => onPageChange(i)} className="pagination_btn page_numbers"
					>{i}</button>
				)
			}
		}
		
		return content;
	}

	return (
		<div className='pagination d-flex justify-center gap-1'>
			{getPages(length)}
		</div>
	);

}

export default Index;
