import React from "react";

export default function SearchBar({show}) {
  return (
    <React.Fragment>
      <div>
        {show ? (
          <div className='rd-search'>
            <form action={`/search`} method='GET'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control UnicodeNepali'
                  placeholder='समाचारहरु खोज्नुहोस्..'
                  name='news'
                />
                <div className='input-group-append'>
                  <button className='btn btn-warning'>
                    <i className='fas fa-search'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
}
