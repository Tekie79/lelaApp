export const ServiceCard = ({serviceData})=>{
    const {iconClass, title, description }=serviceData
    return(<div className="home_feature-services">
    <i className={iconClass}></i>
    <h3>{title}</h3>
    <p>
      {description}
    </p>
  </div>)
}