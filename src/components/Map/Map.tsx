import { useCallback, useState } from 'react'
import {
  YMap,
  YMapComponentsProvider,
  YMapCustomClusterer,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker
} from 'ymap3-components'
import custom from '../../assets/mapStyle/customization.json'
import { location as LOCATION, apiKey, points } from './helpers.ts'
import './Map.scss'
import { GeoJSONPointFeature } from './TMap.ts'

interface MapItemProps {
	filter: string;
}

export const Map = ({ filter } : MapItemProps) => {
  const [location] = useState(LOCATION);

  const marker = useCallback(
    (feature: GeoJSONPointFeature) => {
      // Условие для фильтрации
      if (feature.description?.title !== filter && filter !== 'Все' ) {
        return null;
      }

      return (
        <YMapMarker key={feature.id} coordinates={feature.geometry.coordinates}>
          <div
            className={`mark ${feature.type} ${feature.type !== 'main' ? 'circle' : ''}`}
          >
          </div>
        </YMapMarker>
      );
    },
    [filter]
  );

  return (
    <div className="map">
      <YMapComponentsProvider apiKey={apiKey} lang="en_RU">
        <YMap key="map" location={location} mode="vector">
          <YMapCustomClusterer
            marker={marker}
            gridSize={64}
            features={points}
          />
          <YMapDefaultSchemeLayer customization={custom} />
          <YMapDefaultFeaturesLayer />
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
};