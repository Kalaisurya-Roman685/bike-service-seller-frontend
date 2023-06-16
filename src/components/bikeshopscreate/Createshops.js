import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import NewUrl from '../../config/newBaseurl';
import './styles/pagination.scss';
function Createshops() {
  const [items, setItems] = useState([]);

  const [pagecount,setPagecount]=useState("");

  const fetchComments = async (current) => {
    const res = await NewUrl.get(`/comments?_page=${current}&_limit=10`)
    console.log(res?.data, "res")

    return res?.data;
  }

  const handlePageClick = async (data) => {
    console.log(data?.selected + 1, "one");

    let current = data?.selected + 1;

    const commentForms = await fetchComments(current);
    setItems(commentForms);
  }


  useEffect(() => {
    const gt = async () => {
      const res = await NewUrl.get('/comments?_page=1&_limit=10');
      setItems(res?.data);
      setPagecount(res?.data?.length/10)


      // .then((res) => {
      // }).catch((err) => {
      //   console.log(err);
      // })
    }
    gt();
  }, [pagecount])

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
        return <button className={"activess"}>
            {/* <Image src={leftarrow} alt="no image" className={styles.arrowsizefix} /> */}
            kalia left
        </button>
    }
    if (type === 'next') {
        return <button className='activess'>
            {/* <Image src={rightarrow} alt="no image" className={styles.arrowsizefix} /> */}
            kalai right
        </button>
    }
    return originalElement;
}

  return (
    <div>

      <div>
        {items?.map((item, index) => {
          return (
            <div key={index}>
              {item?.id}
            </div>
          )
        })}
      </div>

      {pagecount}
      <ReactPaginate

      //   previousLabel="< previous"
      //   nextLabel={"next >"}
      //   breakLabel="..."
      //   pageCount={25}
      //   marginPagesDisplayed={3}

      //   onPageChange={handlePageClick}
      //   pageRangeDisplayed={5}
      //   renderOnZeroPageCount={null}
      
      // // containerClassName="pagination"
      // // pageClassName='page-item'
      // // pageLinkClassName='page-link'
      // // previousClassName='page-items'
      // // previousLinkClassName='page-link'
      // // nextClassName='page-item'




      activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={"Next >"}
        onPageChange={handlePageClick}
        pageCount={pagecount*items?.length}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={" < Previous"}

      
   
      />
    </div>
  )
}

export default Createshops