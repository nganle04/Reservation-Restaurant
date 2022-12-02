const HeaderTabs = (props)=>{
    const {tabs,tab,SetTab}=props
    // const tabs = ['Matches','Transfers','Standing','Squad','Leagues','Trophies']
    return <ul id='header-tab' className="nav">
      {tabs.map((item,index)=>(<li key={index} className="nav-item">
        <a onClick={()=>{
          SetTab(item)
          document.querySelector('#header-tab .nav-link.active').scrollIntoView({ 
            behavior: 'smooth' 
          })
        }} className={"nav-link"+(tab==item?" active":"")}>{item}</a>
      </li>))}
    </ul>
}
export default HeaderTabs