import clsx from 'clsx'
import { useState } from 'react'
import './Promo.scss'

export const Promo = () => {
	const [active, setActive] = useState(false)

	return (
		<section className={clsx('promo', { active })}>
			<div className="container">
				<div className="promo__consent-wrap">

					<div className="promo__info">
						<ul>
							<li className="promo__info-item">
								<h3>156 - 636 <span>м2</span></h3>
								<p>Площадь квартир</p>
							</li>
							<li className="promo__info-item">
								<h3>475   </h3>
								<p>Парковочных мест</p>
							</li>
							<li className="promo__info-item">
								<h3>10 <span>мин</span></h3>
								<p>До метро Фрунзенская</p>
							</li>
							<li className="promo__info-item">
								<h3>2 <span>га</span></h3>
								<p>Площадь собственного парка</p>
							</li>
						</ul>

						<p className="promo__info-text">
							Жилой комплекс из четырех клубных домов класса де-люкс в английском стиле, расположенный в собственном парке площадью 3 га в районе Хамовники. Авторы интерьеров жилого копмлекса,и дизайна частного парка – дизайнеры мировой величины. Так, общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании и глава компании LINLEY, а настоящий английский парк для жителей
						</p>
					</div>

					<button className='promo__open-btn' onClick={() => setActive(!active)}>УЗНАТЬ ПОДРОБНЕЕ</button>
				</div>
				
				<div className="promo__picture">
					<div className="promo__picture_first"> </div>

					<div className='promo__picture-wrap'>
							<a href="#" className="promo__picture_second">Презентация <br/> ЖК Knightsbridge Private Рark</a>
							<a href="#" className="promo__picture_second">Типы планировок апартаментов</a> 
					</div>
				</div>

			</div>
		</section>
	)
};
