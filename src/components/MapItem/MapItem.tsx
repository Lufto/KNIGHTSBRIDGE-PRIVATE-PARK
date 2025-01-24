import './MapItem.scss'

interface MapItemProps {
	text: string;
	number: number;
	onClick: () => void;
}

export const MapItem = ({text, number, onClick} : MapItemProps) => {
	return (
		<li className="map__info-item" onClick={onClick}>
			{text.toUpperCase()} <span>{number}</span>
		</li>
	)
};
