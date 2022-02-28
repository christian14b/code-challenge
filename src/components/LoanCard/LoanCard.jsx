import React from 'react'
import ButtonCard from '../DumbComponents/ButtonCard/ButtonCard';
import SelectFunding from '../DumbComponents/SelectFunding/SelectFunding';
import ProgressBar from '../ProgressBar/ProgressBar';

const LoanCard = ({card}) => {
  const step = 25;
  const limit = 200;
  const fundingOptions = Array(limit/step).fill(0).map((option, index) => step*(index + 1));
  const onClick = () => console.log(`This is a dump component of ${card.name}`);

  return (
    <div className="card">
        <div className='card-image' style={{ paddingTop: '75%' }}>
          <a href={card.image.url}>
            <img src={card.image.url} alt={`${card.name}`} />
          </a>
        </div>
        <div className='card-information'>
          <h2 className='card-information-title'>{card.name}</h2>
          <h4 className='card-information-country'>{card.geocode?.country?.name}</h4>
          <p className='card-information-description'>A ${card.loanAmount} loan {card.whySpecial.replace("It", '')} <a href={card.url}>Read more.</a></p>
        </div>
        <div className='card-footer'>
          {card.loanAmount !== card.loanFundraisingInfo?.fundedAmount ? 
              <>
                  <ProgressBar fundingGoal={card.loanAmount} currentFunding={card.loanFundraisingInfo?.fundedAmount} />
                  <div className='card-footer-form'>
                    <SelectFunding fundingOptions={fundingOptions} />
                    <ButtonCard onClick={onClick}/>
                  </div>
              </>
            :
              <>
                <div className='card-funded-loan-container'>
                  <p className='card-funded-loan-information'>Another lender has selected this loan. Please choose a different borrower to support.</p>
                </div>
              </>
          }
        </div>
    </div>
  )
}

export default LoanCard;
