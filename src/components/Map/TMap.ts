export interface GeoJSONPointFeature {
	type: string;
	id: string;
	geometry: {
		type: string;
		coordinates: [number, number];
	};
	description?: {
    title: string;
	}
}