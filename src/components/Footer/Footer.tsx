import useSlider from '../../hooks/useSlider'
import { Slider } from '../Slider/Slider'
import './Footer.scss'

export type sliderItems = {
	title: string;
	description: string;
	link: string;
	linkText: string;
}

const sliderItems: sliderItems[] = [
  { title: "БОЛЬШАЯ БАЗА", description: "У нас самая большая база актуальных и эксклюзивных объектов элитной недвижимости", link: "#", linkText: "Посмотреть" },
  { title: "НАДЁЖНОСТЬ", description: "Мы гарантируем абсолютную безопасность и конфиденциальность по сделкам", link: "#", linkText: "Узнать" },
  { title: "ОПЫТ", description: "Наша команда имеет огромный опыт продаж недвижимости в элитном сегменте", link: "#", linkText: "Изучить" },
  { title: "ЗАКРЫТЫЕ ПРЕДЛОЖЕНИЯ", description: "Есть объекты, которые предлагаем только мы", link: "#", linkText: "Получить" },
];

export const Footer = () => {
	const { sliderRef, nextSlide, prevSlide, currentIndex, visibleCount } = useSlider(sliderItems.length);

	return (
		<footer>
			<div className="container col">
				<div className="footer__wrap">
					<div className="footer__title">
						<h2>ОСОБЕННОСТИ РАБОТЫ</h2>
						<h3>КОМПАНИИ SAFFARI ESTATE</h3>
					</div>
					<div className="footer__slider-row">
						<button 
						className='footer__slider-row_btn'
						onClick={prevSlide}
						disabled={currentIndex === 0}
						>
							<img src="/src/assets/icons/row-left.svg" alt="row-left" 
							/>
						</button>

						<button 
							className='footer__slider-row_btn' 
							onClick={nextSlide}
              disabled={currentIndex + visibleCount === sliderItems.length - 1}
						>
							<img src="/src/assets/icons/row-right.svg" alt="row-right" />
						</button>
					</div>
				</div>
				
				<Slider items={sliderItems} sliderRef={sliderRef}/>
			</div>
		</footer>
	)
};
