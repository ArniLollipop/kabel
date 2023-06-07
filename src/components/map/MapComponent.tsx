import classNames from "classnames";
import cls from "./MapComponent.module.scss";
import GoogleMapReact from "google-map-react";
import ReactDOMServer from "react-dom/server";
import Script from "next/script";
import { useEffect } from "react";

let cn = classNames.bind(cls);

interface Coords {
  lon: number;
  lat: number;
}

interface MapComponentProps {
  className?: string;
  coords: Coords;
}

// ReactDOMServer.renderToString <-- to render it in a server side
const markerIcon = ReactDOMServer.renderToString(
  <svg
    width="83"
    height="83"
    viewBox="0 0 83 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M72.625 34.5833C72.625 58.7916 41.5 79.5416 41.5 79.5416C41.5 79.5416 10.375 58.7916 10.375 34.5833C10.375 26.3284 13.6542 18.4116 19.4913 12.5746C25.3284 6.73748 33.2451 3.45825 41.5 3.45825C49.7549 3.45825 57.6716 6.73748 63.5087 12.5746C69.3458 18.4116 72.625 26.3284 72.625 34.5833Z"
      fill="#F6BF0C"
    />
    <path
      d="M41.5 44.9583C47.23 44.9583 51.875 40.3132 51.875 34.5833C51.875 28.8533 47.23 24.2083 41.5 24.2083C35.77 24.2083 31.125 28.8533 31.125 34.5833C31.125 40.3132 35.77 44.9583 41.5 44.9583Z"
      fill="white"
    />
  </svg>
);

export const MapComponent = (props: MapComponentProps) => {
  const { className, coords } = props;
  const { lon, lat } = coords;

  const renderMarker = (map: any, maps: any) => {
    const marker = new maps.Marker({
      position: { lat: lat, lng: lon },
      map,
      icon: {
        url:
          "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(markerIcon),
        scaledSize: new maps.Size(50, 50),
      },
    });
    return marker;
  };

  return (
    <div className={cn(cls.MapComponent)}>
      <div className={cn(cls.MapComponent_map) + " relative"}>
        <div id="map" className="w-full h-full top-0 absolute"></div>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
                getMap(${lat}, ${lon})
              `,
          }}
        ></Script>
      </div>
    </div>
  );
};
