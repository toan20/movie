import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Link } from 'react-router-dom';
function MovieDetail() {
    const { slug } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    axiosRetry(axios, {
        retries: 3, // Số lần thử lại
        retryDelay: (retryCount) => {
            return retryCount * 2000; // Thời gian chờ giữa các lần thử lại (2s, 4s, 6s, ...)
        },
        retryCondition: (error) => {
            // Thử lại chỉ khi gặp lỗi 429
            return error.response.status === 429;
        },
    });
    useEffect(() => {
        axios
            .get(` https://phim.nguonc.com/api/film/${slug}`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data.movie.episodes[0].items);
    return (
        <div className="bg-secondary">
            <Header />
            <div className="container mt-5 bg-dark">
                <div className="row">
                    <div
                        style={{
                            height: '500px',
                            backgroundImage: `url(${data.movie.poster_url})`,
                        }}
                        className=" background col-lg-12"
                    ></div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <span className="title">{data.movie.name}</span>
                    </div>
                    <div className="col-lg-12">
                        <span style={{ color: 'white' }}>{data.movie.original_name}</span>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <p className="test">Tập phim :</p>
                        {data.movie.episodes[0].items.map((item, index) => (
                            <Link key={index} to={item.embed}>
                                <button>{item.name}</button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row mt-3 ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Tổng tập :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">{data.movie.total_episodes}</p>
                            </div>
                        </div>{' '}
                        <div className="row ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Thời lượng :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">{data.movie.time}</p>
                            </div>
                        </div>{' '}
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Chất lượng :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">{data.movie.quality}</p>
                            </div>
                        </div>
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Quốc gia :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">{data.movie.category[4].list[0].name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mt-3 ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Đạo diễn :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">{data.movie.director}</p>
                            </div>
                        </div>{' '}
                        <div className="row ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Diễn viên :</p>
                            </div>
                            <div className="col-lg-8">
                                <p className="test">{data.movie.casts}</p>
                            </div>
                        </div>{' '}
                        <div className="row  ">
                            <div className="col-lg-4 d-flex justify-content-end">
                                <p className="test">Năm :</p>
                            </div>
                            <div className="col-lg-8 d-flex">
                                <p className="test">{data.movie.category[3].list[0].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="test">Nội dung phim :</p>
                        <p className="test">{data.movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
