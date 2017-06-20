import React from 'react'

const GeneralInfo = () => {
  return (
    <div className='wallpaper-no-border'>
      <div className='info-container'>
        <div className='info-page'>
          <hr></hr>
          <p className='info-header'>Wheelie bins, bags and crates.</p>
          <p className='info-text'>Wellington City Council issues free recycling bags from May-June. During alternative months you can purchase your recycling bags from the Council Service Centre, or Johnsonville, Kilbirnie, Newtown, or Tawa libraries. If you live in the suburbs you can use a council wheelie bin or recycling bags for paper, metals, and other household items. Make sure you separate any glassware. Glass bottles and jars can be recycled in the council issued 45-litre recycling crate.</p>
          <hr></hr>
          <p className='info-header'>Recycling tips for tidy kiwis.</p>
          <p className='info-text'>Just a few pointers to make your recycling efforts more productive:</p>
          <div className='info-div'>
            <li className='info-pointers'>Close the lid of your wheelie bin so it doesn't fill with rain water and recycling materials won't blow away.</li>
            <li className='info-pointers'>If you live in the city, an easy way to manage your recycling is by sorting materials into clear plastic bags (supermarket bags are fine).</li>
            <li className='info-pointers'>Bundles of cardboard under 15kg may also be put out for collection - ensure they are flattened and securely tied with string or tape.</li>
            <li className='info-pointers'>You can recycle paper of any kind, unless it is waxed or foil-backed, or has plastic or food on it.</li>
          </div>
          <hr></hr>
          <p className='info-header'>Compost for the love of earth!</p>
          <p className='info-text'>Composting is one of the first steps toward sustainable living. It significantly reduces the amount of waste going to landfills around Wellington.</p>
          <p className='info-text'>Here's a brief list of organic materials safe to compost:</p>
          <div className='info-div-2'>
            <li className='info-pointers'>Vegetable scraps</li>
            <li className='info-pointers'>Coffee grounds and filters</li>
            <li className='info-pointers'>Lawn clippings</li>
            <li className='info-pointers'>Tree clippings (only small twigs and branches)</li>
            <li className='info-pointers'>Breads, grains and pasta</li>
          </div>
          <hr></hr>
          <p className='info-header'>To pee or not to pee! How to make nappie waste more sustainable:</p>
          <p className='info-text'>Cloth nappies provide a zero waste alternative to disposable nappies, and modern versions are a lot easier and simpler to use than traditional cloth nappies.</p>
          <p className='info-text'>For more information on waste-free parenting, check out
            <a href='http://www.thenappylady.co.nz/Workshop-Wellington.html'> The Nappy Ladies</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
