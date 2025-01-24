import { sliderItems } from '../Footer/Footer'
import './Slider.scss'

interface SliderProps {
	items: sliderItems[];
	sliderRef: React.RefObject<HTMLUListElement>;
}

export const Slider = ({items, sliderRef} : SliderProps) => {

	return (
		<div className="slider-container">
			<ul className="slider-wrap" ref={sliderRef}>
			{items.map((item, index) => (
              <li key={index} className="slider-item">
                <span>{`0${index + 1}`}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link}>{item.linkText}</a>
              </li>
            ))}
			</ul>
		</div>
	)
};
