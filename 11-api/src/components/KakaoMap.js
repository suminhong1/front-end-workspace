import { useEffect, useRef } from 'react';

const KakaoMap = () => {
    // var container = document.getElementById('map');
    const mapRef = useRef(null); // <= 바로 참조 할수있게 해주는것

    var options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3, //확대 축소 관리
    };
    useEffect(() => {
        var map = new window.kakao.maps.Map(mapRef.current, options);
    }, []);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }}></div>;
};
export default KakaoMap;
