import earth from '../assets/Fill 213.svg'

export default function Header() {
  return (
    <header>
      <h1>
        <img src={earth} alt="earth icon" className='header-icon'/>
        my travel journal.
      </h1>
    </header>
  )
}
