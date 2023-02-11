import React, { useMemo } from 'react'


const SearchData = ({ inpt, setInpt, setSrcItem ,srcItem}) => {

  const SrcData = () => {

    setSrcItem(inpt);

  }
  return (
    <div>
      <input type='text' value={inpt} onChange={(e) => setInpt(e.target.value)} />

      <button className='btn' onClick={SrcData}>Search</button>

    </div>
  )
}
export default React.memo(SearchData);