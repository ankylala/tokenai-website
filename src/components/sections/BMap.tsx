import { useState } from 'react';

interface BMapProps {
  longitude?: number;
  latitude?: number;
}

const BAIDU_MAP_AK = 'rQmFveXYrkeQPtPGRMjehzlfsqVJeKlS';

export function BMap({ longitude = 116.312, latitude = 39.992 }: BMapProps) {
  const [showMap, setShowMap] = useState(false);

  const staticMapUrl = `https://api.map.baidu.com/staticimage/v2?ak=${BAIDU_MAP_AK}&center=${longitude},${latitude}&zoom=15&width=600&height=400&markers=${longitude},${latitude}&markerStyles=m,A,0`;

  const mapUrl = `https://map.baidu.com/search/@${latitude},${longitude},15,1`;

  if (showMap) {
    return (
      <div className="w-full h-full rounded-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 'none', borderRadius: '8px' }}
          title="百度地图"
        />
        <button
          onClick={() => setShowMap(false)}
          className="absolute top-2 right-2 bg-white/80 rounded-full p-1 hover:bg-white"
        >
          ✕
        </button>
      </div>
    );
  }

  return (
    <div 
      className="w-full h-full rounded-lg relative cursor-pointer overflow-hidden group"
      onClick={() => setShowMap(true)}
    >
      <img
        src={staticMapUrl}
        alt="公司位置"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-4 py-2 rounded-full text-sm text-gray-700">
          点击查看大图
        </div>
      </div>
      <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded-full text-xs text-gray-600">
        北京市海淀区
      </div>
    </div>
  );
}
