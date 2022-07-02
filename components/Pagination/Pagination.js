import leftChevron from '../../assets/img/leftChevron.svg';
import rightChevron from '../../assets/img/rightChevron.svg';

import { Link } from 'react-router-dom';

import classnames from 'classnames';

import styles from './Pagination.module.scss';

import { DOTS, usePagination } from '../../hooks/usePagination';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const { pathname } = useLocation();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  useEffect(() => {}, [paginationRange]);

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  };

  const onPageClick = (pageNumber) => {
    onPageChange(pageNumber);
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationBlock}>
        <ul>
          <li disabled={currentPage === 1} onClick={onPrevious}>
            <Link to={pathname}>
              <img src={leftChevron} alt="" />
            </Link>
          </li>
          {paginationRange &&
            paginationRange.map((pageNumber, i) => {
              if (pageNumber === DOTS) {
                return (
                  <li key={i} className="pagination-item dots">
                    &#8230;
                  </li>
                );
              }

              return (
                <li
                  key={i}
                  selected={pageNumber === currentPage}
                  className={pageNumber === currentPage && styles.selected}
                  onClick={() => onPageClick(pageNumber)}
                >
                  <Link to={pathname}> {pageNumber}</Link>
                  {/* <Link to={`/?page=${pageNumber}`}> {pageNumber}</Link> */}
                </li>
              );
            })}
          <li disabled={currentPage === lastPage} onClick={onNext}>
            <Link to={pathname}>
              <img src={rightChevron} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
