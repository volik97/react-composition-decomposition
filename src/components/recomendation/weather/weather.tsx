// компонент отвечающий за погоду в рекомендациях
// props = {icon: url, temperature: { current: текущая,
//                                    morning: утром,
//                                    evening: вечером } } 
export default function weather() {
  return (
    <div className="weather">
        {/* 
        <img src={props.icon} alt=''/>
        <div className="temperature">
            <div className='current'>{props.temperature.current}</div>
            <div className='morning'>{props.temperature.morning}</div>
            <div className='evening'>{props.temperature.evening}</div>
        </div>
        */}
    </div>
  )
}
