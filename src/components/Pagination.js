import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

  const Previous = () => {
    onPrevious();
  };

  const Next = () => {
    onNext();
  }

  return (
    <nav className="pagination justify-content-center mt-5">
        <ul className="pagination">
        { prev ? (
            <li className="page-item"><button className="page-link" onClick={Previous}>Previous</button></li>
          ) : null}
        { next ? (
            <li className="page-item"><button className="page-link" onClick={Next}>Next</button></li>
          ) : null}
        </ul>
    </nav>
  )
}

export default Pagination

