import React from 'react';
import { Pagination } from 'react-bootstrap';



  const BasicPagination = ({postsPerPage, totalPosts,paginate}) => {

    const container = {
        height:'50px',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        
    }

    const pagechanges  = {
        marginRight:'20px',
        listStyle:'none',
        textDecoration:'none',
    }

    const pageNumber = [];

    for (let i=1;i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i)
    }

    console.log(pageNumber)
    return (
     
        <div >
        <Pagination style={container}>
                        

                        {pageNumber.map((number,index) => (
                        <Pagination.Item key={index} style={pagechanges} onClick={() => paginate(number)} >{number}</Pagination.Item>
                    ) ) }
                        {/* <a onClick={() => paginate(number)} className='page-link'> {number} </a> */}

                        
                      
                </Pagination>
        </div>
      
    )
}

export default BasicPagination;
