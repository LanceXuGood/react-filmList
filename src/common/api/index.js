import Http from '../http';
export function getList({
    cityCode,
    pageSize =20,
    source = 102,
    time = Date.now()
}) {
    return Http.get('/ware/car/hot-car/{cityCode}', {
        cityCode,
        pageSize,
        source,
        time
    });
}
