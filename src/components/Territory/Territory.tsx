import { useMemo, useState } from 'react'
import { points } from '../Map/helpers'
import { Map } from '../Map/Map'
import { MapItem } from '../MapItem/MapItem'
import './Territory.scss'


export const Territory = () => {
	const [filter, setFilter] = useState('Все')

	const onFilter = (type: string) => {
		setFilter(filter !== type ? type : 'Все')
	}

	const countByType = () => {
    const counts: Record<string, number> = {};
    points.forEach((point) => {
      const type = point.description?.title;
      if (type) { 
				counts[type] = (counts[type] || 0) + 1 
			}
    });
    return counts;
  };

	const counts = useMemo(() => countByType(), [points]);

	return (
		<section className='territory'>
			<div className="container">
				<div className="territory__info">
					<h2>НА КАРТЕ</h2>
					<ul>
					{Object.entries(counts).map(([type, count], index) => (
              <MapItem 
								key={index} 
								text={type} 
								number={count} 
								onClick={() => onFilter(type)}
							/>
            ))}
						
					</ul>
				</div>

				<Map filter={filter}/>
			</div>
		</section>
	)
};
