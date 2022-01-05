import './index.css'

const TabItem = props => {
  const {tabDetails, clickChangingTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const onChangeTab = () => {
    clickChangingTab(tabId)
  }
  const VerifyingTab = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${VerifyingTab}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
