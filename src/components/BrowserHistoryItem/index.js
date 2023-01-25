import './index.css'

const BrowserHistoryItem = props => {
  const {historyListDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListDetails
  const onClickDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-container">
      <div className="main-container">
        <div className="history-container">
          <p className="time-para">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <p className="title-para">{title}</p>
          <p className="domain-para">{domainUrl}</p>
          <button
            data-testid="delete"
            type="button"
            className="delete-button"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
